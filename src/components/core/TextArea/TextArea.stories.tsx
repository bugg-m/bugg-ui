import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Core/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost'],
    },
    textAreaSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    colorScheme: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'warning'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Message',
    placeholder: 'Write message',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    placeholder: 'Outline textarea',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    placeholder: 'Ghost textarea',
  },
};

export const Small: Story = {
  args: {
    textAreaSize: 'sm',
    placeholder: 'Small textarea',
  },
};

export const Large: Story = {
  args: {
    textAreaSize: 'lg',
    placeholder: 'Large textarea',
  },
};

export const ColorSchemes: Story = {
  render: () => (
    <div className='space-y-2'>
      <TextArea placeholder='Primary (default)' />
      <TextArea colorScheme='secondary' placeholder='Secondary' />
      <TextArea colorScheme='success' placeholder='Success' />
      <TextArea colorScheme='warning' placeholder='Warning' />
    </div>
  ),
};
