import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Core/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Label for the checkbox' },
    error: { control: 'text', description: 'Error message for the checkbox' },
    disabled: { control: 'boolean', description: 'Disable the checkbox' },
    checked: {
      control: 'boolean',
      description: 'Checked state of the checkbox',
    },
    checkboxSize: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the checkbox',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
      description: 'Variant style of the checkbox',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Remember me',
  },
};

export const Checked: Story = {
  args: {
    ...Default.args,
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: 'This field is required',
  },
};

export const WithoutLabel: Story = {
  args: {
    'aria-label': 'Checkbox without visible label',
  },
};

export const Group: Story = {
  render: () => (
    <div className='space-y-2'>
      <Checkbox label='Option 1' name='group' value='1' />
      <Checkbox label='Option 2' name='group' value='2' />
      <Checkbox label='Option 3' name='group' value='3' />
    </div>
  ),
};

export const Indeterminate: Story = {
  render: () => {
    function IndeterminateCheckboxStory() {
      const [checked, setChecked] = React.useState([true, false]);

      const allChecked = checked.every(Boolean);
      const isIndeterminate = checked.some(Boolean) && !allChecked;

      return (
        <div className='space-y-2'>
          <Checkbox
            label='Parent Checkbox'
            checked={allChecked}
            ref={(el) => {
              if (el) {
                el.indeterminate = isIndeterminate;
              }
            }}
            onChange={(e) => setChecked([e.target.checked, e.target.checked])}
          />
          <div className='ml-6 space-y-2'>
            <Checkbox
              label='Child Checkbox 1'
              checked={checked[0]}
              onChange={(e) => setChecked([e.target.checked, checked[1]])}
            />
            <Checkbox
              label='Child Checkbox 2'
              checked={checked[1]}
              onChange={(e) => setChecked([checked[0], e.target.checked])}
            />
          </div>
        </div>
      );
    }

    return <IndeterminateCheckboxStory />;
  },
};
