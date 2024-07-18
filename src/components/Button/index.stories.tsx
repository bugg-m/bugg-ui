import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '.';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select', options: ['solid', 'outline', 'ghost'] },
    },
    size: {
      control: { type: 'select', options: ['sm', 'md', 'lg'] },
    },
    colorScheme: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'danger', 'success', 'warning'],
      },
    },
    fullWidth: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    loadingText: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

// ... (keep your existing stories)

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
};

export const WithLoadingText: Story = {
  args: {
    children: 'Submit',
    isLoading: true,
    loadingText: 'Submitting...',
  },
};

export const AsLink: Story = {
  args: {
    children: 'Link Button',
  },
  render: (args) => <Button {...args} />,
};
