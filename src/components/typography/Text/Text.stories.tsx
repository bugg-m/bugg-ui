import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    },
    textColor: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'success', 'warning', 'info'],
    },
    tone: {
      control: 'select',
      options: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    size: {
      control: 'select',
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
    },
    weight: {
      control: 'select',
      options: [
        'thin',
        'extralight',
        'light',
        'normal',
        'medium',
        'semibold',
        'bold',
        'extrabold',
        'black',
      ],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    transform: {
      control: 'select',
      options: ['uppercase', 'lowercase', 'capitalize', 'normalcase'],
    },
    italic: { control: 'boolean' },
    underline: { control: 'boolean' },
    lineClamp: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
    },
  },
  args: {
    children: 'This is a default text',
    textColor: 'primary',
    tone: 500,
    size: 'md',
    weight: 'normal',
    align: 'left',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'This is a default text.',
  },
};

export const Heading: Story = {
  args: {
    as: 'h1',
    size: '3xl',
    weight: 'bold',
    children: 'This is a heading',
  },
};

export const Paragraph: Story = {
  args: {
    as: 'p',
    children:
      'This is a paragraph with some long text. It demonstrates how the component handles longer content and wrapping.',
  },
};

export const Emphasized: Story = {
  args: {
    textColor: 'primary',
    tone: 700,
    weight: 'semibold',
    children: 'This is emphasized text with a darker tone.',
  },
};

export const Transformed: Story = {
  args: {
    transform: 'uppercase',
    children: 'This text is uppercase.',
  },
};

export const ItalicAndUnderlined: Story = {
  args: {
    italic: true,
    underline: true,
    children: 'This text is italic and underlined.',
  },
};

export const LineClamp: Story = {
  args: {
    lineClamp: 2,
    children:
      'This is a long text that will be clamped to two lines. Any text beyond the second line will be truncated with an ellipsis.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className='space-y-4'>
      <Text size='xs'>Extra Small Text</Text>
      <Text size='sm'>Small Text</Text>
      <Text size='md'>Medium Text</Text>
      <Text size='lg'>Large Text</Text>
      <Text size='xl'>Extra Large Text</Text>
      <Text size='2xl'>2XL Text</Text>
      <Text weight='bold'>Bold Text</Text>
      <Text italic>Italic Text</Text>
      <Text underline>Underlined Text</Text>
      <Text align='center'>Centered Text</Text>
      <Text transform='uppercase'>Uppercase Text</Text>
      <Text as='p' lineClamp={3}>
        This is a long paragraph that demonstrates line clamping. It will be
        truncated after three lines. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </Text>
    </div>
  ),
};
