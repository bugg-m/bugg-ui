import { cn } from '@src/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import { HTMLAttributes } from 'react';

const badgeStyles = cva(
  'inline-flex items-center justify-center rounded-full text-xs font-medium',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white hover:bg-primary-dark focus:ring-primary-light',
        secondary:
          'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary-light',
        outline:
          'border border-secondary bg-white text-secondary-dark hover:bg-secondary-light/10 focus:ring-secondary',
        destructive:
          'bg-danger text-white hover:bg-danger-dark focus:ring-danger-light',
        ghost:
          'text-secondary-dark hover:bg-secondary-light/10 focus:ring-secondary',
        link: 'text-primary underline-offset-4 hover:underline focus:ring-primary-light',
        success:
          'bg-success text-white hover:bg-success-dark focus:ring-success-light',
        warning:
          'bg-warning text-white hover:bg-warning-dark focus:ring-warning-light',
        notification:
          'absolute top-0 right-0 leading-none !text-[8px] text-white transform translate-x-1/2 -translate-y-1/2 bg-danger size-5',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-base',
      },
    },
    compoundVariants: [
      { size: 'sm', className: 'rounded' },
      { size: 'lg', className: 'rounded-lg' },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeStyles> {
  value: string;
  className?: string;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ value, variant, size, className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeStyles({ variant, size }), className)}
      {...props}
    >
      {value}
    </span>
  )
);

Badge.displayName = 'Badge';

export { Badge };
