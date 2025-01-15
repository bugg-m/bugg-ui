import React, { forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@src/utils';
import { Loader } from '../Loader/Loader';

const buttonStyles = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-md',
    'text-sm',
    'font-medium',
    'transition-all',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
    'disabled:pointer-events-none',
    'select-none',
    'whitespace-nowrap',
    'shadow-button',
    'relative',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary',
          'text-white',
          'hover:bg-primary-dark',
          'focus-visible:ring-primary-light',
        ],
        secondary: [
          'bg-secondary',
          'text-white',
          'hover:bg-secondary-dark',
          'focus-visible:ring-secondary-light',
        ],
        outline: [
          'border',
          'border-secondary',
          'bg-white',
          'text-secondary-dark',
          'hover:bg-secondary-light/10',
          'focus-visible:ring-secondary',
        ],
        destructive: [
          'bg-danger',
          'text-white',
          'hover:bg-danger-dark',
          'focus-visible:ring-danger-light',
        ],
        ghost: [
          'text-secondary-dark',
          'hover:bg-secondary-light/10',
          'focus-visible:ring-secondary',
        ],
        link: [
          'text-primary',
          'underline-offset-4',
          'hover:underline',
          'focus-visible:ring-primary-light',
        ],
        success: [
          'bg-success',
          'text-white',
          'hover:bg-success-dark',
          'focus-visible:ring-success-light',
        ],
        warning: [
          'bg-warning',
          'text-white',
          'hover:bg-warning-dark',
          'focus-visible:ring-warning-light',
        ],
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 py-2 text-sm',
        lg: 'h-12 px-6 text-base',
        icon: 'h-10 w-10',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    compoundVariants: [
      {
        variant: 'outline',
        className: 'hover:bg-secondary-light/10 hover:text-secondary-dark',
      },
      {
        variant: ['ghost', 'link'],
        className: 'shadow-none hover:bg-transparent',
      },
      {
        size: 'sm',
        className: 'rounded',
      },
      {
        size: 'lg',
        className: 'rounded-lg',
      },
      {
        variant: 'primary',
        size: 'icon',
        className: 'bg-primary text-white hover:bg-primary-dark p-0',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loaderColor?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | 'white';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading,
      loadingText,
      leftIcon,
      rightIcon,
      children,
      loaderColor = 'white',
      type = 'button',
      disabled,
      ...props
    },
    ref
  ) => {
    const loaderSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md';

    return (
      <button
        className={cn(
          buttonStyles({ variant, size }),
          isLoading
            ? 'cursor-wait'
            : disabled
              ? 'cursor-not-allowed opacity-50'
              : '',
          className
        )}
        ref={ref}
        disabled={isLoading || disabled}
        aria-busy={isLoading}
        type={type}
        {...props}
      >
        {isLoading ? (
          <span className='flex items-center justify-center'>
            <Loader size={loaderSize} color={loaderColor} />
            {loadingText && <span className='ml-2'>{loadingText}</span>}
          </span>
        ) : (
          <span className='flex items-center justify-center'>
            {leftIcon && <span className='mr-2'>{leftIcon}</span>}
            {children}
            {rightIcon && <span className='ml-2'>{rightIcon}</span>}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
