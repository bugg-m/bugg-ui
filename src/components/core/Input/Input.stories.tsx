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
      options: ['outlined', 'filled', 'standard'],
      description: 'Variant style of the input (MUI-like)',
    },
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input',
    },
    colorScheme: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'info', 'error'],
      description: 'Color scheme of the input',
    },
    placeholder: {
      control: 'text',
      description: 'Floating label text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    placeholder: 'Outlined input',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'Filled input',
  },
};

export const Standard: Story = {
  args: {
    variant: 'standard',
    placeholder: 'Standard input',
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Email address',
    error: 'Invalid email address',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled field',
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className='flex flex-col space-y-4'>
      <Input variant='outlined' inputSize='sm' placeholder='Small input' />
      <Input variant='outlined' inputSize='md' placeholder='Medium input' />
      <Input variant='outlined' inputSize='lg' placeholder='Large input' />
    </div>
  ),
};

export const ColorSchemes: Story = {
  render: () => (
    <div className='grid grid-cols-2 gap-4'>
      <Input placeholder='Primary' colorScheme='primary' />
      <Input placeholder='Secondary' colorScheme='secondary' />
      <Input placeholder='Success' colorScheme='success' />
      <Input placeholder='Warning' colorScheme='warning' />
      <Input placeholder='Info' colorScheme='info' />
      <Input placeholder='Error' colorScheme='error' />
    </div>
  ),
};

export const AllVariantsWithError: Story = {
  render: () => (
    <div className='space-y-8'>
      <div>
        <h2 className='text-lg font-semibold mb-2'>Outlined (Error)</h2>
        <Input
          variant='outlined'
          colorScheme='error'
          placeholder='Outlined input'
          error='Incorrect entry.'
        />
      </div>
      <div>
        <h2 className='text-lg font-semibold mb-2'>Filled (Error)</h2>
        <Input
          variant='filled'
          colorScheme='error'
          placeholder='Filled input'
          error='Incorrect entry.'
        />
      </div>
      <div>
        <h2 className='text-lg font-semibold mb-2'>Standard (Error)</h2>
        <Input
          variant='standard'
          colorScheme='error'
          placeholder='Standard input'
          error='Incorrect entry.'
        />
      </div>
    </div>
  ),
};
