import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Core/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'text', description: 'Error message for the input' },
    disabled: { control: 'boolean', description: 'Disable the input' },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
      description: 'Type of the input',
    },
    variant: {
      control: 'select',
      options: ['outline', 'ghost', 'filled'],
      description: 'Variant style of the input',
    },
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input',
    },
    colorScheme: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
      description: 'Color scheme of the input',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
};

export const WithLabel: Story = {
  args: {
    placeholder: 'Enter your username',
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Enter your email',
    error: 'Invalid email address',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    placeholder: 'Outline input',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    placeholder: 'Ghost input',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'Filled input',
  },
};

export const Small: Story = {
  args: {
    inputSize: 'sm',
    placeholder: 'Small input',
  },
};

export const Large: Story = {
  args: {
    inputSize: 'lg',
    placeholder: 'Large input',
  },
};

export const ColorSchemes: Story = {
  render: () => (
    <div className='space-y-2'>
      <Input placeholder='Primary (default)' />
      <Input colorScheme='secondary' placeholder='Secondary' />
      <Input colorScheme='error' placeholder='Error' />
      <Input colorScheme='success' placeholder='Success' />
      <Input colorScheme='warning' placeholder='Warning' />
    </div>
  ),
};
