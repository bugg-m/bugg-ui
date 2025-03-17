import { useCallback, useEffect, useReducer, useRef } from 'react';
import { IToast, ToastPosition } from '@/components/feedback/Toast/Toast';

type ToastAction =
  | { type: 'ADD_TOAST'; payload: IToast }
  | { type: 'REMOVE_TOAST'; payload: { id: string } }
  | {
      type: 'UPDATE_TOAST_STATUS';
      payload: { id: string; status: IToast['status'] };
    }
  | { type: 'REMOVE_ALL_TOASTS' }
  | { type: 'UPDATE_TOAST'; payload: { id: string; toast: Partial<IToast> } };

type ToastState = {
  toasts: IToast[];
  position: ToastPosition;
  limit: number;
};

function toastReducer(state: ToastState, action: ToastAction): ToastState {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [action.payload, ...state.toasts],
      };
    case 'REMOVE_TOAST':
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== action.payload.id),
      };
    case 'UPDATE_TOAST_STATUS':
      return {
        ...state,
        toasts: state.toasts.map((toast) =>
          toast.id === action.payload.id
            ? { ...toast, status: action.payload.status }
            : toast
        ),
      };
    case 'REMOVE_ALL_TOASTS':
      return {
        ...state,
        toasts: [],
      };
    case 'UPDATE_TOAST':
      return {
        ...state,
        toasts: state.toasts.map((toast) =>
          toast.id === action.payload.id
            ? { ...toast, ...action.payload.toast }
            : toast
        ),
      };
    default:
      return state;
  }
}

export type ToastOptions = Omit<IToast, 'id' | 'message' | 'status'> & {
  position?: ToastPosition;
};

export interface UseToastResult {
  toasts: IToast[];
  addToast: (message: IToast['message'], options?: ToastOptions) => string;
  updateToast: (id: string, options: Partial<Omit<IToast, 'status'>>) => void;
  removeToast: (id: string) => void;
  removeAllToasts: () => void;
  position: ToastPosition;
  setPosition: (position: ToastPosition) => void;
  limit: number;
  setLimit: (limit: number) => void;
}

export const useToastHook = (
  initialPosition: ToastPosition = 'top-right',
  initialLimit: number = 5
): UseToastResult => {
  const [state, dispatch] = useReducer(toastReducer, {
    toasts: [],
    position: initialPosition,
    limit: initialLimit,
  });

  const toastCountRef = useRef(0);
  const positionRef = useRef(initialPosition);
  const limitRef = useRef(initialLimit);

  const setPosition = useCallback((position: ToastPosition) => {
    positionRef.current = position;
  }, []);

  const setLimit = useCallback((limit: number) => {
    limitRef.current = limit;
  }, []);

  const removeToastWithAnimation = useCallback((id: string) => {
    dispatch({
      type: 'UPDATE_TOAST_STATUS',
      payload: { id, status: 'exiting' },
    });

    setTimeout(() => {
      dispatch({ type: 'REMOVE_TOAST', payload: { id } });
    }, 300);
  }, []);

  const addToast = useCallback(
    (message: IToast['message'], options: ToastOptions = {}) => {
      const id = `toast-${Date.now()}-${toastCountRef.current++}`;

      const toast: IToast = {
        id,
        message,
        variant: options.variant || 'info',
        size: options.size || 'md',
        duration: options.duration ?? 5000,
        dismissible: options.dismissible ?? true,
        onClose: options.onClose,
        action: options.action,
        status: 'entering',
      };

      dispatch({ type: 'ADD_TOAST', payload: toast });

      setTimeout(() => {
        dispatch({
          type: 'UPDATE_TOAST_STATUS',
          payload: { id, status: 'entered' },
        });
      }, 300);

      return id;
    },
    []
  );

  const updateToast = useCallback(
    (id: string, options: Partial<Omit<IToast, 'status'>>) => {
      dispatch({ type: 'UPDATE_TOAST', payload: { id, toast: options } });
    },
    []
  );

  useEffect(() => {
    return () => {
      dispatch({ type: 'REMOVE_ALL_TOASTS' });
    };
  }, []);

  return {
    toasts: state.toasts,
    addToast,
    updateToast,
    removeToast: removeToastWithAnimation,
    removeAllToasts: () => {
      state.toasts.forEach((toast) => {
        dispatch({
          type: 'UPDATE_TOAST_STATUS',
          payload: { id: toast.id, status: 'exiting' },
        });
      });

      setTimeout(() => {
        dispatch({ type: 'REMOVE_ALL_TOASTS' });
      }, 300);
    },
    position: positionRef.current,
    setPosition,
    limit: limitRef.current,
    setLimit,
  };
};
