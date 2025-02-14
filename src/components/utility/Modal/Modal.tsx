import React, { forwardRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/utils/core-css-utility';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal = forwardRef<HTMLDivElement, IModalProps>(
  ({ isOpen, onClose, children, className }, ref) => {
    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };

      if (isOpen) {
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
      }

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
      <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
        <div
          ref={ref}
          className={cn(
            'bg-white rounded-lg shadow-xl p-6 m-4 max-w-xl w-full',
            className
          )}
          role='dialog'
          aria-modal='true'
        >
          {children}
        </div>
      </div>,
      document.body
    );
  }
);

Modal.displayName = 'Modal';

export { Modal };
