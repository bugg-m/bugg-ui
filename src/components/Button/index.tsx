import { cn } from '@src/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';

const buttonStyles = cva(
  [
    'w-full',
    'rounded-md',
    'font-semibold',
    'focus:outline-none',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        solid: '',
        outline: 'border-2',
        ghost: 'transition-colors duration-300',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      },
      colorScheme: {
        primary: 'text-white',
        secondary: 'text-gray-700',
      },
    },
    compoundVariants: [
      {
        variant: 'solid',
        colorScheme: 'primary',
        className: 'bg-primary-500 hover:bg-primary-600',
      },
      {
        variant: 'outline',
        colorScheme: 'primary',
        className:
          'border-primary-500 bg-transparent text-primary-600 hover:bg-primary-100',
      },
      {
        variant: 'ghost',
        colorScheme: 'primary',
        className: 'bg-transparent text-primary-600 hover:bg-primary-100',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      size: 'md',
      colorScheme: 'primary',
    },
  }
);

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonStyles>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorScheme, className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonStyles({ variant, size, colorScheme, className }))}
      {...props}
    />
  )
);
