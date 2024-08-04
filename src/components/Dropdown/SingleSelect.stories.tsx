import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SingleSelect } from './SingleSelect';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof SingleSelect> = {
  title: 'Components/SingleSelect',
  component: SingleSelect,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SingleSelect>;

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const Default: Story = {
  args: {
    options: options,
    placeholder: 'Select an option',
    onChange: action('onChange'),
  },
};

export const WithPreselectedValue: Story = {
  args: {
    ...Default.args,
    value: 'option2',
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: 'This field is required',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState<string>('');
    return (
      <SingleSelect
        options={options}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        placeholder='Controlled single select'
      />
    );
  },
};
