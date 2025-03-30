import React, { forwardRef, Fragment, useState } from 'react';
import { Icon } from '@/components/core/Icon/Icon';
import { slash, arrowRight, home, ellipsis } from '@/constants/icons';
import { cn } from '@/utils/core-css-utility';
import { cva, VariantProps } from 'class-variance-authority';
import { Button } from '@/main';

const breadcrumbRootStyles = cva('flex items-center p-2 flex-wrap', {
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const breadcrumbItemStyles = cva(
  'flex items-center transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'text-secondary-600 hover:text-secondary-800',
        primary: 'text-primary-600 hover:text-primary-800',
        secondary: 'text-secondary-600 hover:text-secondary-800',
        error: 'text-error-600 hover:text-error-800',
        success: 'text-success-600 hover:text-success-800',
        warning: 'text-warning-600 hover:text-warning-800',
        info: 'text-info-600 hover:text-info-800',
      },
      isActive: {
        true: 'font-semibold',
        false: 'font-normal',
      },
      isClickable: {
        true: 'cursor-pointer',
        false: 'cursor-default',
      },
    },
    compoundVariants: [
      {
        isActive: true,
        variant: 'default',
        className: 'text-secondary-900',
      },
      {
        isActive: true,
        variant: 'primary',
        className: 'text-primary-900',
      },
      {
        isActive: true,
        variant: 'secondary',
        className: 'text-secondary-900',
      },
      {
        isActive: true,
        variant: 'error',
        className: 'text-error-900',
      },
      {
        isActive: true,
        variant: 'success',
        className: 'text-success-900',
      },
      {
        isActive: true,
        variant: 'warning',
        className: 'text-warning-900',
      },
      {
        isActive: true,
        variant: 'info',
        className: 'text-info-900',
      },
      {
        isClickable: true,
        className: 'hover:underline',
      },
    ],
    defaultVariants: {
      variant: 'default',
      isActive: false,
      isClickable: false,
    },
  }
);

const separatorStyles = cva('flex items-center justify-center mx-1', {
  variants: {
    size: {
      sm: 'h-5 w-5',
      md: 'h-6 w-6',
      lg: 'h-6 w-6',
    },
    variant: {
      default: 'text-secondary-400',
      primary: 'text-primary-400',
      secondary: 'text-secondary-400',
      error: 'text-error-400',
      success: 'text-success-400',
      warning: 'text-warning-400',
      info: 'text-info-400',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
});

interface IBreadcrumbItem {
  name: string;
  link?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  icon?: React.ReactNode;
}

interface BreadcrumbRootProps
  extends React.HTMLAttributes<HTMLOListElement>,
    VariantProps<typeof breadcrumbRootStyles> {
  children: React.ReactNode;
  'aria-label'?: string;
}

interface BreadcrumbItemProps
  extends React.HTMLAttributes<HTMLLIElement>,
    VariantProps<typeof breadcrumbItemStyles> {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  isActive?: boolean;
  isClickable?: boolean;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

interface BreadcrumbSeparatorProps
  extends React.HTMLAttributes<HTMLLIElement>,
    VariantProps<typeof separatorStyles> {
  children?: React.ReactNode;
}

interface BreadcrumbsProps extends Omit<BreadcrumbRootProps, 'children'> {
  items: IBreadcrumbItem[];
  separator?: React.ReactNode | 'line' | 'arrow' | 'custom';
  customSeparator?: React.ReactNode;
  variant?: VariantProps<typeof breadcrumbItemStyles>['variant'];
  maxItems?: number;
  itemsBeforeCollapse?: number;
  itemsAfterCollapse?: number;
  showHomeIcon?: boolean;
}

const BreadcrumbRoot = forwardRef<HTMLOListElement, BreadcrumbRootProps>(
  (
    {
      children,
      size,
      className,
      'aria-label': ariaLabel = 'breadcrumb',
      ...props
    },
    ref
  ) => (
    <ol
      ref={ref}
      className={cn(breadcrumbRootStyles({ size }), className)}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </ol>
  )
);

const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  (
    {
      variant,
      isActive = false,
      isClickable = false,
      icon,
      href,
      onClick,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const itemContent = (
      <div
        className={cn(
          breadcrumbItemStyles({
            variant,
            isActive,
            isClickable: isClickable || !!href || !!onClick,
          }),
          className
        )}
        onClick={onClick}
        role={onClick || href ? 'button' : undefined}
        tabIndex={onClick || href ? 0 : undefined}
        aria-current={isActive ? 'page' : undefined}
      >
        {icon && <span className='mr-1 flex items-center'>{icon}</span>}
        {children}
      </div>
    );

    return (
      <li ref={ref} {...props}>
        {href ? (
          <a href={href} className='no-underline'>
            {itemContent}
          </a>
        ) : (
          itemContent
        )}
      </li>
    );
  }
);

const BreadcrumbSeparator = forwardRef<HTMLLIElement, BreadcrumbSeparatorProps>(
  ({ size, variant, className, children, ...props }, ref) => (
    <li
      ref={ref}
      aria-hidden='true'
      className={cn(separatorStyles({ size, variant }), className)}
      {...props}
    >
      {children}
    </li>
  )
);

const BreadcrumbCollapsed = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, onClick, ...props }, ref) => (
    <li ref={ref} {...props}>
      <Button
        className={cn(className)}
        size='icon'
        rounded='full'
        variant='ghost'
        onClick={onClick}
        aria-label='Show more breadcrumbs'
      >
        <Icon src={ellipsis} />
      </Button>
    </li>
  )
);

