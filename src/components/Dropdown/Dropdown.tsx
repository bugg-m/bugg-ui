import React, { forwardRef } from 'react';
import { cn } from '@src/utils';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options: DropdownOption[];
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, DropdownProps>(
  ({ className, options, size = 'md', ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          'form-select block w-full rounded-md border-gray-300 shadow-sm',
          {
            'text-sm': size === 'sm',
            'text-base': size === 'md',
            'text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = 'Select';
