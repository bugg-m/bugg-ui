// toast-provider.tsx
import { ToastContainer } from '@/components/feedback/Toast/Toast';
import { ToastContext } from '@/contexts/toast-context';
import { useToast } from '@/hooks/use-toast-hook';
import React, { ReactNode } from 'react';

interface ToastProviderProps {
  children: ReactNode;
  initialPosition?:
    | 'top-right'
    | 'top-left'
    | 'top-center'
    | 'bottom-right'
    | 'bottom-left'
    | 'bottom-center';
  initialLimit?: number;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  initialPosition = 'top-right',
  initialLimit = 5,
}) => {
  const toast = useToast(initialPosition, initialLimit);

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <ToastContainer
        toasts={toast.toasts}
        onRemove={toast.removeToast}
        position={toast.position}
        limit={toast.limit}
      />
    </ToastContext.Provider>
  );
};
