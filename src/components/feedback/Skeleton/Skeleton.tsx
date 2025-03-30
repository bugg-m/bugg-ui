import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/core-css-utility';

const skeletonVariants = cva('animate-pulse', {
  variants: {
    variant: {
      default: 'bg-gray-200 dark:bg-gray-700',
      primary: 'bg-primary-100',
      secondary: 'bg-secondary-100',
      error: 'bg-error-100',
      success: 'bg-success-100',
      warning: 'bg-warning-100',
      info: 'bg-info-100',
    },
    size: {
      xs: 'h-4',
      sm: 'h-5',
      md: 'h-6',
      lg: 'h-8',
      xl: 'h-10',
      '2xl': 'h-12',
      '3xl': 'h-16',
      full: 'h-full',
    },
    width: {
      xs: 'w-16',
      sm: 'w-24',
      md: 'w-32',
      lg: 'w-48',
      xl: 'w-64',
      '2xl': 'w-80',
      '3xl': 'w-96',
      full: 'w-full',
    },
    shape: {
      rect: 'rounded-md',
      circle: 'rounded-full',
      square: 'rounded-md',
      pill: 'rounded-full',
    },
    animation: {
      pulse: 'animate-pulse',
      shimmer:
        'animate-shimmer bg-gradient-to-r from-transparent via-gray-50 to-transparent bg-[length:200%_100%]',
      none: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    width: '3xl',
    shape: 'rect',
    animation: 'shimmer',
  },
});

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  customWidth?: string;
  customHeight?: string;
  lines?: number;
  gap?: 'xs' | 'sm' | 'md' | 'lg';
}

const getGapSize = (gap: SkeletonProps['gap']) => {
  switch (gap) {
    case 'xs':
      return 'gap-1';
    case 'sm':
      return 'gap-2';
    case 'md':
      return 'gap-3';
    case 'lg':
      return 'gap-4';
    default:
      return 'gap-2';
  }
};

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      className,
      variant,
      size,
      width,
      shape,
      animation,
      customWidth,
      customHeight,
      lines = 1,
      gap = 'sm',
      ...props
    },
    ref
  ) => {
    const skeletonClasses = skeletonVariants({
      variant,
      size,
      width,
      shape,
      animation,
    });

    const inlineStyles: React.CSSProperties = {
      width: customWidth ? customWidth : undefined,
      height: customHeight ? customHeight : undefined,
    };

    if (lines > 1 && shape !== 'circle' && shape !== 'square') {
      return (
        <div
          className={cn('flex flex-col', getGapSize(gap), className)}
          ref={ref}
          {...props}
        >
          {Array.from({ length: lines }).map((_, index) => (
            <div
              key={index}
              className={cn(
                skeletonClasses,
                index === lines - 1 && lines > 1 ? 'w-4/5' : ''
              )}
              style={inlineStyles}
            />
          ))}
        </div>
      );
    }

    return (
      <div
        className={cn(skeletonClasses, className)}
        ref={ref}
        style={inlineStyles}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

export default Skeleton;
