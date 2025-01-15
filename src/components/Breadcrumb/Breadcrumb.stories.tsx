import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary'],
    },
    // background: {
    //   control: { type: 'select' },
    //   options: ['default', 'primary'],
    // },
    separator: {
      control: { type: 'select' },
      options: ['line', 'arrow'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    variant: 'default',
    // background: 'default',
    list: [
      { name: 'Workspaces', link: '/' },
      { name: 'Blue Dolphin 775', link: '/' },
    ],
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    // background: 'default',
    list: [
      { name: 'Workspaces', link: '/' },
      { name: 'Blue Dolphin 775', link: '/' },
    ],
  },
};
