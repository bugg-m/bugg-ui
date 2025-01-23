import { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
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
    variant: 'info',
    size: 'md',
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Alert with Icon',
    subtitle: 'This alert contains an icon.',
    icon: 'info',
    variant: 'info',
    size: 'md',
  },
};

export const Dismissible: Story = {
  args: {
    title: 'Dismissible Alert',
    subtitle: 'This alert can be dismissed.',
    dismissible: true,
    onDismiss: () => alert('Alert dismissed!'),
    variant: 'warning',
    size: 'md',
  },
};

export const WithList: Story = {
  args: {
    title: 'Alert with List',
    listItems: ['Item 1', 'Item 2', 'Item 3'],
    variant: 'success',
    size: 'md',
  },
};

export const CustomLargeError: Story = {
  args: {
    title: 'Custom Large Error Alert',
    subtitle: 'This is a large error alert with an icon.',
    icon: 'error',
    variant: 'error',
    size: 'lg',
    dismissible: true,
    onDismiss: () => alert('Error alert dismissed!'),
  },
};
