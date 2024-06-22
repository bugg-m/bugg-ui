import { cn } from '@src/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps, forwardRef } from 'react';

const inputStyles = cva([
  'w-full',
  'border',
  'border-gray-200',
  'p-2',
  'rounded-lg',
  'transition-all',
  'outline-none',
  'focus:outline-primary-500',
  'focus:border-transparent',
  'placeholder:text-gray-500',
  'placeholder:text-sm',
]);

type InputProps = ComponentProps<'input'> & VariantProps<typeof inputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      autoComplete='off'
      type='text'
      className={cn(inputStyles({ className }))}
      {...props}
    />
  )
);
