import React, { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@src/utils/core-css-utility';
import {
  CircleAlert,
  CircleCheckBig,
  CircleX,
  TriangleAlert,
  X,
} from 'lucide-react';
const alertStyles = cva(
  'flex items-start justify-center p-4 gap-2 rounded-lg',
  {
    variants: {
      variant: {
        primary: 'bg-primary-50 text-primary-800',
        info: 'bg-info-50 text-info-800',
        success: 'bg-success-50 text-success-800',
        warning: 'bg-warning-50 text-warning-800',
        error: 'bg-error-50 text-error-800',
        secondary: 'bg-secondary-50 text-secondary-800',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'info',
      size: 'md',
    },
  }
);

const alertButtonStyles = cva(
  'ms-auto -mx-1.5 -my-1.5 rounded-full p-1.5 inline-flex items-center justify-center h-8 w-8 focus:outline-none',
  {
    variants: {
      variant: {
        primary: 'bg-primary-50 text-primary-500 hover:bg-primary-200 ',
        secondary: 'bg-secondary-50 text-secondary-500 hover:bg-secondary-200 ',
        warning: 'bg-warning-50 text-warning-500 hover:bg-warning-200 ',
        success: 'bg-success-50 text-success-500 hover:bg-success-200 ',
        error: 'bg-error-50 text-error-500 hover:bg-error-200 ',
        info: 'bg-info-50 text-info-500 hover:bg-info-200 ',
      },
    },
  }
);

const textStyles = cva('', {
  variants: {
    titleText: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
    subtitleText: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
});

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertStyles> {
  title?: string;
  subtitle?: string;
  icon?: 'success' | 'info' | 'warning' | 'error';
  dismissible?: boolean;
  onDismiss?: () => void;
  listItems?: string[];
}

const Icons = {
  success: <CircleCheckBig size={20} />,
  error: <CircleX size={20} />,
  info: <CircleAlert size={20} />,
  warning: <TriangleAlert size={20} />,
};

export const Alert: React.FC<AlertProps> = forwardRef<
  HTMLDivElement,
  AlertProps
>(
  (
    {
      title,
      subtitle,
      icon,
      dismissible = false,
      onDismiss,
      listItems,
      variant,
      size,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn(alertStyles({ variant, size }))} ref={ref} {...props}>
        {icon && (
          <span className='mt-0.5' role='icon'>
            {Icons[icon]}
          </span>
        )}
        <div className='flex-1'>
          {title && (
            <h3 className={cn(textStyles({ titleText: size }), 'font-medium')}>
              {title}
            </h3>
          )}
          {subtitle && (
            <p
              className={cn(textStyles({ subtitleText: size }), 'font-normal')}
            >
              {subtitle}
            </p>
          )}
          {listItems && (
            <ul
              className={cn(
                textStyles({ subtitleText: size }),
                'font-normal list-disc pl-5 mt-0.5'
              )}
            >
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        {dismissible && (
          <button
            onClick={onDismiss}
            className={cn(alertButtonStyles({ variant }))}
            aria-label='Dismiss alert'
          >
            <X size={20} />
          </button>
        )}
      </div>
    );
  }
);
