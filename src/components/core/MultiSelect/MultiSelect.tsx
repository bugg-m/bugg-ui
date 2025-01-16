import React, { forwardRef, useState, useRef } from 'react';
import { cn } from '@src/utils';
import { ChevronDown, X, Check } from 'lucide-react';
import { useOnClickOutside } from '@src/hooks/useOnClickOutside';

export interface MultiSelectOptions {
  value: string;
  label: string;
}

export interface MultiSelectProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    'size' | 'value' | 'onChange'
  > {
  options: MultiSelectOptions[];
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
  error?: string;
  value?: string[];
  onChange?: (value: string[]) => void;
}

const MultiSelect = forwardRef<HTMLSelectElement, MultiSelectProps>(
  (
    {
      className,
      options,
      size = 'md',
      placeholder,
      error,
      value = [],
      onChange,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>(value);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(dropdownRef, () => setIsOpen(false));

    const handleSelect = (optionValue: string) => {
      const newSelectedOptions = selectedOptions.includes(optionValue)
        ? selectedOptions.filter((v) => v !== optionValue)
        : [...selectedOptions, optionValue];
      setSelectedOptions(newSelectedOptions);
      if (onChange) {
        onChange(newSelectedOptions);
      }
    };

    const removeOption = (optionValue: string) => {
      const newSelectedOptions = selectedOptions.filter(
        (v) => v !== optionValue
      );
      setSelectedOptions(newSelectedOptions);
      if (onChange) {
        onChange(newSelectedOptions);
      }
    };

    return (
      <div className='relative w-full' ref={dropdownRef}>
        <button
          type='button'
          className={cn(
            'flex flex-wrap items-center p-2 border rounded-md w-full',
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
          {selectedOptions.length > 0 ? (
            selectedOptions.map((optionValue) => {
              const option = options.find((opt) => opt.value === optionValue);
              return (
                <span
                  key={optionValue}
                  className='flex items-center bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full'
                >
                  {option?.label}
                  <X
                    className='w-4 h-4 ml-1 cursor-pointer'
                    onClick={(e) => {
                      e.stopPropagation();
                      removeOption(optionValue);
                    }}
                  />
                </span>
              );
            })
          ) : (
            <span className='text-gray-400'>
              {placeholder || 'Select options'}
            </span>
          )}
          <ChevronDown
            className={cn('w-4 h-4 ml-auto transition-transform', {
              'rotate-180': isOpen,
            })}
          />
        </button>
        {isOpen && (
          <ul
            className='absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto'
            role='listbox'
            aria-multiselectable='true'
          >
            {options.map((option) => (
              <li
                key={option.value}
                className={cn(
                  'p-2 cursor-pointer hover:bg-gray-100 flex items-center',
                  { 'bg-blue-50': selectedOptions.includes(option.value) }
                )}
                onClick={() => handleSelect(option.value)}
                role='option'
                aria-selected={selectedOptions.includes(option.value)}
              >
                <input
                  type='checkbox'
                  checked={selectedOptions.includes(option.value)}
                  onChange={() => {}}
                  className='mr-2'
                />
                {option.label}
                {selectedOptions.includes(option.value) && (
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
        <select
          ref={ref}
          className='sr-only'
          multiple
          value={selectedOptions}
          {...props}
        >
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

MultiSelect.displayName = 'MultiSelect';

export { MultiSelect };
