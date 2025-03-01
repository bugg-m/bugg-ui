import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Core/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'text', description: 'Error message for the textarea' },
    disabled: { control: 'boolean', description: 'Disable the textarea' },
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
      description: 'Variant style of the textarea (MUI-like)',
    },
    textAreaSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the textarea',
    },
    colorScheme: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'info', 'error'],
      description: 'Color scheme of the textarea',
    },
    placeholder: {
      control: 'text',
      description: 'Floating label text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    placeholder: 'Outlined textarea',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    placeholder: 'Filled textarea',
  },
};

export const Standard: Story = {
  args: {
    variant: 'standard',
    placeholder: 'Standard textarea',
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Email address',
    error: 'Invalid email address',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled field',
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className='flex flex-col space-y-4'>
      <TextArea
        variant='outlined'
        textAreaSize='sm'
        placeholder='Small textarea'
      />
      <TextArea
        variant='outlined'
        textAreaSize='md'
        placeholder='Medium textarea'
      />
      <TextArea
        variant='outlined'
        textAreaSize='lg'
        placeholder='Large textarea'
      />
    </div>
  ),
};

export const ColorSchemes: Story = {
  render: () => (
    <div className='grid grid-cols-2 gap-4'>
      <TextArea placeholder='Primary' colorScheme='primary' />
      <TextArea placeholder='Secondary' colorScheme='secondary' />
      <TextArea placeholder='Success' colorScheme='success' />
      <TextArea placeholder='Warning' colorScheme='warning' />
      <TextArea placeholder='Info' colorScheme='info' />
      <TextArea placeholder='Error' colorScheme='error' />
    </div>
  ),
};

export const AllVariantsWithError: Story = {
  render: () => (
    <div className='space-y-8'>
      <div>
        <h2 className='text-lg font-semibold mb-2'>Outlined (Error)</h2>
        <TextArea
          variant='outlined'
          colorScheme='error'
          placeholder='Outlined textarea'
          error='Incorrect entry.'
        />
      </div>
      <div>
        <h2 className='text-lg font-semibold mb-2'>Filled (Error)</h2>
        <TextArea
          variant='filled'
          colorScheme='error'
          placeholder='Filled textarea'
          error='Incorrect entry.'
        />
      </div>
      <div>
        <h2 className='text-lg font-semibold mb-2'>Standard (Error)</h2>
        <TextArea
          variant='standard'
          colorScheme='error'
          placeholder='Standard textarea'
          error='Incorrect entry.'
        />
      </div>
    </div>
  ),
};
