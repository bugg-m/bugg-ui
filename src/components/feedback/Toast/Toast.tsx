import {
  useEffect,
  ReactNode,
  forwardRef,
  useState,
  useRef,
  useCallback,
} from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/utils/core-css-utility';
import { cva, type VariantProps } from 'class-variance-authority';
import { Icon } from '@/components/core/Icon/Icon';
import { close } from '@/constants/icons';
import { Button } from '@/main';

const toastStyles = cva(
  'flex items-center gap-3 px-4 py-3 rounded-md shadow-lg transition-all',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-100 text-primary-800 border-l-4 border-primary-500',
        secondary:
          'bg-secondary-100 text-secondary-800 border-l-4 border-secondary-500',
        success:
          'bg-success-100 text-success-800 border-l-4 border-success-500',
        error: 'bg-error-100 text-error-800 border-l-4 border-error-500',
        warning:
          'bg-warning-100 text-warning-800 border-l-4 border-warning-500',
        info: 'bg-info-100 text-info-800 border-l-4 border-info-500',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'info',
      size: 'md',
    },
  }
);

export type ToastPosition =
  | 'top-right'
  | 'top-left'
  | 'top-center'
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-center';

export interface IToast {
  id: string;
  message: ReactNode;
  variant?: VariantProps<typeof toastStyles>['variant'];
  size?: VariantProps<typeof toastStyles>['size'];
  duration?: number;
  dismissible?: boolean;
  onClose?: () => void;
  action?: ReactNode;
  status?: 'entering' | 'entered' | 'exiting' | 'exited';
}

interface IToastContainerProps {
  toasts: IToast[];
  onRemove: (id: string) => void;
  position?: ToastPosition;
  limit?: number;
}

const positionStyles: Record<ToastPosition, string> = {
  'top-right': 'fixed top-5 right-5 flex flex-col items-end',
  'top-left': 'fixed top-5 left-5 flex flex-col items-start',
  'top-center':
    'fixed top-5 left-1/2 -translate-x-1/2 flex flex-col items-center',
  'bottom-right': 'fixed bottom-5 right-5 flex flex-col items-end',
  'bottom-left': 'fixed bottom-5 left-5 flex flex-col items-start',
  'bottom-center':
    'fixed bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center',
};

const getAnimationClasses = (
  position: ToastPosition,
  status: IToast['status']
) => {
  const animations = {
    'top-right': {
      entering: 'animate-slide-in-right',
      exiting: 'animate-slide-out-right',
    },
    'top-left': {
      entering: 'animate-slide-in-left',
      exiting: 'animate-slide-out-left',
    },
    'top-center': {
      entering: 'animate-slide-in-top',
      exiting: 'animate-slide-out-top',
    },
    'bottom-right': {
      entering: 'animate-slide-in-right',
      exiting: 'animate-slide-out-right',
    },
    'bottom-left': {
      entering: 'animate-slide-in-left',
      exiting: 'animate-slide-out-left',
    },
    'bottom-center': {
      entering: 'animate-slide-in-bottom',
      exiting: 'animate-slide-out-bottom',
    },
  };

  if (status === 'entering') return animations[position].entering;
  if (status === 'exiting') return animations[position].exiting;
  return '';
};

const ToastContainer = forwardRef<HTMLDivElement, IToastContainerProps>(
  ({ toasts, onRemove, position = 'top-right', limit = 5 }, ref) => {
    const [portalElement, setPortalElement] = useState<HTMLElement | null>(
      null
    );

    useEffect(() => {
      setPortalElement(document.body);
    }, []);

    const visibleToasts = toasts.slice(0, limit);

    if (!portalElement) return null;

    return createPortal(
      <div
        ref={ref}
        className={cn(
          positionStyles[position],
          'z-50 flex flex-col gap-3 pointer-events-none'
        )}
        role='region'
        aria-live='polite'
        aria-atomic='false'
        aria-relevant='additions removals'
      >
        {visibleToasts.map((toast) => (
          <div
            key={toast.id}
            className={cn(
              'pointer-events-auto w-full md:max-w-sm',
              getAnimationClasses(position, toast.status)
            )}
          >
            <ToastItem {...toast} onRemove={onRemove} />
          </div>
        ))}
        {toasts.length > limit && (
          <div className='text-sm text-gray-500 mt-2 text-center'>
            {toasts.length - limit} more{' '}
            {toasts.length - limit === 1 ? 'notification' : 'notifications'}
          </div>
        )}
      </div>,
      portalElement
    );
  }
);

ToastContainer.displayName = 'ToastContainer';

interface IToastItemProps extends Omit<IToast, 'duration'> {
  onRemove: (id: string) => void;
  duration?: number;
}

const ToastItem = forwardRef<HTMLDivElement, IToastItemProps>(
  (
    {
      id,
      message,
      variant = 'info',
      size = 'md',
      onRemove,
      duration = 3000,
      dismissible = true,
      onClose,
      action,
    },
    ref
  ) => {
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef<number | null>(null);

    const clearTimer = () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    const handleClose = useCallback(() => {
      clearTimer();
      onRemove(id);
      onClose?.();
    }, [id, onRemove, onClose]);

    useEffect(() => {
      if (duration && !isPaused) {
        clearTimer();
        timerRef.current = window.setTimeout(() => {
          handleClose();
        }, duration);
      }

      return () => clearTimer();
    }, [duration, handleClose, isPaused]);

    return (
      <div
        ref={ref}
        className={cn(toastStyles({ variant, size }), 'w-full')}
        role='alert'
        aria-labelledby={`toast-${id}-message`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className='flex-1' id={`toast-${id}-message`}>
          {message}
        </div>

        {action && <div className='ml-auto mr-2'>{action}</div>}

        {dismissible && (
          <Button
            variant='link'
            className='ml-auto flex-shrink-0'
            onClick={handleClose}
            aria-label='Dismiss'
          >
            <Icon src={close} iconColor={variant} />
          </Button>
        )}
      </div>
    );
  }
);

ToastItem.displayName = 'ToastItem';

export { ToastContainer, ToastItem };
