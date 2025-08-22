import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/core-css-utility';

const imageStyles = cva('', {
  variants: {
    size: {
      sm: 'w-8 h-8',
      md: 'w-12 h-12',
      lg: 'w-16 h-16',
      xl: 'w-20 h-20',
      full: 'w-full h-full',
    },
    rounded: {
      none: '',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
    backgroundColor: {
      none: '',
      primary: 'bg-primary-200',
      secondary: 'bg-secondary-200',
      success: 'bg-success-200',
      warning: 'bg-warning-200',
      error: 'bg-error-200',
    },
    objectFit: {
      contain: 'object-contain',
      cover: 'object-cover',
      fill: 'object-fill',
      none: 'object-none',
      scaleDown: 'object-scale-down',
    },
  },
  defaultVariants: {
    size: 'md',
    rounded: 'none',
    backgroundColor: 'none',
    objectFit: 'cover',
  },
});

interface ImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof imageStyles> {
  src: string;
  alt: string;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      className,
      size,
      rounded,
      backgroundColor,
      objectFit,
      ...props
    },
    ref
  ) => {
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={cn(
          imageStyles({ size, rounded, backgroundColor, objectFit }),
          className
        )}
        loading='lazy'
        {...props}
      />
    );
  }
);

Image.displayName = 'Image';

export { Image };
