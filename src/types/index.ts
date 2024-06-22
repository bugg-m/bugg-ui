import React from 'react';

export type PropsOf<
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<unknown>,
> = JSX.LibraryManagedAttributes<T, React.ComponentPropsWithoutRef<T>>;

export type AsProp<T extends React.ElementType> = {
  as?: T;
};

export type ExtendableProps<
  ExtendedProps = {},
  OverrideProps = {},
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

export type InheritableElementProps<
  T extends React.ElementType,
  Props = {},
> = ExtendableProps<PropsOf<T>, Props>;

export type PolymorphicComponentsProps<
  T extends React.ElementType,
  Props = {},
> = InheritableElementProps<T, Props & AsProp<T>>;

export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>['ref'];

export type PolymorphicComponentsPropsWithRef<
  T extends React.ElementType,
  Props = {},
> = PolymorphicComponentsProps<T, Props> & { ref?: PolymorphicRef<T> };
