import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/core-css-utility';

interface IconProps
  extends React.SVGProps<SVGSVGElement>,
    VariantProps<typeof iconStyles> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const iconStyles = cva('stroke-current fill-none  p-1', {
  variants: {
    rounded: {
      none: '',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
    size: {
      sm: 'w-6 h-6',
      md: 'w-8 h-8',
      lg: 'w-10 h-10',
      xl: 'w-12 h-12',
    },
    iconColor: {
      default: 'text-white',
      primary: 'text-primary-700',
      secondary: 'text-secondary-700',
      success: 'text-success-700',
      warning: 'text-warning-700',
      error: 'text-error-700',
      info: 'text-info-700',
    },
    backgroundColor: {
      none: '',
      primary: 'bg-primary-50',
      secondary: 'bg-secondary-50',
      success: 'bg-success-50',
      warning: 'bg-warning-50',
      error: 'bg-error-50',
      info: 'bg-info-50',
    },
  },
  defaultVariants: {
    size: 'sm',
    iconColor: 'secondary',
    backgroundColor: 'none',
    rounded: 'full',
  },
});

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  (
    {
      icon: SvgIcon,
      size,
      className,
      iconColor,
      rounded,
      backgroundColor,
      ...props
    },
    ref
  ) => (
    <SvgIcon
      className={cn(
        iconStyles({ iconColor, size, rounded, backgroundColor }),
        className
      )}
      ref={ref}
      {...props}
    />
  )
);

Icon.displayName = 'Icon';

export { Icon };
