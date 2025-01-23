import React, { forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@src/utils/core-css-utility';

const checkboxStyles = cva(
  'form-checkbox rounded transition duration-150 ease-in-out',
  {
    variants: {
      variant: {
        primary: 'text-primary-500 focus:ring-primary-400',
        secondary: 'text-secondary-500 focus:ring-secondary-400',
        success: 'text-success-500 focus:ring-success-400',
        warning: 'text-warning-500 focus:ring-warning-400',
        error: 'text-error-500 focus:ring-error-400',
        info: 'text-info-500 focus:ring-info-400',
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
      variant: 'primary',
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
