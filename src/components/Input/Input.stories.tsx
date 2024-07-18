import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select', options: ['solid', 'outline', 'ghost'] },
    },
    inputSize: {
      control: { type: 'select', options: ['sm', 'md', 'lg'] },
    },
    colorScheme: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'danger', 'success', 'warning'],
      },
    },
    fullWidth: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    error: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    error: 'Invalid email address',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    label: 'Age',
    placeholder: 'Enter your age',
  },
};

export const Date: Story = {
  args: {
    type: 'date',
    label: 'Birth Date',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    placeholder: 'Outline variant',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    placeholder: 'Ghost variant',
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

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    placeholder: 'Full width input',
  },
};

export const ColorSchemes: Story = {
  render: () => (
    <div className='space-y-4'>
      <Input colorScheme='primary' placeholder='Primary' />
      <Input colorScheme='secondary' placeholder='Secondary' />
      <Input colorScheme='danger' placeholder='Danger' />
      <Input colorScheme='success' placeholder='Success' />
      <Input colorScheme='warning' placeholder='Warning' />
    </div>
  ),
};
