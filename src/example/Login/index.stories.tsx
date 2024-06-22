import type { Meta, StoryObj } from '@storybook/react';
import Login from '.';

const meta = {
  title: 'Example/Login',
  component: Login,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoginForm: Story = {};
