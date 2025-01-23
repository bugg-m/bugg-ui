import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MultiSelect } from './MultiSelect';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof MultiSelect> = {
  title: 'Core/MultiSelect',
  component: MultiSelect,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'error',
        'success',
        'warning',
        'info',
        'disabled',
        'default',
      ],
    },
    placeholder: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MultiSelect>;

const options = [
  { value: 'angular', label: 'Angular' },
  { value: 'bootstrap', label: 'Bootstrap' },
  { value: 'react', label: 'React.js' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'django2', label: 'Django' },
  { value: 'django3', label: 'Django' },
  { value: 'django4', label: 'Django' },
];

export const Default: Story = {
  args: {
    options: options,
    placeholder: 'Select options',
    onChange: action('onChange'),
  },
};

export const WithPreselectedValues: Story = {
  args: {
    ...Default.args,
    value: ['angular', 'react'],
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: 'Please select at least one option',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    variant: 'disabled',
    disabled: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState<string[]>([]);
    return (
      <MultiSelect
        options={options}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        placeholder='Controlled multi-select'
      />
    );
  },
};
