import { useToastContext } from '@/contexts/toast-context';
import { Button } from '@/main';
import { ToastProvider } from '@/providers/toast-provider';
import { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import { ToastPosition } from './Toast';

const meta: Meta = {
  title: 'Feedback/Toast',
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
  const { addToast, removeAllToasts, position, setPosition, updateToast } =
    useToastContext();

  const [progress, setProgress] = useState(0);
  const [toastId, setToastId] = useState<string | null>(null);

  const handleLoadingToast = () => {
    setProgress(0);

    const id = addToast('Starting upload...', {
      variant: 'info',
      duration: 0,
      action: (
        <Button
          variant='solid'
          colorScheme='primary'
          size='sm'
          onClick={() => {
            setToastId(null);
            setProgress(0);
          }}
        >
          Cancel
        </Button>
      ),
    });

    setToastId(id);
  };

  useEffect(() => {
    if (toastId && progress < 100) {
      const timer = setTimeout(() => {
        const newProgress = progress + 10;
        setProgress(newProgress);

        if (newProgress < 100) {
          updateToast(toastId, {
            message: `Uploading... ${newProgress}%`,
          });
        } else {
          updateToast(toastId, {
            message: 'Upload complete!',
            variant: 'success',
            duration: 3000,
          });
          setToastId(null);
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [progress, toastId, updateToast]);

  return (
    <div className='space-y-4 p-4'>
      <h1 className='text-xl font-semibold'>Toast Examples</h1>

      <div className='space-y-2'>
        <h2 className='text-lg font-medium'>Position</h2>
        <div className='flex flex-wrap gap-2'>
          {[
            'top-right',
            'top-left',
            'top-center',
            'bottom-right',
            'bottom-left',
            'bottom-center',
          ].map((pos) => (
            <Button
              key={pos}
              variant={position === pos ? 'solid' : 'outline'}
              colorScheme={position === pos ? 'primary' : 'secondary'}
              onClick={() => setPosition(pos as ToastPosition)}
            >
              {pos}
            </Button>
          ))}
        </div>
      </div>

      <div className='space-y-2'>
        <h2 className='text-lg font-medium'>Variants</h2>
        <div className='flex flex-wrap gap-2'>
          <Button
            variant='solid'
            colorScheme='primary'
            onClick={() =>
              addToast('This is a primary toast!', { variant: 'primary' })
            }
          >
            Primary
          </Button>

          <Button
            variant='solid'
            colorScheme='secondary'
            onClick={() =>
              addToast('This is a secondary toast!', { variant: 'secondary' })
            }
          >
            Secondary
          </Button>

          <Button
            variant='solid'
            colorScheme='success'
            onClick={() =>
              addToast('This is a success toast!', { variant: 'success' })
            }
          >
            Success
          </Button>

          <Button
            variant='solid'
            colorScheme='error'
            onClick={() =>
              addToast('This is an error toast!', { variant: 'error' })
            }
          >
            Error
          </Button>

          <Button
            variant='solid'
            colorScheme='warning'
            onClick={() =>
              addToast('This is a warning toast!', { variant: 'warning' })
            }
          >
            Warning
          </Button>

          <Button
            variant='solid'
            colorScheme='info'
            onClick={() =>
              addToast('This is an info toast!', { variant: 'info' })
            }
          >
            Info
          </Button>
        </div>
      </div>

      <div className='space-y-2'>
        <h2 className='text-lg font-medium'>Advanced Examples</h2>
        <div className='flex flex-wrap gap-2'>
          <Button
            variant='solid'
            colorScheme='primary'
            onClick={() =>
              addToast('This toast will dismiss after 10 seconds!', {
                duration: 10000,
              })
            }
          >
            Long Duration
          </Button>

          <Button
            variant='solid'
            colorScheme='primary'
            onClick={() =>
              addToast('This toast will not auto-dismiss', {
                duration: 0,
              })
            }
          >
            No Auto-Dismiss
          </Button>

          <Button
            variant='solid'
            colorScheme='primary'
            onClick={() =>
              addToast('This toast has a custom action', {
                action: (
                  <Button variant='outline' size='sm' colorScheme='primary'>
                    Undo
                  </Button>
                ),
              })
            }
          >
            With Action
          </Button>

          <Button
            variant='solid'
            colorScheme='primary'
            onClick={handleLoadingToast}
          >
            Loading Toast
          </Button>

          <Button variant='solid' colorScheme='error' onClick={removeAllToasts}>
            Remove All
          </Button>
        </div>
      </div>
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
