import React, { forwardRef, useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/core-css-utility';

interface ImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof imageStyles> {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

const imageStyles = cva('object-contain', {
  variants: {
    size: {
      sm: 'w-8 h-8',
      md: 'w-12 h-12',
      lg: 'w-16 h-16',
      xl: 'w-20 h-20',
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
  },
  defaultVariants: {
    size: 'md',
    rounded: 'none',
    backgroundColor: 'none',
  },
});

const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      fallbackSrc,
      className,
      size,
      rounded,
      backgroundColor,
      ...props
    },
    ref
  ) => {
    const [imgSrc, setImgSrc] = useState(src);

    const handleError = () => {
      if (fallbackSrc) {
        setImgSrc(fallbackSrc);
      }
    };

    return (
      <img
        ref={ref}
        src={imgSrc}
        alt={alt.replace(' ', '-')}
        loading='lazy'
        onError={handleError}
        className={cn(
          imageStyles({ size, rounded, backgroundColor }),
          className
        )}
        {...props}
      />
    );
  }
);

Image.displayName = 'Image';

export { Image };
