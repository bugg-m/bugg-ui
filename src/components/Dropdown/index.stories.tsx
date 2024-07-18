import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '.';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const Default: Story = {
  args: {
    options: options,
    placeholder: 'Select an option',
  },
};

export const Small: Story = {
  args: {
    options: options,
    size: 'sm',
    placeholder: 'Small select',
  },
};

export const Large: Story = {
  args: {
    options: options,
    size: 'lg',
    placeholder: 'Large select',
  },
};

export const Disabled: Story = {
  args: {
    options: options,
    disabled: true,
    placeholder: 'Disabled select',
  },
};
