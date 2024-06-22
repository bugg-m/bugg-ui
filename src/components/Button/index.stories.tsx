import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: 'solid',
    children: 'Button',
  },
};
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
};
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button',
  },
};
