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
    customSeparator: {
      control: 'text',
      description:
        'Custom separator between breadcrumb items, must be a react node',
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

export const SizeVariants: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <h3 className='text-sm font-semibold mb-2'>Small</h3>
        <Breadcrumbs
          items={basicItems}
          variant='default'
          size='sm'
          separator='arrow'
        />
      </div>
      <div>
        <h3 className='text-sm font-semibold mb-2'>Medium (Default)</h3>
        <Breadcrumbs
          items={basicItems}
          variant='default'
          size='md'
          separator='arrow'
        />
      </div>
      <div>
        <h3 className='text-sm font-semibold mb-2'>Large</h3>
        <Breadcrumbs
          items={basicItems}
          variant='default'
          size='lg'
          separator='arrow'
        />
      </div>
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <h3 className='text-sm font-semibold mb-2'>Default</h3>
        <Breadcrumbs
          items={basicItems}
          variant='default'
          size='md'
          separator='arrow'
        />
      </div>
      <div>
        <h3 className='text-sm font-semibold mb-2'>Primary</h3>
        <Breadcrumbs
          items={basicItems}
          variant='primary'
          size='md'
          separator='arrow'
        />
      </div>
      <div>
        <h3 className='text-sm font-semibold mb-2'>Secondary</h3>
        <Breadcrumbs
          items={basicItems}
          variant='secondary'
          size='md'
          separator='arrow'
        />
      </div>
      <div>
        <h3 className='text-sm font-semibold mb-2'>Error</h3>
        <Breadcrumbs
          items={basicItems}
          variant='error'
          size='md'
          separator='arrow'
        />
      </div>
      <div>
        <h3 className='text-sm font-semibold mb-2'>Success</h3>
        <Breadcrumbs
          items={basicItems}
          variant='success'
          size='md'
          separator='arrow'
        />
      </div>
      <div>
        <h3 className='text-sm font-semibold mb-2'>Warning</h3>
        <Breadcrumbs
          items={basicItems}
          variant='warning'
          size='md'
          separator='arrow'
        />
      </div>
      <div>
        <h3 className='text-sm font-semibold mb-2'>Info</h3>
        <Breadcrumbs
          items={basicItems}
          variant='info'
          size='md'
          separator='arrow'
        />
      </div>
    </div>
  ),
};

export const SeparatorVariants: Story = {
  render: () => (
    <div className='space-y-4'>
      <div>
        <h3 className='text-sm font-semibold mb-2'>Arrow Separator</h3>
        <Breadcrumbs
          items={basicItems}
          variant='default'
          size='md'
          separator='arrow'
        />
      </div>
      <div>
        <h3 className='text-sm font-semibold mb-2'>Line Separator</h3>
        <Breadcrumbs
          items={basicItems}
          variant='default'
          size='md'
          separator='line'
        />
      </div>
      <div>
        <h3 className='text-sm font-semibold mb-2'>Custom Separator</h3>
        <Breadcrumbs
          items={basicItems}
          variant='default'
          size='md'
          separator='custom'
          customSeparator={<span>•</span>}
        />
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  args: {
    items: iconItems,
    variant: 'primary',
    size: 'md',
    separator: 'arrow',
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

export const CollapsedItems: Story = {
  render: () => (
    <div className='space-y-6'>
      <div>
        <h3 className='text-sm font-semibold mb-2'>Collapsed Breadcrumbs</h3>
        <p className='text-xs text-gray-500 mb-2'>
          Click the ellipsis to expand
        </p>
        <Breadcrumbs
          items={longItems}
          variant='default'
          size='md'
          separator='arrow'
          maxItems={6}
          itemsBeforeCollapse={2}
          itemsAfterCollapse={2}
        />
      </div>

      <div>
        <h3 className='text-sm font-semibold mb-2'>
          Different Collapse Configuration
        </h3>
        <Breadcrumbs
          items={longItems}
          variant='primary'
          size='md'
          separator='arrow'
          maxItems={4}
          itemsBeforeCollapse={1}
          itemsAfterCollapse={1}
        />
      </div>
    </div>
  ),
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
