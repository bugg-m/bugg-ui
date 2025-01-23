import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '@src/main';

const meta: Meta<typeof Modal> = {
  title: 'Utility/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className='text-xl font-bold mb-4'>Modal Title</h2>
        <p className='mb-4'>This is the content of the modal.</p>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: () => <ModalExample />,
};
