import { createContext, useContext } from 'react';
import { UseToastResult } from '@/hooks/use-toast-hook';

export const ToastContext = createContext<UseToastResult | undefined>(
  undefined
);

export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }
  return context;
};
