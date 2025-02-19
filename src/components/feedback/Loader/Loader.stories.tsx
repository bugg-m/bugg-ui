import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';

const meta = {
  title: 'Feedback/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select', options: ['sm', 'md', 'lg'] },
    },
    color: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'error',
          'success',
          'warning',
          'info',
          'white',
        ],
      },
    },
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: 'sm',
    color: 'primary',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    color: 'primary',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    color: 'primary',
  },
};

export const CustomColor: Story = {
  args: {
    size: 'md',
    color: 'error',
  },
};

export const WithCustomClass: Story = {
  args: {
    size: 'md',
    color: 'primary',
    className: 'shadow-lg',
  },
};

export const AllColors: Story = {
  render: () => (
    <div className='space-y-4'>
      <Loader color='primary' />
      <Loader color='secondary' />
      <Loader color='error' />
      <Loader color='success' />
      <Loader color='warning' />
      <Loader color='info' />
      <div className='p-4 bg-gray-800 rounded-md'>
        <Loader color='white' />
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className='flex items-center space-x-4'>
      <Loader size='sm' />
      <Loader size='md' />
      <Loader size='lg' />
    </div>
  ),
};
