import { useToast } from '@/hooks/use-toast-hook';
import { createContext, useContext } from 'react';

export const ToastContext = createContext<
  ReturnType<typeof useToast> | undefined
>(undefined);

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }
  return context;
};
