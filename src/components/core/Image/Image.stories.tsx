import { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';

const meta: Meta<typeof Image> = {
  title: 'Core/Image',
  tags: ['autodocs'],
  component: Image,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    backgroundColor: {
      control: 'select',
      options: ['none', 'primary', 'secondary', 'success', 'warning', 'error'],
    },
    rounded: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
  },
  args: {
    src: 'https://avatars.githubusercontent.com/u/75472873?s=96&v=4',
    alt: 'github avatar',
    size: 'md',
    rounded: 'none',
    backgroundColor: 'none',
  },
};

const src = 'https://avatars.githubusercontent.com/u/75472873?s=96&v=4';

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src,
    alt: 'github avatar',
  },
};

export const Rounded: Story = {
  args: {
    src,
    alt: 'github avatar',
    backgroundColor: 'none',
    rounded: 'full',
  },
};

export const WithBackground: Story = {
  args: {
    backgroundColor: 'primary',
    src,
    alt: 'github avatar',
  },
};

export const LargeImage: Story = {
  args: {
    src,
    alt: 'github avatar',
    size: 'xl',
  },
};

export const Custom: Story = {
  render: (args) => <Image {...args} />,
  args: {
    src,
    alt: 'github avatar',
    size: 'md',
    backgroundColor: 'secondary',
    rounded: 'full',
  },
};
