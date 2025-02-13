import React, { forwardRef, useState, useRef } from 'react';
import { cn } from '@src/utils/core-css-utility';
import { useOnClickOutside } from '@src/hooks/use-click-outside-hook';
import { cva, VariantProps } from 'class-variance-authority';
import { Icon } from '../Icon/Icon';
import icons from '@src/constants/icons';

interface ISingleSelectOptions {
  value: string;
  label: string;
}

interface ISingleSelectProps
  extends Omit<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      'size' | 'value' | 'onChange'
    >,
    VariantProps<typeof singleSelectStyles> {
  options: ISingleSelectOptions[];
  placeholder?: string;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const singleSelectStyles = cva(
  'flex items-center justify-between w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      size: {
        sm: 'text-sm p-2',
        md: 'text-base p-3',
        lg: 'text-lg p-4',
      },
      variant: {
        disabled: 'cursor-not-allowed',
        default:
          'bg-white border-primary-500 text-primary-700 focus:ring-primary-500',
        primary:
          'bg-primary-50 border-primary-300 text-primary-500 focus:ring-primary-500',
        secondary:
          'bg-secondary-50 border-secondary-300 text-secondary-500 focus:ring-secondary-500',
        error:
          'bg-error-50 border-error-300 text-error-500 focus:ring-error-500',
        success:
          'bg-success-50 border-success-300 text-success-500 focus:ring-success-500',
        warning:
          'bg-warning-50 border-warning-300 text-warning-500 focus:ring-warning-500',
        info: 'bg-info-50 border-info-300 text-info-500 focus:ring-info-500',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);

const SingleSelect = forwardRef<HTMLSelectElement, ISingleSelectProps>(
  (
    {
      className,
      options,
      size = 'md',
      placeholder,
      error,
      value,
      variant,
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
          className={cn(singleSelectStyles({ size, variant }), className)}
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup='listbox'
          aria-expanded={isOpen}
        >
          <span>{selectedLabel || placeholder || 'Select an option'}</span>
          <Icon
            icon={icons.arrowDown}
            className={cn('transition-transform', {
              'rotate-180': isOpen,
            })}
          />
        </button>
        {isOpen && (
          <ul
            className='absolute z-10 w-full mt-1 bg-white border border-secondary-300 rounded-md shadow-lg max-h-60 overflow-auto'
            role='listbox'
          >
            {options.map((option) => (
              <li
                key={option.value}
                className={cn(
                  'p-2 cursor-pointer hover:bg-secondary-100 flex items-center',
                  { 'bg-primary-50': selectedOption === option.value }
                )}
                onClick={() => handleSelect(option.value)}
                role='option'
                aria-selected={selectedOption === option.value}
              >
                {option.label}
                {selectedOption === option.value && (
                  <Icon
                    icon={icons.check}
                    className='ml-auto text-primary-600'
                  />
                )}
              </li>
            ))}
          </ul>
        )}
        {error && (
          <p className='mt-1 text-sm text-error-500' role='alert'>
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
