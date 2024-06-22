import { Meta, StoryObj } from '@storybook/react';
import { Stack } from '.';
import { Box } from '../Box';

const meta = {
  title: 'Layouts/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Stack className='p-4 gap-4 bg-gray-400' {...args}>
        <Box className='w-20 h-20 bg-red-600' />
        <Box className='w-20 h-20 bg-green-600' />
        <Box className='w-20 h-20 bg-blue-600' />
      </Stack>
    );
  },
};
