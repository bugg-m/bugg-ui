import { useToastContext } from '@/contexts/toast-context';
import { Button } from '@/main';
import { ToastProvider } from '@/providers/toast-provider';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Experimental/Toast',
  tags: ['autodocs'],
  component: ToastProvider,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;

type Story = StoryObj;

const ToastExample = () => {
  const { addToast } = useToastContext();

  return (
    <div className='space-x-4 p-4 space-y-4'>
      <h1 className='text-xl font-semibold'>Toast Examples</h1>

      <Button
        variant='solid'
        colorScheme='primary'
        onClick={() =>
          addToast({ message: 'This is a primary toast!', variant: 'primary' })
        }
      >
        Show Success Toast
      </Button>

      <Button
        variant='solid'
        colorScheme='success'
        onClick={() =>
          addToast({ message: 'This is a success toast!', variant: 'success' })
        }
      >
        Show Success Toast
      </Button>

      <Button
        variant='solid'
        colorScheme='error'
        onClick={() =>
          addToast({ message: 'This is an error toast!', variant: 'error' })
        }
      >
        Show Error Toast
      </Button>

      <Button
        variant='solid'
        colorScheme='warning'
        onClick={() =>
          addToast({
            message: 'This is a warning toast!',
            variant: 'warning',
          })
        }
      >
        Show Warning Toast
      </Button>

      <Button
        variant='solid'
        colorScheme='info'
        onClick={() =>
          addToast({
            message: 'This is an info toast!',
            variant: 'info',
          })
        }
      >
        Show Info Toast
      </Button>

      <Button
        variant='solid'
        colorScheme='secondary'
        onClick={() =>
          addToast({
            message: 'This toast will dismiss after 5 seconds!',
            variant: 'secondary',
            duration: 5000,
          })
        }
      >
        Toast with Custom Duration
      </Button>
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <ToastProvider>
      <ToastExample />
    </ToastProvider>
  ),
};
