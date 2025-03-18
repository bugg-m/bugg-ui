import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'primary',
        'secondary',
        'error',
        'success',
        'warning',
        'info',
      ],
      description: 'Color variant of the skeleton',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
      description: 'Predefined height of the skeleton',
    },
    width: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
      description: 'Predefined width of the skeleton',
    },
    shape: {
      control: 'select',
      options: ['rect', 'circle', 'square', 'pill'],
      description: 'Shape of the skeleton',
    },
    animation: {
      control: 'select',
      options: ['pulse', 'shimmer', 'none'],
      description: 'Animation style for loading effect',
    },
    customWidth: {
      control: 'text',
      description: 'Custom width CSS value (overrides width prop)',
    },
    customHeight: {
      control: 'text',
      description: 'Custom height CSS value (overrides size prop)',
    },
    lines: {
      control: 'number',
      description: 'Number of skeleton lines to display',
    },
    gap: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Gap between multiple lines',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
    width: '3xl',
    shape: 'rect',
  },
};

export const Circle: Story = {
  args: {
    size: 'xl',
    shape: 'circle',
    customWidth: '64px',
    customHeight: '64px',
  },
};

export const Square: Story = {
  args: {
    shape: 'square',
    customWidth: '64px',
    customHeight: '64px',
  },
};

export const Text: Story = {
  args: {
    lines: 3,
    width: 'md',
    size: 'sm',
  },
};

export const Card: Story = {
  render: () => (
    <div className='w-80 p-4 space-y-4 border rounded-lg'>
      <Skeleton shape='rect' size='xl' width='full' />
      <Skeleton shape='rect' size='xs' width='full' />
      <Skeleton lines={3} size='xs' width='full' />
      <div className='flex items-center space-x-4'>
        <Skeleton shape='circle' customWidth='40px' customHeight='40px' />
        <div className='flex-1'>
          <Skeleton size='xs' width='lg' />
          <Skeleton size='xs' width='lg' className='mt-2' />
        </div>
      </div>
    </div>
  ),
};

export const ShimmerAnimation: Story = {
  args: {
    animation: 'shimmer',
    lines: 3,
    size: 'sm',
  },
};

export const ColorVariants: Story = {
  render: () => (
    <div className='space-y-4'>
      <Skeleton variant='default' size='md' width='3xl' />
      <Skeleton variant='primary' size='md' width='3xl' />
      <Skeleton variant='secondary' size='md' width='3xl' />
      <Skeleton variant='success' size='md' width='3xl' />
      <Skeleton variant='error' size='md' width='3xl' />
      <Skeleton variant='warning' size='md' width='3xl' />
      <Skeleton variant='info' size='md' width='3xl' />
    </div>
  ),
};

export const SizeVariants: Story = {
  render: () => (
    <div className='space-y-2'>
      <Skeleton size='xs' width='3xl' />
      <Skeleton size='sm' width='3xl' />
      <Skeleton size='md' width='3xl' />
      <Skeleton size='lg' width='3xl' />
      <Skeleton size='xl' width='3xl' />
      <Skeleton size='2xl' width='3xl' />
      <Skeleton size='3xl' width='3xl' />
    </div>
  ),
};

export const WidthVariants: Story = {
  render: () => (
    <div className='space-y-2'>
      <Skeleton width='xs' size='md' />
      <Skeleton width='sm' size='md' />
      <Skeleton width='md' size='md' />
      <Skeleton width='lg' size='md' />
      <Skeleton width='xl' size='md' />
      <Skeleton width='2xl' size='md' />
      <Skeleton width='3xl' size='md' />
      <Skeleton width='full' size='md' />
    </div>
  ),
};

export const CustomSizes: Story = {
  render: () => (
    <div className='space-y-4'>
      <Skeleton customWidth='75%' customHeight='20px' />
      <Skeleton customWidth='120px' customHeight='120px' shape='circle' />
      <Skeleton customWidth='200px' customHeight='32px' shape='pill' />
    </div>
  ),
};

export const ProfileCard: Story = {
  render: () => (
    <div className='w-80 p-5 border rounded-lg'>
      <div className='flex items-center space-x-4'>
        <Skeleton shape='circle' customWidth='64px' customHeight='64px' />
        <div className='flex-1'>
          <Skeleton size='md' width='lg' />
          <Skeleton size='xs' width='md' className='mt-2' />
        </div>
      </div>
      <div className='mt-6'>
        <Skeleton lines={4} size='xs' gap='md' />
      </div>
      <div className='mt-4 flex justify-between'>
        <Skeleton shape='pill' customWidth='80px' customHeight='32px' />
        <Skeleton shape='pill' customWidth='100px' customHeight='32px' />
      </div>
    </div>
  ),
};
