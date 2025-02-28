import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';
import { Card, Image } from '@/main';
import {
  imgSrc1,
  imgSrc2,
  imgSrc3,
  imgSrc4,
  imgSrc5,
} from '@/constants/images';

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
    title: {
      control: 'text',
      description: 'Title for Carousel',
    },
    carouselContainerStyles: { control: 'text' },
    carouselSliderStyles: { control: 'text' },
    carouselItemStyles: { control: 'text' },
    headerStyles: { control: 'text' },
  },
  args: {
    animationDuration: 20,
    perspective: '65rem',
    translateZ: '25rem',
  },
};

const images = [
  imgSrc1,
  imgSrc2,
  imgSrc3,
  imgSrc4,
  imgSrc5,
  imgSrc1,
  imgSrc2,
  imgSrc3,
  imgSrc4,
  imgSrc5,
];

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: () => (
    <Carousel title='Image Carousel'>
      {images.map((image, ind) => (
        <Image
          src={image}
          key={ind}
          alt='image'
          size='full'
          className='object-contain'
        />
      ))}
    </Carousel>
  ),
};

export const WithCards: Story = {
  render: () => (
    <Carousel title='Card Carousel'>
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
