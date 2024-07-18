import React, { forwardRef } from 'react';
import { cn } from '@src/utils';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <label className='inline-flex items-center'>
        <input
          type='checkbox'
          ref={ref}
          className={cn(
            'form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out',
            className
          )}
          {...props}
        />
        {label && <span className='ml-2 text-gray-700'>{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
