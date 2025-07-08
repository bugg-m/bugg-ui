import React, { useEffect, useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/core-css-utility';
import SVG, { Props } from 'react-inlinesvg';
import { Skeleton } from '@/main';

type CombinedSVGProps = Omit<Props, 'src'> & React.SVGProps<SVGSVGElement>;

interface IconProps extends CombinedSVGProps, VariantProps<typeof iconStyles> {
  src: React.FC<React.SVGProps<SVGSVGElement>> | string;
  className?: string;
}

const iconStyles = cva('stroke-current fill-none p-1', {
  variants: {
    rounded: {
      none: '',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
    size: {
      xs: 'w-5 h-5',
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
    rounded: 'none',
  },
});

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  (
    { src, size, className, iconColor, rounded, backgroundColor, ...props },
    ref
  ) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleLoad = () => {
      setIsLoading(false);
    };

    useEffect(() => {
      handleLoad();
    }, []);

    const combinedClassName = cn(
      iconStyles({ iconColor, size, rounded, backgroundColor }),
      className
    );

    if (typeof src === 'string') {
      return (
        <SVG
          cacheRequests={true}
          src={src}
          className={combinedClassName}
          onLoad={handleLoad}
          loader={
            <Skeleton
              className={cn(iconStyles({ size }))}
              variant={backgroundColor === 'none' ? 'default' : backgroundColor}
              shape={rounded === 'full' ? 'circle' : 'square'}
            />
          }
          {...props}
        />
      );
    } else {
      const SvgIcon = src as React.FC<React.SVGProps<SVGSVGElement>>;
      return (
        <>
          {isLoading && (
            <Skeleton
              className={cn(iconStyles({ size }))}
              variant={backgroundColor === 'none' ? 'default' : backgroundColor}
              shape={rounded === 'full' ? 'circle' : 'square'}
            />
          )}
          <SvgIcon className={combinedClassName} ref={ref} {...props} />
        </>
      );
    }
  }
);

Icon.displayName = 'Icon';

export { Icon };
