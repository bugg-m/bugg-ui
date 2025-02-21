import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Badge } from '../Badge/Badge';
import { Icon } from '../Icon/Icon';
import icons from '@/constants/icons';

const meta: Meta<typeof Button> = {
  title: 'Core/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'link'],
    },
    colorScheme: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'success', 'warning', 'info'],
    },
    tone: {
      control: 'select',
      options: [
        '50',
        '100',
        '200',
        '300',
        '400',
        '500',
        '600',
        '700',
        '800',
        '900',
      ],
    },
    rounded: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'icon'],
    },
    isLoading: { control: 'boolean' },
    loadingText: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
    leftIcon: { control: 'boolean' },
    rightIcon: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    tone: '500',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const WithIcon: Story = {
  render: () => {
    return (
      <div className='flex items-center space-x-4'>
        <Button leftIcon={<Icon src={icons.mail} iconColor='default' />}>
          Email
        </Button>
        <Button rightIcon={<Icon src={icons.next} iconColor='default' />}>
          Next
        </Button>
        <Button size='icon' aria-label='Add'>
          <Icon src={icons.plus} iconColor='default' />
        </Button>
      </div>
    );
  },
};

export const FullWidth: Story = {
  args: {
    ...Default.args,
    className: 'w-full',
  },
};

export const ComplexButton: Story = {
  args: {
    variant: 'outline',
    size: 'lg',
    children: (
      <>
        <Icon src={icons.mail} className='mr-2' iconColor='primary' />
        <span>Send Newsletter</span>
        <Badge children='91+' variant='notification' />
      </>
    ),
    className: 'w-full justify-start',
  },
};

export const ButtonGroup: Story = {
  render: () => (
    <div className='inline-flex rounded-md shadow-sm' role='group'>
      <Button variant='outline' className='rounded-r-none'>
        Cancel
      </Button>
      <Button
        colorScheme='primary'
        className='rounded-none border-l-0 border-r-0'
      >
        Submit
      </Button>
      <Button colorScheme='error' className='rounded-l-none'>
        Delete
      </Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className='flex flex-wrap gap-4'>
      <Button colorScheme='primary'>Primary</Button>
      <Button colorScheme='secondary'>Secondary</Button>
      <Button variant='outline'>Outline</Button>
      <Button colorScheme='error'>Destructive</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='link'>Link</Button>
      <Button colorScheme='success'>Success</Button>
      <Button colorScheme='warning'>Warning</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className='flex items-center space-x-4'>
      <Button size='sm'>Small</Button>
      <Button size='md'>Medium</Button>
      <Button size='lg'>Large</Button>
      <Button size='icon' aria-label='Add'>
        <Icon src={icons.plus} iconColor='default' />
      </Button>
    </div>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <div className='flex space-x-4'>
      <Button loaderColor='white' isLoading>
        Loading
      </Button>
      <Button loaderColor='white' isLoading loadingText='Processing...'>
        Submit
      </Button>
      <Button loaderColor='primary' isLoading variant='outline' />
    </div>
  ),
};

export const WithTooltip: Story = {
  render: () => (
    <div className='flex items-center justify-center h-32'>
      <Button
        colorScheme='primary'
        aria-label='Add item'
        title='Add a new item to the list'
      >
        <Icon src={icons.plus} iconColor='default' />
      </Button>
    </div>
  ),
};
