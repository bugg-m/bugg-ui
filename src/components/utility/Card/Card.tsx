import React, { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/core-css-utility';
import { Loader, type ILoaderProps } from '@/main';

export interface ICardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardStyles> {
  loading?: boolean;
  loaderSize?: ILoaderProps['size'];
  loaderColor?: ILoaderProps['color'];
  as?: React.ElementType;
  clickable?: boolean;
  hoverable?: boolean;
  fullWidth?: boolean;
}

type ICardComponentProps<T extends React.ElementType> = ICardProps & {
  as?: T;
};

const cardStyles = cva('rounded-lg transition-all duration-200', {
  variants: {
    size: {
      xs: 'p-1.5 text-xs',
      sm: 'p-2 text-sm',
      md: 'p-3 text-lg',
      lg: 'p-4 text-xl',
      xl: 'p-5 text-2xl',
    },
    variant: {
      elevated: 'shadow-md',
      outlined: 'border',
      filled: 'border',
      flat: 'border-0 shadow-none',
    },
    colorScheme: {
      primary: '',
      secondary: '',
      error: '',
      success: '',
      info: '',
      warning: '',
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
    hoverable: {
      true: 'hover:shadow-xl hover:-translate-y-1',
      false: '',
    },
    clickable: {
      true: 'cursor-pointer active:scale-95',
      false: '',
    },
    fullWidth: {
      true: 'w-full',
      false: '',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed',
      false: '',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'elevated',
    colorScheme: 'primary',
    tone: 500,
    hoverable: false,
    clickable: false,
    fullWidth: false,
    disabled: false,
  },
});

const getColorClasses = (
  variant: string,
  color: string,
  tone: number
): string => {
  if (variant === 'filled') {
    return `bg-${color}-${tone} ${tone < 500 ? 'text-neutral-800' : 'text-neutral-50'} border-${color}-${tone}`;
  }
  if (variant === 'outlined') {
    return `bg-white text-${color}-${tone} border-${color}-${tone} hover:bg-${color}-${tone}`;
  }
  if (variant === 'flat') {
    return `bg-transparent text-${color}-${tone}`;
  }
  return `bg-white text-${color}-${tone}`;
};

const Card = forwardRef<HTMLDivElement, ICardComponentProps<React.ElementType>>(
  (
    {
      as: Component = 'div',
      variant,
      size,
      colorScheme,
      tone,
      hoverable,
      clickable,
      fullWidth,
      disabled,
      loading,
      loaderSize = 'md',
      loaderColor,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const dynamicColorClasses = getColorClasses(
      variant || 'elevated',
      colorScheme || 'primary',
      tone || 500
    );

    return (
      <Component
        ref={ref}
        className={cn(
          cardStyles({
            variant,
            size,
            colorScheme,
            tone,
            hoverable,
            clickable,
            fullWidth,
            disabled,
          }),
          dynamicColorClasses,
          className
        )}
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

export { Card };
