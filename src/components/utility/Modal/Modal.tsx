import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@src/utils/core-css-utility';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

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
        ref={modalRef}
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
};

Modal.displayName = 'Modal';
