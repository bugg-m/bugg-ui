import React, { forwardRef } from 'react';
import { cn } from '@src/utils';
import { Loader, LoaderProps } from '@src/main';

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'outlined' | 'filled' | 'flat';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info'
    | 'light'
    | 'dark'
    | 'neutral';
  hoverable?: boolean;
  clickable?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  loaderSize?: LoaderProps['size'];
  loaderColor?: LoaderProps['color'];
  disabled?: boolean;
  as?: React.ElementType;
}

export type CardComponentProps<T extends React.ElementType> = CardProps &
  (T extends 'a' ? AnchorProps : {});

export const Card = forwardRef<
  HTMLDivElement,
  CardComponentProps<React.ElementType>
>(
  (
    {
      className,
      variant = 'elevated',
      size = 'md',
      color = 'neutral',
      hoverable = false,
      clickable = false,
      fullWidth = false,
      loading = false,
      loaderSize = 'md',
      loaderColor,
      disabled = false,
      as: Component = 'div',
      children,
      ...props
    },
    ref
  ) => {
    const cardClasses = cn(
      'rounded-lg transition-all duration-200',
      {
        // Size classes
        'p-2 text-xs': size === 'xs',
        'p-3 text-sm': size === 'sm',
        'p-4 text-base': size === 'md',
        'p-6 text-lg': size === 'lg',
        'p-8 text-xl': size === 'xl',

        // Variant classes
        'shadow-md': variant === 'elevated',
        border: variant === 'outlined',
        'bg-opacity-10': variant === 'filled',
        'border-none': variant === 'flat',

        // Color classes
        'bg-blue-100 border-blue-200 text-blue-800': color === 'primary',
        'bg-purple-100 border-purple-200 text-purple-800':
          color === 'secondary',
        'bg-green-100 border-green-200 text-green-800': color === 'success',
        'bg-yellow-100 border-yellow-200 text-yellow-800': color === 'warning',
        'bg-red-100 border-red-200 text-red-800': color === 'error',
        'bg-cyan-100 border-cyan-200 text-cyan-800': color === 'info',
        'bg-gray-50 border-gray-200 text-gray-800': color === 'light',
        'bg-gray-800 border-gray-700 text-gray-100': color === 'dark',
        'bg-gray-100 border-gray-200 text-gray-800': color === 'neutral',

        // Hover effect
        'hover:shadow-lg hover:-translate-y-1': hoverable && !disabled,

        // Clickable effect
        'cursor-pointer active:scale-95': clickable && !disabled,

        // Full width
        'w-full': fullWidth,

        // Disabled state
        'opacity-50 cursor-not-allowed': disabled,
      },
      className
    );

    return (
      <Component
        ref={ref}
        className={cardClasses}
        {...(clickable && !disabled ? { role: 'button', tabIndex: 0 } : {})}
        {...props}
      >
        {loading ? (
          <div className='flex items-center justify-center h-full'>
            <Loader size={loaderSize} color={loaderColor} />
          </div>
        ) : (
          children
        )}
      </Component>
    );
  }
);

Card.displayName = 'Card';
