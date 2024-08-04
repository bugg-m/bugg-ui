import React, { forwardRef, useState, useRef } from 'react';
import { cn } from '@src/utils';
import { ChevronDown, Check } from 'lucide-react';
import { useOnClickOutside } from '@src/hooks/useOnClickOutside';

export interface DropdownOption {
  value: string;
  label: string;
}

export interface SingleSelectProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    'size' | 'value' | 'onChange'
  > {
  options: DropdownOption[];
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const SingleSelect = forwardRef<HTMLSelectElement, SingleSelectProps>(
  (
    {
      className,
      options,
      size = 'md',
      placeholder,
      error,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | undefined>(
      value
    );
    const dropdownRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(dropdownRef, () => setIsOpen(false));

    const handleSelect = (optionValue: string) => {
      setSelectedOption(optionValue);
      setIsOpen(false);
      if (onChange) {
        onChange(optionValue);
      }
    };

    const selectedLabel = options.find(
      (opt) => opt.value === selectedOption
    )?.label;

    return (
      <div className='relative' ref={dropdownRef}>
        <button
          type='button'
          className={cn(
            'flex items-center justify-between w-full p-2 border rounded-md',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
            {
              'text-sm': size === 'sm',
              'text-base': size === 'md',
              'text-lg': size === 'lg',
              'border-red-500': error,
              'border-gray-300': !error,
            },
            className
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup='listbox'
          aria-expanded={isOpen}
        >
          <span>{selectedLabel || placeholder || 'Select an option'}</span>
          <ChevronDown
            className={cn('w-4 h-4 transition-transform', {
              'rotate-180': isOpen,
            })}
          />
        </button>
        {isOpen && (
          <ul
            className='absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto'
            role='listbox'
          >
            {options.map((option) => (
              <li
                key={option.value}
                className={cn(
                  'p-2 cursor-pointer hover:bg-gray-100 flex items-center',
                  { 'bg-blue-50': selectedOption === option.value }
                )}
                onClick={() => handleSelect(option.value)}
                role='option'
                aria-selected={selectedOption === option.value}
              >
                {option.label}
                {selectedOption === option.value && (
                  <Check className='w-4 h-4 ml-auto text-blue-600' />
                )}
              </li>
            ))}
          </ul>
        )}
        {error && (
          <p className='mt-1 text-sm text-red-500' role='alert'>
            {error}
          </p>
        )}
        <select ref={ref} className='sr-only' value={selectedOption} {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

SingleSelect.displayName = 'SingleSelect';
export { SingleSelect };
