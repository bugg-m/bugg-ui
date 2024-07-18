import React from 'react';
import { cn } from '@src/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'outlined' | 'filled';
}

export const Card: React.FC<CardProps> = ({
  className,
  variant = 'elevated',
  ...props
}) => {
  return (
    <div
      className={cn(
        'rounded-lg p-4',
        {
          'shadow-md bg-white': variant === 'elevated',
          'border border-gray-200': variant === 'outlined',
          'bg-gray-100': variant === 'filled',
        },
        className
      )}
      {...props}
    />
  );
};

Card.displayName = 'Card';
