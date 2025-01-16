import {
  ComponentProps,
  forwardRef,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { cn } from '@src/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { Eye, EyeOff } from 'lucide-react';

const inputStyles = cva(
  [
    'w-full',
    'border',
    'rounded-lg',
    'transition-all',
    'duration-200',
    'outline-none',
    'placeholder:text-sm',
    'focus:ring-2',
    'focus:ring-opacity-50',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        solid: 'bg-white',
        outline: 'border-2 bg-transparent',
        ghost: 'bg-transparent border-transparent',
      },
      inputSize: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-3 py-2 text-base',
        lg: 'px-4 py-3 text-lg',
      },
      colorScheme: {
        primary:
          'text-primary border-primary placeholder:text-primary-light focus:ring-primary',
        secondary:
          'text-secondary border-secondary placeholder:text-secondary-light focus:ring-secondary',
        danger:
          'text-danger border-danger placeholder:text-danger-light focus:ring-danger',
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
        colorScheme: 'danger',
        class: 'hover:bg-danger-light/10',
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
      inputSize: 'md',
      colorScheme: 'primary',
    },
  }
);

export interface InputProps
  extends ComponentProps<'input'>,
    VariantProps<typeof inputStyles> {
  label?: string;
  error?: string;
  showPasswordToggle?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant,
      inputSize,
      colorScheme,
      className,
      label,
      error,
      showPasswordToggle,
      type = 'text',
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState(type);

    useEffect(() => {
      if (type === 'password') {
        setInputType(showPassword ? 'text' : 'password');
      }
    }, [showPassword, type]);

    const passwordToggleButton = useMemo(() => {
      if (!showPasswordToggle || type !== 'password') return null;

      return (
        <button
          type='button'
          className='absolute inset-y-0 right-0 pr-3 flex items-center'
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      );
    }, [showPasswordToggle, type, showPassword]);

    return (
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
          <input
            ref={ref}
            className={cn(
              inputStyles({ variant, inputSize, colorScheme }),
              error && 'border-danger focus:ring-danger',
              showPasswordToggle && 'pr-10',
              className
            )}
            type={inputType}
            {...props}
          />
          {passwordToggleButton}
        </div>
        {error && <p className='mt-1 text-sm text-danger'>{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
