import { PolymorphicComponentsPropsWithRef, PolymorphicRef } from '@src/types';
import { cn } from '@src/utils';
import { VariantProps, cva } from 'class-variance-authority';
import React, { forwardRef } from 'react';

const textStyles = cva('w-full', {
  variants: {
    emphasis: {
      low: 'text-gray-700 font-light',
    },
    size: {
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
      normal: 'font-normal',
      medium: 'font-medium',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      black: 'font-black',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    italic: {
      true: 'italic',
    },
    underline: {
      true: 'underline underline-offset-2',
    },
  },
  defaultVariants: {
    size: 'md',
    align: 'center',
  },
});

type TextProps<T extends React.ElementType> = PolymorphicComponentsPropsWithRef<
  T,
  VariantProps<typeof textStyles>
>;

type TextComponent = <T extends React.ElementType = 'span'>(
  props: TextProps<T>
) => React.ReactElement | null;

// @ts-expect-error - unexpected error
export const Text: TextComponent = forwardRef(
  <T extends React.ElementType = 'span'>(
    {
      as,
      emphasis,
      size,
      weight,
      italic,
      align,
      underline,
      className,
      ...props
    }: TextProps<T>,
    ref?: PolymorphicRef<T>
  ) => {
    const Component = as || 'span';
    return (
      <Component
        ref={ref}
        className={cn(
          textStyles({
            emphasis,
            size,
            weight,
            italic,
            align,
            underline,
            className,
          })
        )}
        {...props}
      />
    );
  }
);
