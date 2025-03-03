import { forwardRef } from 'react';
import { cn } from '@/utils/core-css-utility';
import { cva, VariantProps } from 'class-variance-authority';

const avatarContainerStyles = cva(
  'relative inline-flex items-center justify-center',
  {
    variants: {
      shape: {
        square: '',
        rounded: 'rounded',
        circle: 'rounded-full',
      },
      size: {
        xs: 'w-6 h-6 p-0.5',
        sm: 'w-8 h-8 p-0.5',
        md: 'w-12 h-12 p-0.5',
        lg: 'w-14 h-14 p-0.5',
        xl: 'w-16 h-16 p-0.5',
      },
      border: {
        none: '',
        thin: 'border',
        thick: 'border-2',
      },
      borderColor: {
        primary: 'border-primary-500',
        secondary: 'border-secondary-300',
        error: 'border-error-500',
        success: 'border-success-500',
        warning: 'border-warning-500',
        info: 'border-info-500',
      },
      shadow: {
        none: '',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
      },
    },
    defaultVariants: {
      shape: 'circle',
      size: 'md',
      border: 'none',
      shadow: 'none',
    },
  }
);

const avatarContentStyles = cva(
  'w-full h-full overflow-hidden flex items-center justify-center',
  {
    variants: {
      shape: {
        square: '',
        rounded: 'rounded',
        circle: 'rounded-full',
      },
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
      },
    },
    defaultVariants: {
      shape: 'circle',
      size: 'md',
    },
  }
);

const statusStyles = {
  xs: 'w-2 h-2 border',
  sm: 'w-2.5 h-2.5 border-[1.5px]',
  md: 'w-3 h-3 border-2',
  lg: 'w-3.5 h-3.5 border-2',
  xl: 'w-4 h-4 border-2',
};

interface IAvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarContainerStyles> {
  src?: string;
  alt?: string;
  initials?: string;
  status?: boolean;
}

const Avatar = forwardRef<HTMLDivElement, IAvatarProps>(
  (
    {
      src,
      alt,
      initials = 'S',
      status = false,
      shape,
      size,
      border,
      borderColor,
      shadow,
      className,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        avatarContainerStyles({ shape, size, border, borderColor, shadow }),
        className
      )}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={alt || 'Avatar'}
          className={cn(avatarContentStyles({ shape, size }), 'object-cover')}
        />
      ) : (
        <span
          className={cn(
            avatarContentStyles({ shape, size }),
            'bg-secondary-400 text-secondary-50 font-medium capitalize'
          )}
        >
          {initials}
        </span>
      )}

      {status && (
        <span
          className={cn(
            'absolute rounded-full border-white bg-success-600',
            statusStyles[size ?? 'md'],
            shape === 'circle' && size !== 'sm'
              ? 'bottom-0.5 right-0.5'
              : 'bottom-0 right-0'
          )}
        />
      )}
    </div>
  )
);

Avatar.displayName = 'Avatar';

export { Avatar };
