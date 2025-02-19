import { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'filled'],
    },
    colorScheme: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    icon: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
    },
    dismissible: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    title: 'Default Alert',
    subtitle: 'This is a default alert.',
    colorScheme: 'success',
    size: 'md',
  },
};

export const Solid: Story = {
  args: {
    title: 'Default Alert',
    subtitle: 'This is a default alert.',
    variant: 'solid',
    colorScheme: 'info',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    title: 'Default Alert',
    subtitle: 'This is a default alert.',
    variant: 'outline',
    colorScheme: 'error',
    size: 'md',
  },
};

export const Filled: Story = {
  args: {
    title: 'Default Alert',
    subtitle: 'This is a default alert.',
    variant: 'filled',
    colorScheme: 'primary',
    size: 'md',
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Alert with Icon',
    subtitle: 'This alert contains an icon.',
    icon: 'info',
    variant: 'solid',
    colorScheme: 'info',
    size: 'md',
  },
};

export const Dismissible: Story = {
  args: {
    title: 'Dismissible Alert',
    subtitle: 'This alert can be dismissed.',
    dismissible: true,
    variant: 'solid',
    onDismiss: () => alert('Alert dismissed!'),
    colorScheme: 'warning',
    size: 'md',
  },
};

export const WithList: Story = {
  args: {
    title: 'Alert with List',
    variant: 'solid',
    listItems: ['Item 1', 'Item 2', 'Item 3'],
    colorScheme: 'success',
    size: 'md',
  },
};

export const CustomLargeError: Story = {
  args: {
    title: 'Custom Large Error Alert',
    variant: 'solid',
    subtitle: 'This is a large error alert with an icon.',
    icon: 'error',
    colorScheme: 'error',
    size: 'lg',
    dismissible: true,
    onDismiss: () => alert('Error alert dismissed!'),
  },
};
