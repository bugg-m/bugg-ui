import { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';
import { imgSrc1 } from '@/constants/images';

const meta: Meta<typeof Image> = {
  title: 'Core/Image',
  tags: ['autodocs'],
  component: Image,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    backgroundColor: {
      control: 'select',
      options: ['none', 'primary', 'secondary', 'success', 'warning', 'error'],
    },
    objectFit: {
      control: 'select',
      options: ['none', 'contain', 'cover', 'fill', 'scaleDown'],
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
    src: imgSrc1,
    alt: 'github avatar',
    size: 'md',
    rounded: 'none',
    backgroundColor: 'none',
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: imgSrc1,
    alt: 'github avatar',
  },
};

export const Rounded: Story = {
  args: {
    src: imgSrc1,
    alt: 'github avatar',
    backgroundColor: 'none',
    rounded: 'full',
  },
};

export const WithBackground: Story = {
  args: {
    backgroundColor: 'primary',
    src: imgSrc1,
    alt: 'github avatar',
  },
};

export const LargeImage: Story = {
  args: {
    src: imgSrc1,
    alt: 'github avatar',
    size: 'xl',
  },
};
export const FullImage: Story = {
  args: {
    src: imgSrc1,
    alt: 'github avatar',
    size: 'full',
  },
};

export const Custom: Story = {
  render: (args) => <Image {...args} />,
  args: {
    src: imgSrc1,
    alt: 'github avatar',
    size: 'md',
    backgroundColor: 'secondary',
    rounded: 'full',
  },
};
