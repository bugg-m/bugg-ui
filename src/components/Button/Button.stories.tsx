import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Mail, ArrowRight, Plus } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'outline',
        'destructive',
        'ghost',
        'link',
        'success',
        'warning',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
    },
    isLoading: { control: 'boolean' },
    loadingText: { control: 'text' },
    disabled: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Base Button story
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

// Variant stories
export const Primary: Story = {
  args: {
    ...Default.args,
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    ...Default.args,
    variant: 'outline',
  },
};

export const Destructive: Story = {
  args: {
    ...Default.args,
    variant: 'destructive',
  },
};

export const Ghost: Story = {
  args: {
    ...Default.args,
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    ...Default.args,
    variant: 'link',
  },
};

export const Success: Story = {
  args: {
    ...Default.args,
    variant: 'success',
    children: 'Success',
  },
};

export const Warning: Story = {
  args: {
    ...Default.args,
    variant: 'warning',
    children: 'Warning',
  },
};

// Size stories
export const Small: Story = {
  args: {
    ...Default.args,
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    ...Default.args,
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'lg',
  },
};

// State stories
export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
    loaderColor: 'white',
  },
};

export const LoadingWithText: Story = {
  args: {
    ...Default.args,
    isLoading: true,
    loadingText: 'Processing...',
    loaderColor: 'white',
  },
};

export const LoadingWithoutText: Story = {
  args: {
    ...Default.args,
    isLoading: true,
    loaderColor: 'white',
  },
};

// Icon stories
export const WithLeftIcon: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        <Mail className='mr-2 h-4 w-4' /> Email
      </>
    ),
  },
};

export const WithRightIcon: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        Next <ArrowRight className='ml-2 h-4 w-4' />
      </>
    ),
  },
};

export const IconOnly: Story = {
  args: {
    size: 'icon',
    'aria-label': 'Add item',
    children: <Plus className='h-4 w-4' />,
  },
};

// Full width button
export const FullWidth: Story = {
  args: {
    ...Default.args,
    className: 'w-full',
  },
};

// Complex example
export const ComplexButton: Story = {
  args: {
    variant: 'outline',
    size: 'lg',
    children: (
      <>
        <Mail className='mr-2 h-5 w-5' />
        <span>Send Newsletter</span>
        <span className='ml-auto bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs'>
          99+
        </span>
      </>
    ),
    className: 'w-full justify-start',
  },
};

// Button Group
export const ButtonGroup: Story = {
  render: () => (
    <div className='flex space-x-2'>
      <Button variant='outline'>Cancel</Button>
      <Button variant='primary'>Submit</Button>
      <Button variant='destructive'>Delete</Button>
    </div>
  ),
};

// Showcase all variants
export const AllVariants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='destructive'>Destructive</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='link'>Link</Button>
      <Button variant='success'>Success</Button>
      <Button variant='warning'>Warning</Button>
    </div>
  ),
};

// Showcase all sizes
export const AllSizes: Story = {
  render: () => (
    <div className='flex items-center space-x-4'>
      <Button size='sm'>Small</Button>
      <Button size='md'>Medium</Button>
      <Button size='lg'>Large</Button>
      <Button size='icon' aria-label='Add'>
        <Plus className='h-4 w-4' />
      </Button>
    </div>
  ),
};

// Showcase loading state
export const LoadingStates: Story = {
  render: () => (
    <div className='flex space-x-4'>
      <Button loaderColor='white' isLoading>
        Loading
      </Button>
      <Button loaderColor='white' isLoading loadingText='Processing...'>
        Submit
      </Button>
      <Button loaderColor='primary' isLoading variant='outline' />
    </div>
  ),
};
