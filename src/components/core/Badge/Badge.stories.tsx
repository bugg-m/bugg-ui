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
        'error',
        'ghost',
        'link',
        'success',
        'warning',
        'notification',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
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
    children: 'Default Badge',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Primary Badge',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Secondary Badge',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    children: 'Outline Badge',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'error',
    size: 'md',
    children: 'Destructive Badge',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
    children: 'Ghost Badge',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'md',
    children: 'Link Badge',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'md',
    children: 'Success Badge',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    size: 'md',
    children: 'Warning Badge',
  },
};

export const Notification: Story = {
  args: {
    variant: 'notification',
    size: 'md',
    children: '1',
  },
};
