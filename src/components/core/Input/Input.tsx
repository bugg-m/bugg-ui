import React, { forwardRef, useState, useEffect, useMemo } from 'react';
import { cn } from '@/utils/core-css-utility';
import { VariantProps, cva } from 'class-variance-authority';
import { eye, eyeOff } from '@/constants/icons';
import { Icon } from '../Icon/Icon';
import { Button } from '@/main';

const labelTextStyles: Record<string, string> = {
  primary: 'text-primary-400 peer-focus:text-primary-600',
  secondary: 'text-secondary-400 peer-focus:text-secondary-600',
  error: 'text-error-400 peer-focus:text-error-600',
  success: 'text-success-400 peer-focus:text-success-600',
  warning: 'text-warning-400 peer-focus:text-warning-600',
  info: 'text-info-400 peer-focus:text-info-600',
};

const inputStyles = cva(
  'peer block w-full appearance-none transition-all duration-200 outline-none focus:ring-0 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        outlined: 'border px-3 py-2 rounded-md bg-transparent',
        filled:
          'px-3 py-2 bg-secondary-50 focus:bg-secondary-100 border-b-2 border-t-0 border-l-0 border-r-0 rounded-t-md',
        standard:
          'px-3 py-2 bg-transparent border-b-2 border-t-0 border-l-0 border-r-0 rounded-none',
      },
      inputSize: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
      colorScheme: {
        primary:
          'text-primary-700 border-primary-500 placeholder:text-primary-400 focus:border-primary-600',
        secondary:
          'text-secondary-700 border-secondary-500 placeholder:text-secondary-400 focus:border-secondary-600',
        error:
          'text-error-700 border-error-500 placeholder:text-error-400 focus:border-error-600',
        success:
          'text-success-700 border-success-500 placeholder:text-success-400 focus:border-success-600',
        warning:
          'text-warning-700 border-warning-500 placeholder:text-warning-400 focus:border-warning-600',
        info: 'text-info-700 border-info-500 placeholder:text-info-400 focus:border-info-600',
      },
    },
    defaultVariants: {
      variant: 'outlined',
      inputSize: 'md',
      colorScheme: 'secondary',
    },
  }
);

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputStyles> {
  placeholder: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant,
      inputSize,
      colorScheme,
      className,
      error,
      type = 'text',
      disabled,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState(type);

    useEffect(() => {
      if (type === 'password') {
        setInputType(showPassword ? 'text' : 'password');
      } else {
        setInputType(type);
      }
    }, [showPassword, type]);

    const passwordToggleButton = useMemo(() => {
      if (type !== 'password') return null;
      return (
        <Button
          size='icon'
          variant='ghost'
          hideBackground
          className='absolute inset-y-0 right-0 flex items-center pr-3'
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          disabled={disabled}
        >
          {showPassword ? <Icon src={eye} /> : <Icon src={eyeOff} />}
        </Button>
      );
    }, [type, showPassword, disabled]);

    const effectiveColorScheme = error ? 'error' : colorScheme || 'primary';

    const size = inputSize || 'md';
    const labelFloatingClass =
      size === 'sm'
        ? 'peer-focus:text-xs'
        : size === 'lg'
          ? 'peer-focus:text-base'
          : 'peer-focus:text-sm';

    const labelBgClass =
      variant === 'filled' ? 'bg-transparent' : 'peer-focus:bg-white';

    const labelTranslate =
      variant === 'filled'
        ? 'peer-focus:-translate-y-2'
        : 'peer-focus:-translate-y-4';

    return (
      <div className='flex flex-col w-full'>
        <div className='relative'>
          <input
            ref={ref}
            type={inputType}
            disabled={disabled}
            className={cn(
              inputStyles({
                variant,
                inputSize,
                colorScheme: effectiveColorScheme,
              }),
              error && 'border-error-500 focus:border-error-600',
              variant === 'filled' && 'pt-5',
              className
            )}
            {...props}
            placeholder=''
          />
          {passwordToggleButton}
          {props.placeholder && (
            <label
              htmlFor={props.id}
              className={cn(
                'absolute left-1 top-2 mb-1 bg-white font-medium origin-[0] z-10 -translate-y-4 scale-75 transform cursor-text select-none px-2 text-xs duration-300',
                'peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:scale-75 peer-focus:px-2',
                disabled && 'opacity-50 cursor-not-allowed',
                labelTranslate,
                labelFloatingClass,
                labelBgClass,
                labelTextStyles[effectiveColorScheme]
              )}
            >
              {props.placeholder}
            </label>
          )}
        </div>
        {error && <p className='mt-1 ml-1 text-xs text-error-600'>{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
