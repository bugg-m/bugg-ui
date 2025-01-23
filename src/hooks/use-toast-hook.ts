import { Toast } from '@src/components/feedback/Toast/Toast';
import { useCallback, useState } from 'react';

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback(
    ({
      message,
      variant = 'info',
      size = 'md',
      duration = 3000,
      dismissible = true,
    }: Omit<Toast, 'id'>) => {
      const id = Math.random().toString(36).substr(2, 9);
      setToasts((prev) => [
        ...prev,
        { id, message, variant, size, duration, dismissible },
      ]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return {
    toasts,
    addToast,
    removeToast,
  };
};
