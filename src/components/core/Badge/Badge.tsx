import { cn } from '@/utils/core-css-utility';
import { cva, VariantProps } from 'class-variance-authority';
import React, { forwardRef } from 'react';

const badgeStyles = cva(
  'inline-flex items-center justify-center rounded-full font-medium',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-400',
        secondary:
          'bg-secondary-500 text-white hover:bg-secondary-600 focus-visible:ring-secondary-400',
        outline:
          'border border-secondary-500 bg-white text-secondary-700 hover:bg-secondary-100 focus-visible:ring-secondary-500',
        error:
          'bg-error-500 text-white hover:bg-error-600 focus-visible:ring-error-400',
        ghost:
          'text-secondary-700 hover:bg-secondary-100 focus-visible:ring-secondary-500',
        link: 'text-primary-500 underline-offset-4 hover:underline focus-visible:ring-primary-400',
        success:
          'bg-success-500 text-white hover:bg-success-600 focus-visible:ring-success-400',
        warning:
          'bg-warning-500 text-white hover:bg-warning-600 focus-visible:ring-warning-400',
        notification:
          'absolute top-0 right-0 leading-none !text-[8px] text-white transform translate-x-1/2 -translate-y-1/2 bg-error-500',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
    compoundVariants: [
      { variant: 'primary', size: 'sm', className: 'rounded' },
    ],
  }
);

export interface IBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeStyles> {}

const Badge = forwardRef<HTMLSpanElement, IBadgeProps>(
  ({ className, variant, children = 'Badge', size, ...props }, ref) => (
    <span
      className={cn(badgeStyles({ variant, size }), className)}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  )
);

Badge.displayName = 'Badge';

export { Badge };
