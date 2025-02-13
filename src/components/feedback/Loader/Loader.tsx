import { forwardRef } from 'react';
import { cn } from '@src/utils/core-css-utility';
import { cva, VariantProps } from 'class-variance-authority';

const loaderStyles = cva('flex space-x-1', {
  variants: {
    size: {
      sm: 'scale-75',
      md: 'scale-100',
      lg: 'scale-150',
    },
    color: {
      primary: '[&>div]:bg-primary-500',
      secondary: '[&>div]:bg-secondary-500',
      error: '[&>div]:bg-error-500',
      success: '[&>div]:bg-success-500',
      warning: '[&>div]:bg-warning-500',
      info: '[&>div]:bg-info-500',
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

export interface ILoaderProps extends VariantProps<typeof loaderStyles> {
  className?: string;
}

const Loader = forwardRef<HTMLDivElement, ILoaderProps>(
  ({ size, color, className }) => (
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
  )
);

Loader.displayName = 'Loader';

export { Loader };
