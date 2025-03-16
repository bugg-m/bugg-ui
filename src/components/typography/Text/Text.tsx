import React, { forwardRef, ElementType, Ref } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/core-css-utility';

const textStyles = cva('', {
  variants: {
    textColor: {
      white: '',
      primary: '',
      secondary: '',
      error: '',
      success: '',
      warning: '',
      info: '',
    },
    tone: {
      50: '',
      100: '',
      200: '',
      300: '',
      400: '',
      500: '',
      600: '',
      700: '',
      800: '',
      900: '',
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
    textColor: 'secondary',
    tone: 700,
    weight: 'normal',
    align: 'left',
  },
});

type AsProp<T extends ElementType> = {
  as?: T;
};

type PropsToOmit<T extends ElementType, P> = keyof (AsProp<T> & P);

export type PolymorphicComponentProps<
  T extends ElementType,
  Props = {},
> = React.PropsWithChildren<Props & AsProp<T>> &
  Omit<React.ComponentPropsWithoutRef<T>, PropsToOmit<T, Props>>;

export type TextProps<T extends ElementType = 'span'> =
  PolymorphicComponentProps<T, VariantProps<typeof textStyles>>;

const Text = forwardRef(
  <T extends ElementType = 'span'>(
    {
      as,
      textColor = 'primary',
      tone = 700,
      size,
      weight,
      align,
      transform,
      italic,
      underline,
      lineClamp,
      className,
      ...props
    }: TextProps<T>,
    ref: Ref<HTMLElement>
  ) => {
    const Component = as || 'span';
    const dynamicColor = textColor ? `text-${textColor}-${tone}` : 'text-white';

    return (
      <Component
        ref={ref}
        className={cn(
          textStyles({
            size,
            weight,
            align,
            transform,
            italic,
            underline,
            lineClamp,
          }),
          dynamicColor,
          className
        )}
        {...props}
      />
    );
  }
);

Text.displayName = 'Text';

export { Text };
