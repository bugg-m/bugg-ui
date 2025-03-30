import React, {
  forwardRef,
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react';
import { createPortal } from 'react-dom';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/core-css-utility';
import { Button, Icon } from '@/main';
import { close } from '@/constants/icons';
import { useOnClickOutside } from '@/hooks/use-click-outside-hook';

const modalVariants = cva(
  'relative rounded-lg shadow-xl transition-all duration-200 transform overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-white text-gray-900',
        primary: 'bg-primary-50 border border-primary-200 text-primary-900',
        secondary:
          'bg-secondary-50 border border-secondary-200 text-secondary-900',
        error: 'bg-error-50 border border-error-200 text-error-900',
        success: 'bg-success-50 border border-success-200 text-success-900',
        warning: 'bg-warning-50 border border-warning-200 text-warning-900',
        info: 'bg-info-50 border border-info-200 text-info-900',
      },
      size: {
        xs: 'max-w-xs p-3',
        sm: 'max-w-sm p-4',
        md: 'max-w-md p-5',
        lg: 'max-w-lg p-6',
        xl: 'max-w-xl p-6',
        '2xl': 'max-w-2xl p-6',
        '3xl': 'max-w-3xl p-6',
        '4xl': 'max-w-4xl p-6',
        '5xl': 'max-w-5xl p-6',
        full: 'max-w-full m-4 p-6',
      },
      position: {
        center: 'mx-auto my-auto',
        top: 'mx-auto mt-16 mb-auto',
        bottom: 'mx-auto mt-auto mb-16',
        left: 'ml-16 mr-auto my-auto',
        right: 'mr-16 ml-auto my-auto',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
      animation: {
        none: '',
        fade: 'animate-fade-in duration-200',
        zoom: 'animate-zoom-in-95 duration-200',
        slideTop: 'animate-slide-in-top duration-200',
        slideBottom: 'animate-slide-in-bottom duration-200',
        slideLeft: 'animate-slide-in-left duration-200',
        slideRight: 'animate-slide-in-right duration-200',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      position: 'center',
      fullWidth: false,
      animation: 'fade',
    },
  }
);

const backdropVariants = cva('fixed inset-0 z-[60] flex overflow-y-auto', {
  variants: {
    backdrop: {
      default: 'bg-gray-900/75',
      light: 'bg-gray-500/50',
      dark: 'bg-gray-900/90',
      blur: 'backdrop-blur-sm bg-gray-900/50',
      none: '',
    },
    animation: {
      none: '',
      fade: 'animate-in fade-in duration-200',
      zoom: 'animate-in fade-in duration-200',
    },
  },
  defaultVariants: {
    backdrop: 'default',
    animation: 'fade',
  },
});

