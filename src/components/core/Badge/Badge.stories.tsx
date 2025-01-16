import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Core/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
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
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    value: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    value: 'Default Badge',
  },
};

export const Primary: Story = {
  args: {
    value: 'Primary Badge',
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    value: 'Secondary Badge',
    variant: 'secondary',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    value: 'Outline Badge',
    variant: 'outline',
    size: 'md',
  },
};

export const Destructive: Story = {
  args: {
    value: 'Destructive Badge',
    variant: 'destructive',
    size: 'md',
  },
};

export const Ghost: Story = {
  args: { value: 'Ghost Badge', variant: 'ghost', size: 'md' },
};

export const Link: Story = {
  args: { value: 'Link Badge', variant: 'link', size: 'md' },
};

export const Success: Story = {
  args: { value: 'Success Badge', variant: 'success', size: 'md' },
};

export const Warning: Story = {
  args: { value: 'Warning Badge', variant: 'warning', size: 'md' },
};
