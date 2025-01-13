import { cn } from '@src/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const avatarStyles = cva('flex items-center justify-center relative', {
  variants: {
    shape: {
      square: '',
      rounded: 'rounded',
      circle: 'rounded-full',
    },
    size: {
      sm: 'w-8 h-8 p-0.5 text-sm',
      md: 'w-12 h-12 p-0.5 text-base',
      lg: 'w-14 h-14 p-0.5 text-lg',
      xl: 'w-16 h-16 p-0.5 text-xl',
    },
    border: {
      none: '',
      thin: 'border border-gray-300',
      thick: 'border-2 border-gray-400',
      colorful: 'border-2 border-primary',
    },
    shadow: {
      none: '',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
    },
    defaultVariants: {
      shape: 'circle',
      size: 'md',
      border: 'none',
      shadow: 'none',
    },
  },
});

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarStyles> {
  src?: string;
  alt?: string;
  initials?: string;
  status: boolean;
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt,
      initials = 'u',
      status,
      shape,
      size,
      border,
      shadow,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(avatarStyles({ shape, size, border, shadow }), className)}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt={alt || 'Avatar'}
            className={cn(
              avatarStyles({ shape, size }),
              'object-cover w-full h-full'
            )}
          />
        ) : (
          <span
            className={cn(
              avatarStyles({ shape, size }),
              'font-medium text-gray-50 capitalize bg-gray-400 flex items-center justify-center w-full h-full'
            )}
          >
            {initials}
          </span>
        )}

        {status && (
          <span className='absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white bg-green-600' />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export { Avatar };
