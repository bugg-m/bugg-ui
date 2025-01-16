import { cn } from '@src/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ChevronRight } from 'lucide-react';
import { forwardRef } from 'react';

const breadcrumbStyles = cva('flex items-center justify-start gap-1', {
  variants: {
    variant: {
      default: 'text-secondary font-semibold text-sm',
      primary: 'text-primary font-semibold text-sm',
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
            <ChevronRight size={20} />
          )}
        </li>
      ))}
    </ul>
  )
);

Breadcrumb.displayName = 'Breadcrumb';

export { Breadcrumb };
