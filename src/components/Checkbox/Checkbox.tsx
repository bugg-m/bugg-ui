import React, { forwardRef } from 'react';
import { cn } from '@src/utils';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className='flex items-start'>
        <div className='flex items-center h-5'>
          <input
            type='checkbox'
            ref={ref}
            className={cn(
              'form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out',
              'rounded',
              error ? 'border-red-500' : 'border-gray-300',
              className
            )}
            {...props}
          />
        </div>
        <div className='ml-3 text-sm'>
          {label && (
            <label
              htmlFor={props.id}
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
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
