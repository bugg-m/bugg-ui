import React, { forwardRef, useState, useEffect, useMemo } from 'react';
import { cn } from '@src/utils/core-css-utility';
import { VariantProps, cva } from 'class-variance-authority';
import icons from '@src/constants/icons';
import Icon from '../Icon/Icon';

const inputStyles = cva(
  'w-full rounded-md transition-all duration-200 outline-none focus:ring-0 disabled:opacity-50 peer block appearance-none bg-transparent text-sm focus:outline-none disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        filled: 'bg-secondary-50',
        outline: 'border bg-transparent',
        ghost: 'bg-transparent border-b',
      },
      inputSize: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-3 py-2 text-base',
        lg: 'px-4 py-3 text-lg',
      },
      colorScheme: {
        primary:
          'text-primary-700 border-primary-500 placeholder:text-primary-400 ',
        secondary:
          'text-secondary-700 border-secondary-500 placeholder:text-secondary-400 ',
        error: 'text-error-700 border-error-500 placeholder:text-error-400 ',
        success:
          'text-success-700 border-success-500 placeholder:text-success-400 ',
        warning:
          'text-warning-700 border-warning-500 placeholder:text-warning-400 ',
        info: 'text-info-700 border-info-500 placeholder:text-info-400 ',
      },
    },
    defaultVariants: {
      variant: 'outline',
      inputSize: 'md',
      colorScheme: 'primary',
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputStyles> {
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
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState(type);

    useEffect(() => {
      if (type === 'password') {
        setInputType(showPassword ? 'text' : 'password');
      }
    }, [showPassword, type]);

    const passwordToggleButton = useMemo(() => {
      if (type !== 'password') return null;

      return (
        <button
          type='button'
          className='absolute inset-y-0 right-0 pr-3 flex items-center'
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? (
            <Icon icon={icons.eye} />
          ) : (
            <Icon icon={icons.eyeOff} />
          )}
        </button>
      );
    }, [type, showPassword]);

    const labelTextStyles = {
      primary: 'text-primary-400',
      secondary: 'text-secondary-400',
      error: 'text-error-400',
      success: 'text-success-400',
      warning: 'text-warning-400',
      info: 'text-info-400',
    };

    return (
      <div className='flex flex-col w-full'>
        <div className='relative'>
          <input
            ref={ref}
            className={cn(
              inputStyles({ variant, inputSize, colorScheme }),
              error && 'border-error-500',
              className
            )}
            type={inputType}
            {...props}
            placeholder=''
          />
          {passwordToggleButton}
          {props.placeholder && (
            <label
              className={cn(
                colorScheme
                  ? labelTextStyles[colorScheme]
                  : 'text-secondary-500',
                'mb-1 bg-white font-medium origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none px-2 text-xs duration-300'
              )}
              htmlFor={props.id}
            >
              {props.placeholder}
            </label>
          )}
        </div>
        {error && <p className='mt-0.5 ml-1 text-xs text-error-500'>{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
