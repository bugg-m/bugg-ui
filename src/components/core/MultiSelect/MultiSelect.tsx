import React, { forwardRef, useState, useRef } from 'react';
import { cn } from '@/utils/core-css-utility';
import { cva, VariantProps } from 'class-variance-authority';
import { useOnClickOutside } from '@/hooks/use-click-outside-hook';
import { Icon } from '../Icon/Icon';
import icons from '@/constants/icons';

interface IMultiSelectOptions {
  value: string;
  label: string;
}

interface IMultiSelectProps
  extends Omit<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      'size' | 'value' | 'onChange'
    >,
    VariantProps<typeof multiSelectStyles> {
  options: IMultiSelectOptions[];
  placeholder?: string;
  error?: string;
  value?: string[];
  onChange?: (value: string[]) => void;
}

const multiSelectStyles = cva(
  'flex flex-wrap items-center gap-2 p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-offset-2',
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

const colorStyles = cva('', {
  variants: {
    variant: {
      disabled: 'cursor-not-allowed',
      default: 'bg-primary-100 text-primary-500',
      primary: 'bg-primary-100 text-primary-500',
      secondary: 'bg-secondary-100 text-secondary-500',
      error: 'bg-error-100 text-error-500',
      success: 'bg-success-100 text-success-500',
      warning: 'bg-warning-100 text-warning-500',
      info: 'bg-info-100 text-info-500',
    },
    textColors: {
      disabled: '',
      default: 'text-primary-500',
      primary: 'text-primary-500',
      secondary: 'text-secondary-500',
      error: 'text-error-500',
      success: 'text-success-500',
      warning: 'text-warning-500',
      info: 'text-info-500',
    },
    hoverEffect: {
      disabled: '',
      default: 'hover:bg-primary-100',
      primary: 'hover:bg-primary-100',
      secondary: 'hover:bg-secondary-100',
      error: 'hover:bg-error-100',
      success: 'hover:bg-success-100',
      warning: 'hover:bg-warning-100',
      info: 'hover:bg-info-100',
    },

    defaultVariants: {
      variant: 'default',
    },
  },
});

const MultiSelect = forwardRef<HTMLSelectElement, IMultiSelectProps>(
  (
    {
      className,
      options,
      size,
      variant,
      placeholder,
      error,
      value = [],
      onChange,
      disabled,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>(value);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(dropdownRef, () => setIsOpen(false));

    const handleSelect = (optionValue: string) => {
      if (disabled) return;
      const newSelectedOptions = selectedOptions.includes(optionValue)
        ? selectedOptions.filter((v) => v !== optionValue)
        : [...selectedOptions, optionValue];
      setSelectedOptions(newSelectedOptions);
      onChange?.(newSelectedOptions);
    };

    const removeOption = (optionValue: string) => {
      if (disabled) return;
      const newSelectedOptions = selectedOptions.filter(
        (v) => v !== optionValue
      );
      setSelectedOptions(newSelectedOptions);
      onChange?.(newSelectedOptions);
    };

    return (
      <div className='relative w-full' ref={dropdownRef}>
        <button
          type='button'
          className={cn(multiSelectStyles({ size, variant }), className)}
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup='listbox'
          aria-expanded={isOpen}
          disabled={disabled}
        >
          {selectedOptions.length > 0 ? (
            selectedOptions.map((optionValue) => {
              const option = options.find((opt) => opt.value === optionValue);
              return (
                <span
                  key={optionValue}
                  className={cn(
                    colorStyles({ variant }),
                    'flex items-center text-sm font-medium px-2.5 py-0.5 rounded-full'
                  )}
                >
                  {option?.label}
                  <Icon
                    icon={icons.close}
                    className='ml-1 cursor-pointer'
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
          <Icon
            icon={icons.arrowDown}
            className={cn('ml-auto transition-transform', {
              'rotate-180': isOpen,
            })}
          />
        </button>
        {isOpen && !disabled && (
          <ul
            className='absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto'
            role='listbox'
            aria-multiselectable='true'
          >
            {options.map((option) => (
              <li
                key={option.value}
                className={cn(
                  colorStyles({ hoverEffect: variant }),
                  'p-2 cursor-pointer flex items-center'
                  // { 'bg-primary-50': selectedOptions.includes(option.value) } todo:to fix bg color
                )}
                onClick={() => handleSelect(option.value)}
                role='option'
                aria-selected={selectedOptions.includes(option.value)}
              >
                <input
                  type='checkbox'
                  checked={selectedOptions.includes(option.value)}
                  onChange={() => {}}
                  className={cn(colorStyles({ textColors: variant }), 'mr-2')}
                  disabled={disabled}
                />
                {option.label}
                {selectedOptions.includes(option.value) && (
                  <Icon
                    icon={icons.check}
                    className={cn(
                      colorStyles({ textColors: variant }),
                      'ml-auto'
                    )}
                  />
                )}
              </li>
            ))}
          </ul>
        )}
        {error && (
          <p className='mt-0.5 ml-2 text-xs text-error-500' role='alert'>
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
