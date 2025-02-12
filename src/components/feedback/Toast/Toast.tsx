import React, { useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@src/utils/core-css-utility';
import { cva, VariantProps } from 'class-variance-authority';
import Icon from '@src/components/core/Icon/Icon';
import icons from '@src/constants/icons';

const toastStyles = cva(
  'flex items-center gap-3 px-4 py-3 rounded-md shadow-lg',
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

export interface Toast {
  id: string;
  message: ReactNode;
  variant?: VariantProps<typeof toastStyles>['variant'];
  size?: VariantProps<typeof toastStyles>['size'];
  duration?: number;
  dismissible?: boolean;
}

export interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  onRemove,
}) => {
  return createPortal(
    <div
      className='fixed top-5 right-5 z-50 flex flex-col gap-3'
      role='region'
      aria-live='polite'
      aria-atomic='true'
    >
      {toasts.map(
        ({
          id,
          message,
          variant = 'info',
          size = 'md',
          duration,
          dismissible = true,
        }) => (
          <ToastItem
            key={id}
            id={id}
            message={message}
            variant={variant}
            size={size}
            onRemove={onRemove}
            duration={duration}
            dismissible={dismissible}
          />
        )
      )}
    </div>,
    document.body
  );
};

export interface ToastItemProps extends Omit<Toast, 'duration'> {
  onRemove: (id: string) => void;
  duration?: number;
}

export const ToastItem: React.FC<ToastItemProps> = ({
  id,
  message,
  variant = 'info',
  size = 'md',
  onRemove,
  duration = 3000,
  dismissible = true,
}) => {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        onRemove(id);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [id, onRemove, duration]);

  return (
    <div className={cn(toastStyles({ variant, size }))} role='alert'>
      <div>{message}</div>
      {dismissible && (
        <button
          className='ml-auto text-secondary-600 hover:text-secondary-800'
          onClick={() => onRemove(id)}
          aria-label='Dismiss'
        >
          <Icon icon={icons.close} />
        </button>
      )}
    </div>
  );
};
