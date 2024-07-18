import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '.';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: <p>This is an elevated card</p>,
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: <p>This is an outlined card</p>,
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: <p>This is a filled card</p>,
  },
};

export const WithContent: Story = {
  args: {
    children: (
      <div>
        <h2 className='text-xl font-bold mb-2'>Card Title</h2>
        <p>This card contains some content including a title and this text.</p>
      </div>
    ),
  },
};