const Breadcrumbs = forwardRef<HTMLOListElement, BreadcrumbsProps>(
  (
    {
      items,
      separator = 'arrow',
      customSeparator,
      size = 'md',
      variant = 'default',
      maxItems,
      itemsBeforeCollapse = 1,
      itemsAfterCollapse = 1,
      showHomeIcon = false,
      className,
      ...props
    },
    ref
  ) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const renderSeparator = () => {
      if (separator === 'custom' && customSeparator) {
        return customSeparator;
      }

      if (separator === 'line') {
        const lineSize = size === 'sm' ? 'xs' : 'sm';
        return <Icon src={slash} size={lineSize} />;
      }

      if (separator === 'arrow') {
        return <Icon src={arrowRight} size={size} />;
      }

      return separator;
    };

    let allItems = [...items];
    if (showHomeIcon && allItems.length > 0) {
      allItems = [
        { name: 'Home', icon: <Icon src={home} size='sm' /> },
        ...allItems,
      ];
    }

    let itemsToRender = allItems;

    if (
      !isExpanded &&
      maxItems &&
      maxItems < allItems.length &&
      maxItems > itemsBeforeCollapse + itemsAfterCollapse
    ) {
      const beforeItems = allItems.slice(0, itemsBeforeCollapse);
      const afterItems = allItems.slice(allItems.length - itemsAfterCollapse);

      itemsToRender = [...beforeItems, { name: 'collapsed' }, ...afterItems];
    }

    const handleExpandCollapse = () => {
      setIsExpanded(true);
    };

    return (
      <BreadcrumbRoot ref={ref} size={size} className={className} {...props}>
        {itemsToRender.map((item, index) => {
          const isLast = index === itemsToRender.length - 1;
          const isCollapsed = item.name === 'collapsed';

          if (isCollapsed) {
            return (
              <Fragment key='collapsed'>
                <BreadcrumbCollapsed onClick={handleExpandCollapse} />
                <BreadcrumbSeparator size={size} variant={variant}>
                  {renderSeparator()}
                </BreadcrumbSeparator>
              </Fragment>
            );
          }

          return (
            <Fragment key={`${item.name}-${index}`}>
              <BreadcrumbItem
                variant={variant}
                isActive={isLast}
                isClickable={!!item.onClick || !!item.link}
                onClick={item.onClick}
                href={item.link}
                icon={item.icon}
              >
                {item.name}
              </BreadcrumbItem>

              {!isLast && (
                <BreadcrumbSeparator size={size} variant={variant}>
                  {renderSeparator()}
                </BreadcrumbSeparator>
              )}
            </Fragment>
          );
        })}
      </BreadcrumbRoot>
    );
  }
);

BreadcrumbRoot.displayName = 'BreadcrumbRoot';
BreadcrumbItem.displayName = 'BreadcrumbItem';
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';
BreadcrumbCollapsed.displayName = 'BreadcrumbCollapsed';

Breadcrumbs.displayName = 'Breadcrumbs';

export {
  Breadcrumbs,
  BreadcrumbRoot,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbCollapsed,
};

export { Breadcrumbs as Breadcrumb };
