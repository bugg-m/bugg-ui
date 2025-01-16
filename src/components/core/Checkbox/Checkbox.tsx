import React, { forwardRef } from 'react';
import { cn } from '@src/utils';
import { cva, VariantProps } from 'class-variance-authority';

const checkboxStyles = cva(
  'form-checkbox h-4 w-4 rounded transition duration-150 ease-in-out',
  {
    variants: {
      variant: {
        primary: 'text-primary',
        secondary: 'text-secondary',
        success: 'text-success',
        warning: 'text-warning',
        danger: 'text-danger',
        default: '',
      },
      checkboxSize: {
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
        xl: 'h-7 w-7',
      },
    },
    defaultVariants: {
      variant: 'default',
      checkboxSize: 'md',
    },
  }
);

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof checkboxStyles> {
  label?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, variant, checkboxSize, label, error, id, ...props }, ref) => {
    return (
      <div className='flex items-start'>
        <div className='flex items-center h-5'>
          <input
            id={id}
            type='checkbox'
            ref={ref}
            className={cn(checkboxStyles({ checkboxSize, variant }), className)}
            {...props}
          />
        </div>
        {(label || error) && (
          <div className='ml-3 text-sm'>
            {label && (
              <label
                htmlFor={id}
                className={cn(
                  'font-medium text-gray-700',
                  error && 'text-red-500'
                )}
              >
                {label}
              </label>
            )}
            {error && <p className='mt-1 text-xs text-red-500'>{error}</p>}
          </div>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
