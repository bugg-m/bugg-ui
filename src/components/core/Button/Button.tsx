import React, { forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { Loader } from '../../feedback/Loader/Loader';
import { cn } from '@/utils/core-css-utility';

const buttonStyles = cva(
  'inline-flex items-center rounded justify-center text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 select-none whitespace-nowrap shadow-button relative',
  {
    variants: {
      variant: {
        solid: '',
        outline: 'bg-transparent border',
        ghost: 'bg-transparent',
        link: 'bg-transparent underline-offset-4',
      },
      rounded: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
      },
      colorScheme: {
        primary: '',
        secondary: '',
        error: '',
        success: '',
        warning: '',
        info: '',
      },
      size: {
        xs: 'px-1 py-0.5 text-2xs',
        sm: 'px-3 py-1 text-xs',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base',
        icon: 'p-0.5',
      },
      fullWidth: {
        true: 'w-full',
      },
      tone: {
        50: '',
        100: '',
        200: '',
        300: '',
        400: '',
        500: '',
        600: '',
        700: '',
        800: '',
        900: '',
      },
    },
    defaultVariants: {
      variant: 'solid',
      colorScheme: 'primary',
      size: 'md',
      tone: 500,
    },
  }
);

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  isLoading?: boolean;
  hideBackground?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loaderColor?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'white';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const computeTone = (
  tone: number,
  adjustment: number,
  min: number,
  max: number
) => {
  const newTone = tone + adjustment;
  if (newTone < min) return min;
  if (newTone > max) return max;
  return newTone;
};

const getVariantColorClasses = (
  variant: string,
  colorScheme: string,
  tone: number
) => {
  if (variant === 'solid') {
    const hoverTone = computeTone(tone, 100, 50, 900);
    const ringTone = computeTone(tone, -100, 50, 900);
    return `bg-${colorScheme}-${tone} text-white hover:bg-${colorScheme}-${hoverTone} focus-visible:ring-${colorScheme}-${ringTone}`;
  } else if (variant === 'outline') {
    return `border-${colorScheme}-${tone} text-${colorScheme}-${tone} hover:bg-${colorScheme}-50 focus-visible:ring-${colorScheme}-${tone} hover:text-${colorScheme}-700`;
  } else if (variant === 'ghost') {
    return `text-${colorScheme}-${tone} hover:bg-${colorScheme}-100 focus-visible:ring-${colorScheme}-${tone}`;
  } else if (variant === 'link') {
    return `text-${colorScheme}-${tone} hover:underline`;
  }
  return '';
};

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      isLoading,
      hideBackground = false,
      loadingText,
      leftIcon,
      rightIcon,
      children = 'Button',
      loaderColor = 'white',
      type = 'button',
      disabled,
      colorScheme,
      tone,
      ...props
    },
    ref
  ) => {
    const computedColorClasses = getVariantColorClasses(
      variant || 'solid',
      colorScheme || 'primary',
      tone || 500
    );

    const loaderSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md';

    return (
      <button
        className={cn(
          buttonStyles({
            variant,
            size,
            colorScheme,
            tone,
            rounded,
            fullWidth: props.fullWidth,
          }),
          computedColorClasses,
          isLoading
            ? 'cursor-wait'
            : disabled
              ? 'cursor-not-allowed opacity-50'
              : '',
          hideBackground && variant === 'ghost' ? 'hover:bg-transparent' : '',
          className
        )}
        ref={ref}
        disabled={isLoading || disabled}
        aria-busy={isLoading}
        type={type}
        {...props}
      >
        {isLoading ? (
          <span className='flex items-center justify-center'>
            <Loader size={loaderSize} color={loaderColor} />
            {loadingText && <span className='ml-2'>{loadingText}</span>}
          </span>
        ) : (
          <span className='flex items-center justify-center gap-2'>
            {leftIcon && <span>{leftIcon}</span>}
            {children}
            {rightIcon && <span>{rightIcon}</span>}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
