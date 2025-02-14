import { useToastContext } from '@/contexts/toast-context';
import { ToastProvider } from '@/providers/toast-provider';
import { Meta, StoryObj } from '@storybook/react';

// **Meta configuration**
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

      <button
        className='px-4 py-2 bg-success-500 text-white rounded-md hover:bg-success-600'
        onClick={() =>
          addToast({ message: 'This is a success toast!', variant: 'success' })
        }
      >
        Show Success Toast
      </button>

      <button
        className='px-4 py-2 bg-error-500 text-white rounded-md hover:bg-error-600'
        onClick={() =>
          addToast({ message: 'This is an error toast!', variant: 'error' })
        }
      >
        Show Error Toast
      </button>

      <button
        className='px-4 py-2 bg-warning-500 text-white rounded-md hover:bg-warning-600'
        onClick={() =>
          addToast({
            message: 'This is a warning toast!',
            variant: 'warning',
          })
        }
      >
        Show Warning Toast
      </button>

      <button
        className='px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600'
        onClick={() =>
          addToast({
            message: 'This is an info toast!',
            variant: 'info',
          })
        }
      >
        Show Info Toast
      </button>

      <button
        className='px-4 py-2 bg-secondary-600 text-white rounded-md hover:bg-secondary-700'
        onClick={() =>
          addToast({
            message: 'This toast will dismiss after 5 seconds!',
            variant: 'info',
            duration: 5000,
          })
        }
      >
        Toast with Custom Duration
      </button>
    </div>
  );
};

// **Toast Stories**
export const Default: Story = {
  render: () => (
    <ToastProvider>
      <ToastExample />
    </ToastProvider>
  ),
};
