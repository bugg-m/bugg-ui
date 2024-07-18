import { ComponentProps, forwardRef } from 'react';
import { cn } from '@src/utils';
import { VariantProps, cva } from 'class-variance-authority';

const inputStyles = cva(
  [
    'w-full',
    'border',
    'rounded-lg',
    'transition-all',
    'duration-200',
    'outline-none',
    'placeholder:text-sm',
    'focus:ring-2',
    'focus:ring-opacity-50',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        solid: 'bg-white',
        outline: 'border-2 bg-transparent',
        ghost: 'bg-transparent border-transparent',
      },
      inputSize: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-3 py-2 text-base',
        lg: 'px-4 py-3 text-lg',
      },
      colorScheme: {
        primary:
          'text-primary border-primary placeholder:text-primary-light focus:ring-primary',
        secondary:
          'text-secondary border-secondary placeholder:text-secondary-light focus:ring-secondary',
        danger:
          'text-danger border-danger placeholder:text-danger-light focus:ring-danger',
        success:
          'text-success border-success placeholder:text-success-light focus:ring-success',
        warning:
          'text-warning border-warning placeholder:text-warning-light focus:ring-warning',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    compoundVariants: [
      {
        variant: 'ghost',
        colorScheme: 'primary',
        class: 'hover:bg-primary-light/10',
      },
      {
        variant: 'ghost',
        colorScheme: 'secondary',
        class: 'hover:bg-secondary-light/10',
      },
      {
        variant: 'ghost',
        colorScheme: 'danger',
        class: 'hover:bg-danger-light/10',
      },
      {
        variant: 'ghost',
        colorScheme: 'success',
        class: 'hover:bg-success-light/10',
      },
      {
        variant: 'ghost',
        colorScheme: 'warning',
        class: 'hover:bg-warning-light/10',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      inputSize: 'md',
      colorScheme: 'primary',
      fullWidth: true,
    },
  }
);

export interface InputProps
  extends ComponentProps<'input'>,
    VariantProps<typeof inputStyles> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant,
      inputSize,
      colorScheme,
      className,
      label,
      error,
      fullWidth,
      ...props
    },
    ref
  ) => (
    <div className={cn('flex flex-col', fullWidth ? 'w-full' : 'w-auto')}>
      {label && (
        <label
          className='mb-1 text-sm font-medium text-gray-700'
          htmlFor={props.id}
        >
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={cn(
          inputStyles({ variant, inputSize, colorScheme, fullWidth }),
          error && 'border-danger focus:ring-danger',
          className
        )}
        {...props}
      />
      {error && <p className='mt-1 text-sm text-danger'>{error}</p>}
    </div>
  )
);

Input.displayName = 'Input';
