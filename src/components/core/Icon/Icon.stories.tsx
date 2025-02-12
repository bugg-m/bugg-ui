import { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';
import icons from '@src/constants/icons';

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
      ],
    },
    backgroundColor: {
      control: 'select',
      options: ['none', 'primary', 'secondary', 'success', 'warning', 'error'],
    },
    shape: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    icon: {
      control: 'text',
    },
  },
  args: {
    icon: icons.circleClose,
    size: 'md',
    iconColor: 'primary',
    backgroundColor: 'none',
    shape: 'none',
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
    iconColor: 'primary',
    backgroundColor: 'none',
    shape: 'full',
  },
};

export const LargeIcon: Story = {
  args: {
    icon: icons.circleClose,
    size: 'xl',
    iconColor: 'success',
  },
};

export const Interactive: Story = {
  render: (args) => <Icon {...args} />,
  args: {
    icon: icons.circleClose,
    size: 'md',
    iconColor: 'secondary',
    backgroundColor: 'secondary',
    shape: 'full',
  },
};
