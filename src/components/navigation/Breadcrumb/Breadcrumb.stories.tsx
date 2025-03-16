import type { Meta, StoryObj } from '@storybook/react';
import {
  Breadcrumbs,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbRoot,
} from './Breadcrumb';
import { Icon } from '@/components/core/Icon/Icon';
import { home, dashboard, settings, user, arrowRight } from '@/constants/icons';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A responsive breadcrumb navigation component with various customization options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'primary',
        'secondary',
        'error',
        'success',
        'warning',
        'info',
      ],
      description: 'Visual style variant of the breadcrumbs',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the breadcrumbs',
    },
    separator: {
      control: 'select',
      options: ['line', 'arrow', 'custom'],
      description: 'Type of separator between breadcrumb items',
    },
    maxItems: {
      control: 'number',
      description:
        'Maximum number of breadcrumb items to display before collapsing',
    },
    itemsBeforeCollapse: {
      control: 'number',
      description: 'Number of items to show before collapse button',
    },
    itemsAfterCollapse: {
      control: 'number',
      description: 'Number of items to show after collapse button',
    },
    showHomeIcon: {
      control: 'boolean',
      description: 'Whether to show a home icon at the beginning',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

const basicItems = [
  { name: 'Home', link: '/' },
  { name: 'Products', link: '/products' },
  { name: 'Categories', link: '/products/categories' },
  { name: 'Electronics' },
];

const iconItems = [
  { name: 'Home', link: '/', icon: <Icon src={home} /> },
  { name: 'Dashboard', link: '/dashboard', icon: <Icon src={dashboard} /> },
  { name: 'Users', link: '/dashboard/users', icon: <Icon src={user} /> },
  { name: 'Settings', icon: <Icon src={settings} /> },
];

const longItems = [
  { name: 'Home', link: '/' },
  { name: 'Products', link: '/products' },
  { name: 'Categories', link: '/products/categories' },
  { name: 'Electronics', link: '/products/categories/electronics' },
  { name: 'Computers', link: '/products/categories/electronics/computers' },
  {
    name: 'Laptops',
    link: '/products/categories/electronics/computers/laptops',
  },
  { name: 'Gaming Laptops' },
];

export const Default: Story = {
  args: {
    items: basicItems,
    variant: 'default',
    size: 'md',
    separator: 'arrow',
  },
};

export const WithIcons: Story = {
  args: {
    items: iconItems,
    variant: 'primary',
    size: 'md',
    separator: 'arrow',
  },
};

export const Small: Story = {
  args: {
    items: basicItems,
    variant: 'default',
    size: 'sm',
    separator: 'arrow',
  },
};

export const Large: Story = {
  args: {
    items: basicItems,
    variant: 'default',
    size: 'lg',
    separator: 'arrow',
  },
};

export const PrimaryVariant: Story = {
  args: {
    items: basicItems,
    variant: 'primary',
    size: 'md',
    separator: 'arrow',
  },
};

export const SecondaryVariant: Story = {
  args: {
    items: basicItems,
    variant: 'secondary',
    size: 'md',
    separator: 'arrow',
  },
};

export const ErrorVariant: Story = {
  args: {
    items: basicItems,
    variant: 'error',
    size: 'md',
    separator: 'arrow',
  },
};

export const SuccessVariant: Story = {
  args: {
    items: basicItems,
    variant: 'success',
    size: 'md',
    separator: 'arrow',
  },
};

export const WarningVariant: Story = {
  args: {
    items: basicItems,
    variant: 'warning',
    size: 'md',
    separator: 'arrow',
  },
};

export const InfoVariant: Story = {
  args: {
    items: basicItems,
    variant: 'info',
    size: 'md',
    separator: 'arrow',
  },
};

export const LineSeparator: Story = {
  args: {
    items: basicItems,
    variant: 'default',
    size: 'md',
    separator: 'line',
  },
};

export const ArrowSeparator: Story = {
  args: {
    items: basicItems,
    variant: 'default',
    size: 'md',
    separator: 'arrow',
  },
};

export const CustomSeparator: Story = {
  args: {
    items: basicItems,
    variant: 'default',
    size: 'md',
    separator: 'custom',
    customSeparator: <span>•</span>,
  },
};

export const WithHomeIcon: Story = {
  args: {
    items: basicItems,
    variant: 'default',
    size: 'md',
    separator: 'arrow',
    showHomeIcon: true,
  },
};

export const WithCollapsedItems: Story = {
  args: {
    items: longItems,
    variant: 'default',
    size: 'md',
    separator: 'arrow',
    maxItems: 6,
    itemsBeforeCollapse: 2,
    itemsAfterCollapse: 2,
  },
};

export const CompositeExample: Story = {
  render: () => (
    <BreadcrumbRoot size='md'>
      <BreadcrumbItem variant='primary' icon={<Icon src={home} />} href='/'>
        Home
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <Icon src={arrowRight} />
      </BreadcrumbSeparator>
      <BreadcrumbItem variant='primary' href='/dashboard'>
        Dashboard
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <Icon src={arrowRight} />
      </BreadcrumbSeparator>
      <BreadcrumbItem variant='primary' href='/dashboard/settings'>
        Settings
      </BreadcrumbItem>
      <BreadcrumbSeparator>
        <Icon src={arrowRight} />
      </BreadcrumbSeparator>
      <BreadcrumbItem variant='primary' isActive>
        Profile
      </BreadcrumbItem>
    </BreadcrumbRoot>
  ),
};

export const InteractiveExample: Story = {
  render: () => {
    const handleClick = (itemName: string) => {
      alert(`Clicked on: ${itemName}`);
    };

    const interactiveItems = [
      {
        name: 'Home',
        onClick: () => handleClick('Home'),
        icon: <Icon src={home} />,
      },
      {
        name: 'Dashboard',
        onClick: () => handleClick('Dashboard'),
        icon: <Icon src={dashboard} />,
      },
      {
        name: 'Users',
        onClick: () => handleClick('Users'),
        icon: <Icon src={user} />,
      },
      {
        name: 'Settings',
        icon: <Icon src={settings} />,
      },
    ];

    return (
      <Breadcrumbs
        items={interactiveItems}
        variant='primary'
        size='md'
        separator='arrow'
      />
    );
  },
};

export const ResponsiveExample: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  args: {
    items: longItems,
    variant: 'default',
    size: 'sm',
    separator: 'line',
    maxItems: 3,
    itemsBeforeCollapse: 1,
    itemsAfterCollapse: 1,
  },
};

export const MixedLinksExample: Story = {
  args: {
    items: [
      { name: 'Home', link: '/' },
      { name: 'Products', link: '/products' },
      { name: 'Electronics' },
      { name: 'View Details', link: '/products/electronics/details' },
    ],
    variant: 'secondary',
    size: 'md',
    separator: 'arrow',
  },
};
