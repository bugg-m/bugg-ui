import { cva } from 'class-variance-authority';

const alertStyles = cva('', {
  variants: {
    variant: {
      success:
        'text-sm text-primary rounded-lg dark:bg-gray-800 bg- dark:text-primary-dark',
    },
  },
});
