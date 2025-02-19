import { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import icons from '@/constants/icons';

const meta: Meta<typeof Icon> = {
  title: 'Core/Icon',
  tags: ['autodocs'],
  component: Icon,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    iconColor: {
      control: 'select',
      options: [
        'default',
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'info',
      ],
    },
    backgroundColor: {
      control: 'select',
      options: [
        'none',
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'info',
      ],
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    icon: {
      control: 'text',
    },
  },
  args: {
    icon: icons.circleClose,
    iconColor: 'primary',
    backgroundColor: 'none',
    rounded: 'none',
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: icons.circleClose,
  },
};

export const Colored: Story = {
  args: {
    icon: icons.circleClose,
    iconColor: 'success',
    backgroundColor: 'none',
    rounded: 'full',
  },
};

export const LargeIcon: Story = {
  args: {
    icon: icons.circleClose,
    size: 'lg',
    iconColor: 'success',
  },
};

export const Interactive: Story = {
  render: (args) => <Icon {...args} />,
  args: {
    icon: icons.circleClose,
    iconColor: 'success',
    backgroundColor: 'success',
    rounded: 'full',
  },
};
