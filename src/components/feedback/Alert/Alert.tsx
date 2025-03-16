import React, { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/core-css-utility';
import { Icon } from '@/components/core/Icon/Icon';
import {
  close,
  circleAlert,
  circleCheck,
  circleClose,
  triangleAlert,
} from '@/constants/icons';
import { Button } from '@/main';

const alertStyles = cva('flex items-start justify-center p-4 rounded-lg', {
  variants: {
    variant: {
      solid: '',
      outline: 'bg-transparent border',
      filled: 'bg-transparent',
    },
    colorScheme: {
      primary: '',
      secondary: '',
      error: '',
      success: '',
      warning: '',
      info: '',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'filled',
    colorScheme: 'primary',
    size: 'md',
  },
});

const titleText = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};
const subtitleText = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
};

const iconSize = {
  sm: 'w-6 h-6 mr-1',
  md: 'w-7 h-7 mr-1.5',
  lg: 'w-8 h-8 mr-2',
};

interface IAlertProps
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
  success: circleCheck,
  error: circleClose,
  info: circleAlert,
  warning: triangleAlert,
};

const getVariantColorClasses = (variant: string, colorScheme: string) => {
  if (variant === 'filled') {
    return `bg-${colorScheme}-500 text-white`;
  } else if (variant === 'outline') {
    return `border-${colorScheme}-400 text-${colorScheme}-700`;
  } else if (variant === 'solid') {
    return `bg-${colorScheme}-50 text-${colorScheme}-700`;
  }
  return '';
};

const Alert = forwardRef<HTMLDivElement, IAlertProps>(
  (
    {
      title,
      subtitle,
      icon,
      dismissible = false,
      onDismiss,
      listItems,
      colorScheme,
      variant,
      size = 'md',
      ...props
    },
    ref
  ) => {
    const computedColorClasses = getVariantColorClasses(
      variant || 'solid',
      colorScheme || 'primary'
    );
    const textSize = size ?? 'md';
    return (
      <div
        className={cn(alertStyles({ variant, size }), computedColorClasses)}
        ref={ref}
        {...props}
      >
        {icon && (
          <Icon
            src={Icons[icon]}
            iconColor={icon}
            className={`${iconSize[textSize]}`}
          />
        )}
        <div className='flex-1'>
          {title && (
            <h3 className={`${titleText[textSize]} font-medium`}>{title}</h3>
          )}
          {subtitle && (
            <p className={`${subtitleText[textSize]} font-normal`}>
              {subtitle}
            </p>
          )}
          {listItems && (
            <ul
              className={`${subtitleText[textSize]} font-normal list-disc pl-5 mt-0.5`}
            >
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        {dismissible && (
          <Button
            variant='link'
            size='icon'
            onClick={onDismiss}
            aria-label='Dismiss alert'
          >
            <Icon src={close} size='md' iconColor={colorScheme} />
          </Button>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';

export { Alert };