const headerVariants = cva('flex items-center justify-between pb-2', {
  variants: {
    variant: {
      default: 'border-b border-gray-200',
      clean: 'border-0',
      primary: 'border-b border-primary-200',
      secondary: 'border-b border-secondary-200',
      error: 'border-b border-error-200',
      success: 'border-b border-success-200',
      warning: 'border-b border-warning-200',
      info: 'border-b border-info-200',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const footerVariants = cva('flex items-center pt-2 mt-4', {
  variants: {
    variant: {
      default: 'border-t border-gray-200',
      clean: 'border-0',
      primary: 'border-t border-primary-200',
      secondary: 'border-t border-secondary-200',
      error: 'border-t border-error-200',
      success: 'border-t border-success-200',
      warning: 'border-t border-warning-200',
      info: 'border-t border-info-200',
    },
    align: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
  },
  defaultVariants: {
    variant: 'default',
    align: 'end',
  },
});

export interface ModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalVariants> {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  header?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  backdrop?: VariantProps<typeof backdropVariants>['backdrop'];
  backdropAnimation?: VariantProps<typeof backdropVariants>['animation'];
  hideCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEsc?: boolean;
  disableScroll?: boolean;
  showCloseIcon?: boolean;
  headerClassName?: string;
  footerClassName?: string;
  backdropClassName?: string;
  headerVariant?: VariantProps<typeof headerVariants>['variant'];
  footerVariant?: VariantProps<typeof footerVariants>['variant'];
  footerAlign?: VariantProps<typeof footerVariants>['align'];
  closeButtonLabel?: string;
  closeIcon?: React.ReactNode;
  style?: React.CSSProperties;
  id?: string;
  className?: string;
  'data-testid'?: string;
}

const Modal = React.memo(
  forwardRef<HTMLDivElement, ModalProps>(
    (
      {
        isOpen,
        onClose,
        children,
        className,
        variant,
        size,
        position,
        fullWidth,
        animation,
        backdrop = 'default',
        backdropAnimation = 'fade',
        hideCloseButton = false,
        closeOnBackdropClick = true,
        closeOnEsc = true,
        disableScroll = true,
        showCloseIcon = true,
        header,
        description,
        footer,
        headerClassName,
        footerClassName,
        backdropClassName,
        headerVariant = 'default',
        footerVariant = 'default',
        footerAlign = 'end',
        closeButtonLabel = 'Close dialog',
        closeIcon,
        style,
        id,
        'data-testid': dataTestId,
        ...props
      },
      ref
    ) => {
      const [mounted, setMounted] = useState(false);
      const [isClosing, setIsClosing] = useState(false);
      const modalRef = useRef<HTMLDivElement>(null);
      const triggerRef = useRef<HTMLElement | null>(null);
      const firstFocusableRef = useRef<HTMLElement | null>(null);

      const handleClose = useCallback(() => {
        setIsClosing(true);
        setTimeout(() => {
          onClose();
          setIsClosing(false);
        }, 200);
      }, [onClose]);

      useOnClickOutside(modalRef, () => {
        if (closeOnBackdropClick && isOpen) {
          handleClose();
        }
      });

      useEffect(() => {
        if (!isOpen || !modalRef.current) return;

        triggerRef.current = document.activeElement as HTMLElement;

        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements && focusableElements.length > 0) {
          (focusableElements[0] as HTMLElement).focus();
          firstFocusableRef.current = focusableElements[0] as HTMLElement;
        }

        return () => {
          if (triggerRef.current) {
            triggerRef.current.focus();
          }
        };
      }, [isOpen]);

      useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event: KeyboardEvent) => {
          if (closeOnEsc && event.key === 'Escape') {
            handleClose();
          }
        };

        if (closeOnEsc) {
          document.addEventListener('keydown', handleEscape);
        }

        return () => {
          document.removeEventListener('keydown', handleEscape);
        };
      }, [isOpen, closeOnEsc, handleClose]);

      useEffect(() => {
        if (!isOpen) return;

        if (disableScroll) {
          const originalOverflow = document.body.style.overflow;
          const originalPaddingRight = document.body.style.paddingRight;
          const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth;

          if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${scrollbarWidth}px`;
          }
          document.body.style.overflow = 'hidden';

          return () => {
            document.body.style.overflow = originalOverflow;
            document.body.style.paddingRight = originalPaddingRight;
          };
        }
      }, [isOpen, disableScroll]);

      useEffect(() => {
        if (!isOpen || !modalRef.current) return;

        const resizeObserver = new ResizeObserver(() => {});

        resizeObserver.observe(modalRef.current);

        return () => {
          resizeObserver.disconnect();
        };
      }, [isOpen]);

      useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
      }, []);

      if (!isOpen || !mounted) return null;

      const modalId = id || 'modal';
      const titleId = `${modalId}-title`;
      const descriptionId = `${modalId}-description`;

      return createPortal(
        <div
          className={cn(
            backdropVariants({ backdrop, animation: backdropAnimation }),
            isClosing ? 'animate-out fade-out duration-200' : '',
            backdropClassName
          )}
          aria-hidden={!isOpen}
          role='dialog'
          id={`${modalId}-backdrop`}
          data-state={isOpen ? 'open' : 'closed'}
          data-testid={dataTestId ? `${dataTestId}-backdrop` : undefined}
        >
          <div className='min-h-full w-full p-4 flex items-center justify-center'>
            <div
              ref={modalRef || ref}
              className={cn(
                modalVariants({
                  variant,
                  size,
                  position,
                  fullWidth,
                  animation,
                }),
                'z-[61]',
                isClosing ? 'animate-out fade-out duration-200' : '',
                className
              )}
              role='dialog'
              aria-modal='true'
              aria-labelledby={header ? titleId : undefined}
              aria-describedby={description ? descriptionId : undefined}
              style={style}
              id={modalId}
              data-testid={dataTestId}
              {...props}
            >
              {(header || description || !hideCloseButton) && (
                <div
                  className={cn(
                    headerVariants({ variant: headerVariant }),
                    headerClassName
                  )}
                >
                  <div className='space-y-1 flex-1'>
                    {header &&
                      (typeof header === 'string' ? (
                        <h2
                          id={titleId}
                          className='text-lg font-semibold capitalize leading-none tracking-tight'
                        >
                          {header}
                        </h2>
                      ) : (
                        <div id={titleId}>{header}</div>
                      ))}
                    {description &&
                      (typeof description === 'string' ? (
                        <p id={descriptionId} className='text-sm text-gray-500'>
                          {description}
                        </p>
                      ) : (
                        <div id={descriptionId}>{description}</div>
                      ))}
                  </div>
                  {!hideCloseButton && showCloseIcon && (
                    <Button
                      variant='ghost'
                      size='icon'
                      onClick={handleClose}
                      aria-label={closeButtonLabel}
                      type='button'
                      rounded='full'
                    >
                      {closeIcon || <Icon src={close} />}
                      <span className='sr-only'>{closeButtonLabel}</span>
                    </Button>
                  )}
                </div>
              )}
              <div
                className={cn(
                  !header && !description && hideCloseButton ? '' : 'pt-4'
                )}
              >
                {children}
              </div>
              {footer && (
                <div
                  className={cn(
                    footerVariants({
                      variant: footerVariant,
                      align: footerAlign,
                    }),
                    footerClassName
                  )}
                >
                  {footer}
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      );
    }
  )
);

Modal.displayName = 'Modal';

export { Modal };
