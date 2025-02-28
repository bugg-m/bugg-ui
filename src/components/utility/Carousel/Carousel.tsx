import React from 'react';
import { cn } from '@/main';

export interface ICarouselProps {
  children: React.ReactNode;
  animationDuration?: number;
  perspective?: string;
  translateZ?: string;
  carouselContainerStyles?: string;
  carouselSliderStyles?: string;
  carouselItemStyles?: string;
  headerStyles?: string;
  title?: string;
}

const Carousel: React.FC<ICarouselProps> = ({
  children,
  animationDuration = 20,
  perspective = '65rem',
  translateZ = '20rem',
  carouselContainerStyles,
  carouselSliderStyles,
  carouselItemStyles,
  headerStyles,
  title,
}) => {
  const items = React.Children.toArray(children);
  const quantity = items.length;

  return (
    <div
      className={cn('carousel-container', carouselContainerStyles)}
      style={{ perspective }}
    >
      {title && (
        <span className={cn('carousel-header', headerStyles)}>{title}</span>
      )}
      <div
        className={cn('carousel-slider', carouselSliderStyles)}
        style={
          {
            '--duration': `${animationDuration}s`,
          } as React.CSSProperties
        }
      >
        {items.map((child, index) => (
          <div
            key={index}
            className={cn('carousel-item', carouselItemStyles)}
            style={
              {
                '--position': index + 1,
                '--quantity': quantity,
                transform: `rotateY(calc((var(--position) - 1) * (360deg / var(--quantity)))) translateZ(${translateZ})`,
              } as React.CSSProperties
            }
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

Carousel.displayName = 'Carousel';

export { Carousel };
