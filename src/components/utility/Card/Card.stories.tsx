import { Meta, StoryObj } from '@storybook/react';
import { Card, CardProps } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Utility/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled', 'flat'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'info',
        'light',
        'dark',
        'neutral',
      ],
    },
    hoverable: { control: 'boolean' },
    clickable: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    as: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'This is a card',
    variant: 'elevated',
    size: 'md',
    color: 'neutral',
  },
};

export const AllVariants: Story = {
  render: (args) => (
    <div className='flex flex-wrap gap-4'>
      {['elevated', 'outlined', 'filled', 'flat'].map((variant) => (
        <Card key={variant} {...args} variant={variant as CardProps['variant']}>
          {variant} card
        </Card>
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  render: (args) => (
    <div className='flex flex-col gap-4'>
      {['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
        <Card key={size} {...args} size={size as CardProps['size']}>
          {size} card
        </Card>
      ))}
    </div>
  ),
};

export const AllColors: Story = {
  render: (args) => (
    <div className='flex flex-wrap gap-4'>
      {[
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'info',
        'light',
        'dark',
        'neutral',
      ].map((color) => (
        <Card key={color} {...args} color={color as CardProps['color']}>
          {color} card
        </Card>
      ))}
    </div>
  ),
};

export const Hoverable: Story = {
  args: {
    ...Default.args,
    hoverable: true,
  },
};

export const Clickable: Story = {
  args: {
    ...Default.args,
    clickable: true,
    children: 'Click me!',
  },
};

export const FullWidth: Story = {
  args: {
    ...Default.args,
    fullWidth: true,
    children: 'This card takes full width',
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const AsLink: Story = {
  args: {
    ...Default.args,
    as: 'a',
    href: '#',
    clickable: true,
    children: 'This card is a link',
  },
};

export const ComplexContent: Story = {
  render: (args) => (
    <Card {...args}>
      <h3 className='font-bold mb-2'>Card Title</h3>
      <p className='mb-4'>
        This is some content inside the card. It can be as complex as needed.
      </p>
      <button className='bg-blue-500 text-white px-4 py-2 rounded'>
        Action
      </button>
    </Card>
  ),
};

export const GridLayout: Story = {
  render: (args) => (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Card key={item} {...args} hoverable clickable>
          Card {item}
        </Card>
      ))}
    </div>
  ),
};

export const InteractiveDemo: Story = {
  render: (args) => (
    <div className='space-y-4'>
      <Card {...args} hoverable clickable>
        Hoverable and Clickable
      </Card>
      <Card {...args} loading>
        Loading State
      </Card>
      <Card {...args} disabled>
        Disabled State
      </Card>
      <Card {...args} as='button' onClick={() => alert('Card clicked!')}>
        As Button
      </Card>
    </div>
  ),
};
