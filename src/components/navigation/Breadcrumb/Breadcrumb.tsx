import Icon from '@src/components/core/Icon/Icon';
import icons from '@src/constants/icons';
import { cn } from '@src/utils/core-css-utility';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const breadcrumbStyles = cva('flex items-center justify-start gap-1', {
  variants: {
    variant: {
      primary: 'text-primary-500 font-semibold text-sm',
      secondary: 'text-secondary-500 font-semibold text-sm',
      error: 'text-error-500 font-semibold text-sm',
      success: 'text-success-500 font-semibold text-sm',
      warning: 'text-warning-500 font-semibold text-sm',
      info: 'text-info-500 font-semibold text-sm',
    },
    // TODO: fix background styling
    // background: {
    //   default: ' bg-secondary-light rounded-full py-0.5 px-1',
    //   filled: ' bg-primary-light rounded-full py-0.5 px-1',
    // },
  },
  // compoundVariants: [
  //   {
  //     variant: 'default',
  //     background: 'default',
  //     className: 'text-secondary-foreground font-semibold text-sm',
  //   },
  //   {
  //     variant: 'primary',
  //     background: 'default',
  //     className: 'text-primary-foreground font-semibold text-sm',
  //   },
  //   {
  //     variant: 'default',
  //     background: 'filled',
  //     className: 'text-secondary-foreground font-semibold text-sm',
  //   },
  //   {
  //     variant: 'primary',
  //     background: 'filled',
  //     className: 'text-primary-foreground font-semibold text-sm',
  //   },
  // ],
  defaultVariants: {
    variant: 'primary',
  },
});

type BreadCrumbList = {
  name: string;
  link?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export interface BreadcrumbProps
  extends React.HTMLAttributes<HTMLLIElement>,
    VariantProps<typeof breadcrumbStyles> {
  list: BreadCrumbList[];
  separator?: 'line' | 'arrow';
}

const Breadcrumb = forwardRef<HTMLLIElement, BreadcrumbProps>(
  ({ list, variant, separator = 'arrow', className, ...props }, ref) => (
    <ul className='flex items-center justify-start gap-1'>
      {list?.map((current, ind) => (
        <li
          key={ind}
          ref={ref}
          {...props}
          className={cn(breadcrumbStyles({ variant }), className)}
        >
          <span>{current.name}</span>
          {list.length === ind + 1 ? (
            ''
          ) : separator === 'line' ? (
            <span>/</span>
          ) : (
            <Icon icon={icons.arrowRight} />
          )}
        </li>
      ))}
    </ul>
  )
);

Breadcrumb.displayName = 'Breadcrumb';

export { Breadcrumb };
