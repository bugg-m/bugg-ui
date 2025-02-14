import { ToastContainer } from '@/components/feedback/Toast/Toast';
import { ToastContext } from '@/contexts/toast-context';
import { useToast } from '@/hooks/use-toast-hook';

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const toast = useToast();

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <ToastContainer toasts={toast.toasts} onRemove={toast.removeToast} />
    </ToastContext.Provider>
  );
};
