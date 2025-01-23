import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './Datepicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Core/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    onDateSelect: { action: 'date selected' },
    selectedDate: { control: 'date' },
    minDate: { control: 'date' },
    maxDate: { control: 'date' },
    dateFormat: { control: 'object' },
    isRange: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {},
};

export const WithSelectedDate: Story = {
  args: {
    selectedDate: new Date(2024, 7, 15), // August 15, 2024
  },
};

export const WithDateRange: Story = {
  args: {
    minDate: new Date(2024, 7, 1), // August 1, 2024
    maxDate: new Date(2024, 7, 31), // August 31, 2024
    isRange: true,
    selectedDate: [new Date(2024, 7, 10), new Date(2024, 7, 20)], // Example range
  },
};

export const CustomDateFormat: Story = {
  args: {
    dateFormat: (date: Date) =>
      date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
  },
};

export const Interactive: Story = {
  render: () => {
    const [selectedDate, setSelectedDate] = React.useState<
      Date | [Date, Date] | undefined
    >(undefined);
    return (
      <div className='flex flex-col items-start'>
        <DatePicker
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
          minDate={new Date(2024, 0, 1)} // January 1, 2024
          maxDate={new Date(2024, 11, 31)} // December 31, 2024
        />
        <p className='mt-4 text-gray-700'>
          Selected date:{' '}
          {selectedDate
            ? Array.isArray(selectedDate)
              ? `${selectedDate[0].toLocaleDateString()} - ${selectedDate[1].toLocaleDateString()}`
              : selectedDate.toLocaleDateString()
            : 'None'}
        </p>
      </div>
    );
  },
};
