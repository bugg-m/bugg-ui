import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '.';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Default text',
  },
};
export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Password',
  },
};
export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Number',
  },
};
export const Date: Story = {
  args: {
    type: 'date',
    placeholder: 'Date',
  },
};
