import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Utility/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled', 'flat'],
    },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    colorScheme: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'success', 'info', 'warning'],
    },
    tone: {
      control: 'select',
      options: [
        '50',
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
      ],
    },
    hoverable: { control: 'boolean' },
    clickable: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
  args: {
    children: 'This is a Card component',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    variant: 'elevated',
    size: 'md',
    colorScheme: 'primary',
    tone: '500',
    hoverable: false,
    clickable: false,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    size: 'md',
    colorScheme: 'secondary',
    tone: '400',
    hoverable: true,
    clickable: true,
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    size: 'lg',
    colorScheme: 'success',
    tone: '600',
    hoverable: true,
    clickable: true,
  },
};

export const Flat: Story = {
  args: {
    variant: 'flat',
    size: 'sm',
    colorScheme: 'error',
    tone: '500',
  },
};

export const WithFullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'This card stretches full width.',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading card...',
  },
};

export const Interactive: Story = {
  args: {
    clickable: true,
    hoverable: true,
    children: 'Click or hover me!',
  },
};
