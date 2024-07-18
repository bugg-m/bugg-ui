import React from 'react';
import { cn } from '@src/utils';
import { cva, VariantProps } from 'class-variance-authority';

const loaderStyles = cva('animate-spin', {
  variants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
    },
    color: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      danger: 'text-danger',
      success: 'text-success',
      warning: 'text-warning',
      white: 'text-white',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

export interface LoaderProps extends VariantProps<typeof loaderStyles> {
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ size, color, className }) => {
  return (
    <svg
      className={cn(loaderStyles({ size, color }), className)}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <circle
        className='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'
      ></circle>
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM20 12a8 8 0 01-8 8v4c6.627 0 12-5.373 12-12h-4zm-2-5.291A7.962 7.962 0 0120 12h4c0-3.042-1.135-5.824-3-7.938l-3 2.647z'
      ></path>
    </svg>
  );
};

Loader.displayName = 'Loader';
