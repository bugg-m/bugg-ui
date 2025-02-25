import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';
import { Card, Image } from '@/main';

const meta: Meta<typeof Carousel> = {
  title: 'Utility/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    animationDuration: {
      control: 'number',
      description: 'Duration (in seconds) for one full rotation',
    },
    perspective: {
      control: 'text',
      description: 'CSS perspective value for 3D effect',
    },
    translateZ: {
      control: 'text',
      description: 'TranslateZ distance for slides',
    },
    carouselContainerStyles: { control: 'text' },
    carouselSliderStyles: { control: 'text' },
    carouselItemStyles: { control: 'text' },
  },
  args: {
    animationDuration: 20,
    perspective: '65rem',
    translateZ: '25rem',
  },
};

const images = [
  'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW5zfGVufDB8MXwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1580122468928-0e9940385cb1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdW50YWluc3xlbnwwfDF8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1508766206392-8bd5cf550d1c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdW50YWluc3xlbnwwfDF8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1530569673472-307dc017a82d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdW50YWluc3xlbnwwfDF8MHx8fDA%3D',
  'https://plus.unsplash.com/premium_photo-1669748158361-d0f740b80b08?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdW50YWluc3xlbnwwfDF8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW5zfGVufDB8MXwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1580122468928-0e9940385cb1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdW50YWluc3xlbnwwfDF8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1508766206392-8bd5cf550d1c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdW50YWluc3xlbnwwfDF8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1530569673472-307dc017a82d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdW50YWluc3xlbnwwfDF8MHx8fDA%3D',
  'https://plus.unsplash.com/premium_photo-1669748158361-d0f740b80b08?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdW50YWluc3xlbnwwfDF8MHx8fDA%3D',
];

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: () => (
    <Carousel>
      {images.map((images, ind) => (
        <Image src={images} key={ind} alt='image' className='w-full h-full' />
      ))}
    </Carousel>
  ),
};

export const WithCards: Story = {
  render: () => (
    <Carousel>
      <Card
        variant='filled'
        className='w-full h-full flex items-center justify-center'
      >
        Card 1
      </Card>
      <Card
        variant='filled'
        colorScheme='secondary'
        className='w-full h-full flex items-center justify-center'
      >
        Card 2
      </Card>
      <Card
        variant='filled'
        colorScheme='error'
        className='w-full h-full flex items-center justify-center'
      >
        Card 3
      </Card>
      <Card
        variant='filled'
        colorScheme='success'
        className='w-full h-full flex items-center justify-center'
      >
        Card 4
      </Card>
      <Card
        variant='filled'
        colorScheme='info'
        className='w-full h-full flex items-center justify-center'
      >
        Card 4
      </Card>
      <Card
        variant='filled'
        colorScheme='warning'
        className='w-full h-full flex items-center justify-center'
      >
        Card 4
      </Card>
    </Carousel>
  ),
};
