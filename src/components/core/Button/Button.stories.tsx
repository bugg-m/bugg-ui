import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Badge } from '../Badge/Badge';
import { Icon } from '../Icon/Icon';
import icons from '@src/constants/icons';

const meta: Meta<typeof Button> = {
  title: 'Core/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'outline',
        'error',
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
    leftIcon: { control: 'boolean' },
    rightIcon: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

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
    variant: 'error',
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

export const WithLeftIcon: Story = {
  args: {
    ...Default.args,
    leftIcon: <Icon icon={icons.mail} iconColor={'default'} />,
    children: 'Email',
  },
};

export const WithRightIcon: Story = {
  args: {
    ...Default.args,
    rightIcon: <Icon icon={icons.next} iconColor={'default'} />,
    children: 'Next',
  },
};

export const IconOnly: Story = {
  args: {
    size: 'icon',
    'aria-label': 'Add item',
    children: <Icon icon={icons.plus} iconColor={'default'} />,
  },
};

export const FullWidth: Story = {
  args: {
    ...Default.args,
    className: 'w-full',
  },
};

export const ComplexButton: Story = {
  args: {
    variant: 'outline',
    size: 'lg',
    children: (
      <>
        <Icon icon={icons.mail} className='mr-2' iconColor={'default'} />
        <span>Send Newsletter</span>
        <Badge children='91+' variant='notification' />
      </>
    ),
    className: 'w-full justify-start',
  },
};

export const ButtonGroup: Story = {
  render: () => (
    <div className='inline-flex rounded-md shadow-sm' role='group'>
      <Button variant='outline' className='rounded-r-none'>
        Cancel
      </Button>
      <Button variant='primary' className='rounded-none border-l-0 border-r-0'>
        Submit
      </Button>
      <Button variant='error' className='rounded-l-none'>
        Delete
      </Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Button variant='primary'>Primary</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='error'>Destructive</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='link'>Link</Button>
      <Button variant='success'>Success</Button>
      <Button variant='warning'>Warning</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className='flex items-center space-x-4'>
      <Button size='sm'>Small</Button>
      <Button size='md'>Medium</Button>
      <Button size='lg'>Large</Button>
      <Button size='icon' aria-label='Add'>
        <Icon icon={icons.plus} iconColor={'default'} />
      </Button>
    </div>
  ),
};

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

export const WithTooltip: Story = {
  render: () => (
    <div className='flex items-center justify-center h-32'>
      <Button
        variant='primary'
        aria-label='Add item'
        title='Add a new item to the list'
      >
        <Icon icon={icons.plus} iconColor={'default'} />
      </Button>
    </div>
  ),
};
