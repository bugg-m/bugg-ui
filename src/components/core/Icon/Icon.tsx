import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@src/utils/core-css-utility';

export interface IconProps
  extends React.SVGProps<SVGSVGElement>,
    VariantProps<typeof iconStyles> {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const iconStyles = cva('stroke-current fill-none', {
  variants: {
    backgroundColor: {
      none: '',
      primary: 'bg-primary-200 p-1',
      secondary: 'bg-secondary-200 p-1',
      success: 'bg-success-200 p-1',
      warning: 'bg-warning-200 p-1',
      error: 'bg-error-200 p-1',
    },
    shape: {
      none: '',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
    size: {
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
      xl: 'w-10 h-10',
    },
    iconColor: {
      default: 'text-white',
      primary: 'text-primary-500',
      secondary: 'text-secondary-700',
      success: 'text-success-500',
      warning: 'text-warning-500',
      error: 'text-error-500',
    },
  },
  defaultVariants: {
    size: 'sm',
    iconColor: 'secondary',
    backgroundColor: 'none',
    shape: 'none',
  },
});

const Icon: React.FC<IconProps> = ({
  icon: SvgIcon,
  className,
  size,
  iconColor,
  shape,
  backgroundColor,
  ...props
}) => {
  return (
    <SvgIcon
      className={cn(
        iconStyles({ size, iconColor, shape, backgroundColor }),
        className
      )}
      {...props}
    />
  );
};

Icon.displayName = 'Icon';
export default Icon;
