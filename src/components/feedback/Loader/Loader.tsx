import React from 'react';
import { cn } from '@src/utils';
import { cva, VariantProps } from 'class-variance-authority';

const loaderStyles = cva('flex space-x-1', {
  variants: {
    size: {
      sm: 'scale-75',
      md: 'scale-100',
      lg: 'scale-150',
    },
    color: {
      primary: '[&>div]:bg-primary',
      secondary: '[&>div]:bg-secondary',
      danger: '[&>div]:bg-danger',
      success: '[&>div]:bg-success',
      warning: '[&>div]:bg-warning',
      white: '[&>div]:bg-white',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

const dotStyles = cva('w-2 h-2 rounded-full animate-pulse', {
  variants: {
    position: {
      first: 'animate-delay-0',
      second: 'animate-delay-150',
      third: 'animate-delay-300',
    },
  },
});

export interface LoaderProps extends VariantProps<typeof loaderStyles> {
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ size, color, className }) => {
  return (
    <div
      className={cn(loaderStyles({ size, color }), className)}
      role='status'
      aria-label='Loading'
    >
      <div className={dotStyles({ position: 'first' })}></div>
      <div className={dotStyles({ position: 'second' })}></div>
      <div className={dotStyles({ position: 'third' })}></div>
      <span className='sr-only'>Loading...</span>
    </div>
  );
};

Loader.displayName = 'Loader';
