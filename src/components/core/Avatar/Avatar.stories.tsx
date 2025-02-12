import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Core/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    shape: {
      control: { type: 'select' },
      options: ['square', 'rounded', 'circle'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    border: {
      control: { type: 'select' },
      options: ['none', 'thin', 'thick'],
    },
    borderColor: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'error', 'success', 'warning', 'info'],
    },
    shadow: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
    },
    status: {
      control: { type: 'boolean' },
    },
    src: { control: 'text' },
    initials: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

const src = 'https://avatars.githubusercontent.com/u/75472873?s=96&v=4';

export const Default: Story = {
  args: {
    src: src,
    alt: 'Avatar',
    size: 'md',
  },
};
export const WithInitials: Story = {
  args: {
    initials: 'AB',
    size: 'lg',
    border: 'thick',
    borderColor: 'success',
    shadow: 'md',
  },
};

export const WithStatus: Story = {
  args: {
    src: src,
    status: true,
    size: 'md',
    border: 'thin',
    borderColor: 'primary',
  },
};
