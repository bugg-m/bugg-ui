import React, { forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@src/utils';

const textStyles = cva('', {
  variants: {
    textColors: {
      primary: 'text-primary-500',
      secondary: 'text-secondary-500',
      error: 'text-error-500',
      success: 'text-success-500',
      warning: 'text-warning-500',
      info: 'text-info-500',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    },
    weight: {
      thin: 'font-thin',
      extralight: 'font-extralight',
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
    transform: {
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize',
      normalcase: 'normal-case',
    },
    italic: {
      true: 'italic',
    },
    underline: {
      true: 'underline underline-offset-2',
    },
    lineClamp: {
      1: 'line-clamp-1',
      2: 'line-clamp-2',
      3: 'line-clamp-3',
      4: 'line-clamp-4',
      5: 'line-clamp-5',
      6: 'line-clamp-6',
    },
  },
  defaultVariants: {
    size: 'md',
    textColors: 'primary',
    weight: 'normal',
    align: 'left',
  },
});

type TextStylesProps = VariantProps<typeof textStyles>;

export interface TextProps
  extends React.HTMLAttributes<HTMLElement>,
    TextStylesProps {
  as?: React.ElementType;
}

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      as: Component = 'span',
      textColors,
      size,
      weight,
      align,
      transform,
      italic,
      underline,
      lineClamp,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          textStyles({
            textColors,
            size,
            weight,
            align,
            transform,
            italic,
            underline,
            lineClamp,
          }),
          className
        )}
        {...props}
      />
    );
  }
);

Text.displayName = 'Text';
