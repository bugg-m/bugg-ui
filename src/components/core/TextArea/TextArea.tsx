import { cn } from '@src/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const textareaStyles = cva(
  'w-full border rounded-lg transition-all duration-200 outline-none placeholder:text-sm focus:ring-2 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        solid: 'bg-white',
        outline: 'border-2 bg-transparent',
        ghost: 'bg-transparent border-transparent',
      },
      textAreaSize: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-3 py-2 text-base',
        lg: 'px-4 py-3 text-lg',
      },
      colorScheme: {
        primary:
          'text-primary border-primary placeholder:text-primary-light focus:ring-primary',
        secondary:
          'text-secondary border-secondary placeholder:text-secondary-light focus:ring-secondary',
        success:
          'text-success border-success placeholder:text-success-light focus:ring-success',
        warning:
          'text-warning border-warning placeholder:text-warning-light focus:ring-warning',
      },
    },
    compoundVariants: [
      {
        variant: 'ghost',
        colorScheme: 'primary',
        class: 'hover:bg-primary-light/10',
      },
      {
        variant: 'ghost',
        colorScheme: 'secondary',
        class: 'hover:bg-secondary-light/10',
      },
      {
        variant: 'ghost',
        colorScheme: 'success',
        class: 'hover:bg-success-light/10',
      },
      {
        variant: 'ghost',
        colorScheme: 'warning',
        class: 'hover:bg-warning-light/10',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      textAreaSize: 'md',
      colorScheme: 'primary',
    },
  }
);

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaStyles> {
  label?: string;
  error?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    { variant, textAreaSize, colorScheme, className, label, error, ...props },
    ref
  ) => (
    <div className='flex flex-col w-full'>
      {label && (
        <label
          className='mb-1 text-sm font-medium text-gray-700'
          htmlFor={props.id}
        >
          {label}
        </label>
      )}
      <div className='relative'>
        <textarea
          ref={ref}
          className={cn(
            textareaStyles({ variant, textAreaSize, colorScheme }),
            error && 'border-danger focus:ring-danger',
            className
          )}
          {...props}
        />
      </div>
      {error && <p className='mt-1 text-sm text-danger'>{error}</p>}
    </div>
  )
);

TextArea.displayName = 'TextArea';

export { TextArea };
