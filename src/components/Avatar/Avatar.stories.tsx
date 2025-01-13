import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
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
      options: ['none', 'thin', 'thick', 'colorful'],
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

export const Default: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/75472873?s=96&v=4',
    alt: 'Avatar',
  },
};
export const WithInitials: Story = {
  args: {
    initials: 'AB',
    size: 'lg',
    border: 'colorful',
    shadow: 'md',
  },
};

export const WithStatus: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/75472873?s=96&v=4',
    status: true,
    size: 'md',
    border: 'thin',
  },
};
