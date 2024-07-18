import { forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@src/utils';
import { Loader } from '../Loader/Loader';

const buttonStyles = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-md',
    'font-semibold',
    'focus:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
    'transition-colors',
    'duration-200',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        solid: '',
        outline: 'border-2',
        ghost: 'bg-transparent',
        link: 'bg-transparent hover:bg-transparent',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      },
      colorScheme: {
        primary: 'text-primary',
        secondary: 'text-secondary',
        danger: 'text-danger',
        success: 'text-success',
        warning: 'text-warning',
        white: 'text-white',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    compoundVariants: [
      {
        variant: 'solid',
        colorScheme: 'white',
        className: 'bg-primary hover:bg-primary-dark',
      },
      {
        variant: 'outline',
        colorScheme: 'white',
        className:
          'border-primary bg-transparent text-primary hover:bg-primary-light',
      },
      {
        variant: 'ghost',
        colorScheme: 'white',
        className: 'bg-transparent text-primary hover:bg-primary-light',
      },
      {
        variant: 'solid',
        colorScheme: 'secondary',
        className: 'bg-secondary hover:bg-secondary-dark',
      },
      {
        variant: 'outline',
        colorScheme: 'secondary',
        className:
          'border-secondary bg-transparent text-secondary hover:bg-secondary-light',
      },
      {
        variant: 'ghost',
        colorScheme: 'secondary',
        className: 'bg-transparent text-secondary hover:bg-secondary-light',
      },
      {
        variant: 'solid',
        colorScheme: 'danger',
        className: 'bg-danger hover:bg-danger-dark',
      },
      {
        variant: 'outline',
        colorScheme: 'danger',
        className:
          'border-danger bg-transparent text-danger hover:bg-danger-light',
      },
      {
        variant: 'ghost',
        colorScheme: 'danger',
        className: 'bg-transparent text-danger hover:bg-danger-light',
      },
      {
        variant: 'solid',
        colorScheme: 'success',
        className: 'bg-success hover:bg-success-dark',
      },
      {
        variant: 'outline',
        colorScheme: 'success',
        className:
          'border-success bg-transparent text-success hover:bg-success-light',
      },
      {
        variant: 'ghost',
        colorScheme: 'success',
        className: 'bg-transparent text-success hover:bg-success-light',
      },
      {
        variant: 'solid',
        colorScheme: 'warning',
        className: 'bg-warning hover:bg-warning-dark',
      },
      {
        variant: 'outline',
        colorScheme: 'warning',
        className:
          'border-warning bg-transparent text-warning hover:bg-warning-light',
      },
      {
        variant: 'ghost',
        colorScheme: 'warning',
        className: 'bg-transparent text-warning hover:bg-warning-light',
      },
      {
        variant: 'solid',
        colorScheme: 'primary',
        className: 'text-primary hover:text-primary-light underline',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      size: 'md',
      colorScheme: 'white',
      fullWidth: false,
    },
  }
);

type ButtonStylesProps = VariantProps<typeof buttonStyles>;

export interface ButtonProps extends ButtonStylesProps {
  as?: React.ElementType;
  isLoading?: boolean;
  loadingText?: string;
  className?: string;
  children?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // This allows for additional props like 'href' for anchor tags
}

export const Button = forwardRef<HTMLElement, ButtonProps>(
  (
    {
      as: Component = 'button',
      variant,
      size,
      colorScheme,
      fullWidth,
      isLoading,
      loadingText,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <Component
        ref={ref}
        className={cn(
          buttonStyles({ variant, size, colorScheme, fullWidth }),
          className
        )}
        disabled={Component === 'button' ? isDisabled : undefined}
        aria-disabled={isDisabled}
        {...props}
      >
        {isLoading && <Loader size={size} color='white' className='mr-2' />}
        {isLoading ? loadingText || children : children}
      </Component>
    );
  }
);

Button.displayName = 'Button';
