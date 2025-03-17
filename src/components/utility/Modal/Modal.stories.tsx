import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Modal, ModalProps } from './Modal';
import {
  Button,
  Checkbox,
  Icon,
  Input,
  SingleSelect,
  Text,
  TextArea,
} from '@/main';
import { close, triangleAlert } from '@/constants/icons';

const meta: Meta<typeof Modal> = {
  title: 'Utility/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A customizable modal dialog component with multiple variants and features.',
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
      description: 'Visual style variant of the modal',
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
        'full',
      ],
      description: 'Size of the modal',
    },
    position: {
      control: 'select',
      options: ['center', 'top', 'bottom', 'left', 'right'],
      description: 'Position of the modal on the screen',
    },
    animation: {
      control: 'select',
      options: [
        'none',
        'fade',
        'zoom',
        'slideTop',
        'slideBottom',
        'slideLeft',
        'slideRight',
      ],
      description: 'Animation type for modal entry',
    },
    backdrop: {
      control: 'select',
      options: ['default', 'light', 'dark', 'blur', 'none'],
      description: 'Style of the backdrop',
    },
    backdropAnimation: {
      control: 'select',
      options: ['none', 'fade', 'zoom'],
      description: 'Animation type for backdrop',
    },
    headerVariant: {
      control: 'select',
      options: [
        'default',
        'clean',
        'primary',
        'secondary',
        'error',
        'success',
        'warning',
        'info',
      ],
      description: 'Style of the header',
    },
    footerVariant: {
      control: 'select',
      options: [
        'default',
        'clean',
        'primary',
        'secondary',
        'error',
        'success',
        'warning',
        'info',
      ],
      description: 'Style of the footer',
    },
    footerAlign: {
      control: 'select',
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      description: 'Alignment of footer content',
    },
    isOpen: { control: 'boolean', description: 'Whether the modal is open' },
    hideCloseButton: {
      control: 'boolean',
      description: 'Whether to hide the close button',
    },
    closeOnBackdropClick: {
      control: 'boolean',
      description: 'Whether clicking the backdrop closes the modal',
    },
    closeOnEsc: {
      control: 'boolean',
      description: 'Whether pressing Escape closes the modal',
    },
    disableScroll: {
      control: 'boolean',
      description: 'Whether to disable body scrolling when modal is open',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the modal takes full width',
    },
    showCloseIcon: {
      control: 'boolean',
      description: 'Whether to show the close icon',
    },
    headerClassName: {
      control: 'text',
      description: 'Additional classes for the header',
    },
    footerClassName: {
      control: 'text',
      description: 'Additional classes for the footer',
    },
    closeButtonLabel: {
      control: 'text',
      description: 'Accessibility label for the close button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

interface ModalDemoProps {
  variant?: ModalProps['variant'];
  size?: ModalProps['size'];
  position?: ModalProps['position'];
  animation?: ModalProps['animation'];
  backdrop?: ModalProps['backdrop'];
  backdropAnimation?: ModalProps['backdropAnimation'];
  headerVariant?: ModalProps['headerVariant'];
  footerVariant?: ModalProps['footerVariant'];
  footerAlign?: ModalProps['footerAlign'];
  hideCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEsc?: boolean;
  fullWidth?: boolean;
  showCloseIcon?: boolean;
  withTitle?: boolean;
  withDescription?: boolean;
  withFooter?: boolean;
  customCloseIcon?: React.ReactNode;
  disableScroll?: boolean;
  customContent?: React.ReactNode;
  headerClassName?: string;
  footerClassName?: string;
  closeButtonLabel?: string;
}

const ModalDemo: React.FC<ModalDemoProps> = ({
  variant = 'default',
  size = 'md',
  position = 'center',
  animation = 'fade',
  backdrop = 'default',
  backdropAnimation = 'fade',
  headerVariant = 'default',
  footerVariant = 'default',
  footerAlign = 'end',
  hideCloseButton = false,
  closeOnBackdropClick = true,
  closeOnEsc = true,
  disableScroll = true,
  fullWidth = false,
  showCloseIcon = true,
  withTitle = false,
  withDescription = false,
  withFooter = false,
  customContent,
  customCloseIcon,
  headerClassName,
  footerClassName,
  closeButtonLabel,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} colorScheme='primary'>
        Open Modal
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        variant={variant}
        size={size}
        position={position}
        animation={animation}
        backdrop={backdrop}
        backdropAnimation={backdropAnimation}
        headerVariant={headerVariant}
        footerVariant={footerVariant}
        footerAlign={footerAlign}
        hideCloseButton={hideCloseButton}
        closeOnBackdropClick={closeOnBackdropClick}
        closeOnEsc={closeOnEsc}
        disableScroll={disableScroll}
        fullWidth={fullWidth}
        showCloseIcon={showCloseIcon}
        closeIcon={customCloseIcon}
        headerClassName={headerClassName}
        footerClassName={footerClassName}
        closeButtonLabel={closeButtonLabel}
        header={withTitle ? 'Modal Title' : undefined}
        description={
          withDescription
            ? 'This is a description that explains the purpose of this modal dialog.'
            : undefined
        }
        footer={
          withFooter ? (
            <>
              <Button
                colorScheme='secondary'
                onClick={handleClose}
                className='mr-2'
              >
                Cancel
              </Button>
              <Button colorScheme='primary' onClick={handleClose}>
                Confirm
              </Button>
            </>
          ) : undefined
        }
      >
        {customContent || (
          <div className='py-4'>
            <p>This is the content of the modal. You can put anything here.</p>
            <p className='mt-2'>
              The modal has many customizable options to fit your design
              requirements.
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export const Default: Story = {
  render: () => <ModalDemo />,
};

export const Animation: Story = {
  render: function AnimationRenderer() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentAnimation, setCurrentAnimation] =
      useState<ModalProps['animation']>('fade');
    const [currentPosition, setCurrentPosition] =
      useState<ModalProps['position']>('center');

    const animations = [
      { name: 'fade', position: 'center' },
      { name: 'zoom', position: 'center' },
      { name: 'slideTop', position: 'top' },
      { name: 'slideBottom', position: 'bottom' },
      { name: 'slideLeft', position: 'left' },
      { name: 'slideRight', position: 'right' },
    ];

    const openWithAnimation = (
      animation: ModalProps['animation'],
      position: ModalProps['position']
    ) => {
      setCurrentAnimation(animation);
      setCurrentPosition(position);
      setIsOpen(true);
    };

    return (
      <div className='space-y-4'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
          {animations.map((anim) => (
            <Button
              key={anim.name}
              onClick={() =>
                openWithAnimation(
                  anim.name as keyof ModalProps['animation'],
                  anim.position as keyof ModalProps['position']
                )
              }
              colorScheme='primary'
              className='w-full'
            >
              {anim.name} Animation
            </Button>
          ))}
        </div>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          header={`${currentAnimation} Animation Demo`}
          animation={currentAnimation}
          position={currentPosition}
          backdropAnimation='fade'
        >
          <div className='py-4'>
            <p>
              This modal is using the <strong>{currentAnimation}</strong>{' '}
              animation at the <strong>{currentPosition}</strong> position.
            </p>
            <p className='mt-2'>
              Close this modal and try another animation style!
            </p>
          </div>
        </Modal>
      </div>
    );
  },
};

export const Backdrop: Story = {
  render: function BackdropRenderer() {
    const [isOpen, setIsOpen] = useState(false);
    const [backdropType, setBackdropType] =
      useState<ModalProps['backdrop']>('default');
    const [backdropAnim, setBackdropAnim] =
      useState<ModalProps['backdropAnimation']>('fade');

    const backdropTypes = ['default', 'light', 'dark', 'blur', 'none'];
    const backdropAnimations = ['none', 'fade', 'zoom'];

    const openWithBackdrop = (
      type: ModalProps['backdrop'],
      anim: ModalProps['backdropAnimation']
    ) => {
      setBackdropType(type);
      setBackdropAnim(anim);
      setIsOpen(true);
    };

    return (
      <div className='space-y-4'>
        <div className='grid grid-cols-1 gap-2'>
          <h3 className='text-lg font-medium'>Backdrop Types</h3>
          <div className='flex flex-wrap gap-2'>
            {backdropTypes?.map((type) => (
              <Button
                key={type}
                onClick={() =>
                  openWithBackdrop(
                    type as keyof ModalProps['backdrop'],
                    backdropAnim
                  )
                }
                colorScheme={
                  type === 'default'
                    ? 'primary'
                    : type === 'light'
                      ? 'secondary'
                      : type === 'dark'
                        ? 'info'
                        : type === 'blur'
                          ? 'success'
                          : 'warning'
                }
                className='mb-2'
              >
                {type.charAt(0).toUpperCase() + type.slice(1)} Backdrop
              </Button>
            ))}
          </div>

          <h3 className='text-lg font-medium mt-4'>Backdrop Animations</h3>
          <div className='flex flex-wrap gap-2'>
            {backdropAnimations.map((anim) => (
              <Button
                key={anim}
                onClick={() =>
                  openWithBackdrop(
                    backdropType,
                    anim as keyof ModalProps['animation']
                  )
                }
                colorScheme={
                  anim === 'none'
                    ? 'secondary'
                    : anim === 'fade'
                      ? 'primary'
                      : 'info'
                }
                className='mb-2'
              >
                {anim.charAt(0).toUpperCase() + anim.slice(1)} Animation
              </Button>
            ))}
          </div>
        </div>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          header={`${backdropType} backdrop with ${backdropAnim} animation`}
          backdrop={backdropType}
          backdropAnimation={backdropAnim}
          animation='fade'
        >
          <div className='py-4'>
            <p>
              This demonstrates a modal with a <strong>{backdropType}</strong>{' '}
              backdrop using <strong>{backdropAnim}</strong> animation.
            </p>
            <p className='mt-2'>
              Try different combinations to see how they affect the user
              experience.
            </p>
          </div>
        </Modal>
      </div>
    );
  },
};

export const StyleVariants: Story = {
  render: function StyleVariantsRenderer() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentVariant, setCurrentVariant] =
      useState<ModalProps['variant']>('default');

    const variants = [
      'default',
      'primary',
      'secondary',
      'error',
      'success',
      'warning',
      'info',
    ];

    const openWithVariant = (variant: ModalProps['variant']) => {
      setCurrentVariant(variant);
      setIsOpen(true);
    };

    return (
      <div className='space-y-4'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
          {variants.map((variant) => (
            <Button
              key={variant}
              onClick={() => openWithVariant(variant as ModalProps['variant'])}
              colorScheme={
                variant === 'default'
                  ? 'primary'
                  : (variant as keyof ModalProps['variant'])
              }
              className='w-full capitalize'
            >
              {variant}
            </Button>
          ))}
        </div>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          header={`${currentVariant} Style Variant`}
          variant={currentVariant}
          headerVariant={currentVariant}
          footerVariant={currentVariant}
          animation='fade'
          backdropAnimation='fade'
          footer={
            <>
              <Button
                colorScheme='secondary'
                onClick={() => setIsOpen(false)}
                className='mr-2'
              >
                Cancel
              </Button>
              <Button
                colorScheme={
                  currentVariant === 'default' ? 'primary' : currentVariant
                }
                onClick={() => setIsOpen(false)}
              >
                Confirm
              </Button>
            </>
          }
        >
          <div className='py-4'>
            <p>
              This modal uses the <strong>{currentVariant}</strong> variant
              style for consistent theming.
            </p>
            <p className='mt-2'>
              The header, content, and footer all reflect the selected style
              variant.
            </p>
          </div>
        </Modal>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: function SizesRenderer() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentSize, setCurrentSize] = useState<ModalProps['size']>('md');

    const sizes = [
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
      '2xl',
      '3xl',
      '4xl',
      '5xl',
      'full',
    ];

    const openWithSize = (size: ModalProps['size']) => {
      setCurrentSize(size);
      setIsOpen(true);
    };

    return (
      <div className='space-y-4'>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-2'>
          {sizes.map((size) => (
            <Button
              key={size}
              onClick={() => openWithSize(size as keyof ModalProps['size'])}
              colorScheme='primary'
              className='w-full'
            >
              {size === 'full' ? 'Full Width' : size.toUpperCase()}
            </Button>
          ))}
        </div>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          header={`${currentSize === 'full' ? 'Full Width' : currentSize?.toUpperCase()} Size Modal`}
          size={currentSize}
          animation='fade'
          backdropAnimation='fade'
        >
          <div className='py-4'>
            <p>
              This modal demonstrates the <strong>{currentSize}</strong> size
              option.
            </p>
            <p className='mt-2'>
              Choose different sizes based on your content needs and screen
              considerations.
            </p>
          </div>
        </Modal>
      </div>
    );
  },
};

export const Positions: Story = {
  render: function PositionsRenderer() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPosition, setCurrentPosition] =
      useState<ModalProps['position']>('center');

    const positions = [
      { name: 'center', animation: 'fade' },
      { name: 'top', animation: 'slideTop' },
      { name: 'bottom', animation: 'slideBottom' },
      { name: 'left', animation: 'slideLeft' },
      { name: 'right', animation: 'slideRight' },
    ];

    const openWithPosition = (position: ModalProps['position']) => {
      setCurrentPosition(position);
      setIsOpen(true);
    };

    const getAnimation = (): ModalProps['animation'] => {
      const position = positions.find((p) => p.name === currentPosition);
      return position
        ? (position.animation as ModalProps['animation'])
        : 'fade';
    };

    return (
      <div className='space-y-4'>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-2'>
          {positions.map(({ name }) => (
            <Button
              key={name}
              onClick={() => openWithPosition(name as ModalProps['position'])}
              colorScheme='primary'
              className='w-full'
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Button>
          ))}
        </div>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          header={`${currentPosition} Position Modal`}
          position={currentPosition}
          animation={getAnimation()}
          backdropAnimation='fade'
          size={['left', 'right'].includes(currentPosition ?? '') ? 'lg' : 'md'}
        >
          <div className='py-4'>
            <p>
              This modal appears at the <strong>{currentPosition}</strong>{' '}
              position of the screen.
            </p>
            <p className='mt-2'>
              Each position works best with its matching slide animation.
            </p>
          </div>
        </Modal>
      </div>
    );
  },
};

export const HeaderFooter: Story = {
  render: function HeaderFooterRenderer() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [settings, setSettings] = useState<{
      headerVariant: ModalProps['headerVariant'];
      footerVariant: ModalProps['footerVariant'];
      footerAlign: ModalProps['footerAlign'];
      headerClassName: ModalProps['headerClassName'];
      footerClassName: ModalProps['footerClassName'];
    }>({
      headerVariant: 'default',
      footerVariant: 'default',
      footerAlign: 'end',
      headerClassName: '',
      footerClassName: '',
    });

    const headerVariants = [
      'default',
      'clean',
      'primary',
      'secondary',
      'error',
      'success',
      'warning',
      'info',
    ];
    const footerVariants = [
      'default',
      'clean',
      'primary',
      'secondary',
      'error',
      'success',
      'warning',
      'info',
    ];
    const alignments = [
      'start',
      'center',
      'end',
      'between',
      'around',
      'evenly',
    ];

    const openWithSettings = (newSettings: Partial<typeof settings>) => {
      setSettings({ ...settings, ...newSettings });
      setIsOpen(true);
    };

    return (
      <div className='space-y-4'>
        <div className='space-y-4'>
          <div>
            <h3 className='text-lg font-medium mb-2'>Header Variants</h3>
            <div className='flex flex-wrap gap-2'>
              {headerVariants.map((variant) => (
                <Button
                  key={`header-${variant}`}
                  onClick={() =>
                    openWithSettings({
                      headerVariant: variant as ModalProps['headerVariant'],
                    })
                  }
                  colorScheme={
                    variant === 'default'
                      ? 'primary'
                      : (variant as keyof ModalProps['variant'])
                  }
                  size='sm'
                >
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className='text-lg font-medium mb-2'>Footer Variants</h3>
            <div className='flex flex-wrap gap-2'>
              {footerVariants.map((variant) => (
                <Button
                  key={`footer-${variant}`}
                  onClick={() =>
                    openWithSettings({
                      footerVariant: variant as ModalProps['footerVariant'],
                    })
                  }
                  colorScheme={
                    variant === 'default'
                      ? 'primary'
                      : (variant as keyof ModalProps['variant'])
                  }
                  size='sm'
                  className='capitalize'
                >
                  {variant}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className='text-lg font-medium mb-2'>Footer Alignment</h3>
            <div className='flex flex-wrap gap-2'>
              {alignments.map((align) => (
                <Button
                  key={`align-${align}`}
                  onClick={() =>
                    openWithSettings({
                      footerAlign: align as ModalProps['footerAlign'],
                    })
                  }
                  colorScheme='primary'
                  size='sm'
                >
                  {align.charAt(0).toUpperCase() + align.slice(1)}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className='text-lg font-medium mb-2'>Custom Styles</h3>
            <div className='flex flex-wrap gap-2'>
              <Button
                onClick={() =>
                  openWithSettings({
                    headerClassName:
                      'bg-gradient-to-r from-primary-100 to-secondary-100 p-4 rounded-t-lg',
                  })
                }
                colorScheme='info'
                size='sm'
              >
                Custom Header
              </Button>
              <Button
                onClick={() =>
                  openWithSettings({
                    footerClassName: 'bg-secondary-50 p-3 rounded-b-lg',
                  })
                }
                colorScheme='info'
                size='sm'
              >
                Custom Footer
              </Button>
            </div>
          </div>
        </div>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          header='Header & Footer Customization'
          headerVariant={settings.headerVariant}
          footerVariant={settings.footerVariant}
          footerAlign={settings.footerAlign}
          headerClassName={settings.headerClassName}
          footerClassName={settings.footerClassName}
          animation='fade'
          backdropAnimation='fade'
          footer={
            <>
              <Button
                colorScheme='secondary'
                onClick={() => setIsOpen(false)}
                className='mr-2'
              >
                Cancel
              </Button>
              <Button colorScheme='primary' onClick={() => setIsOpen(false)}>
                Confirm
              </Button>
            </>
          }
        >
          <div className='py-4'>
            <p>Current customization:</p>
            <ul className='list-disc pl-5 mt-2'>
              <li>
                Header variant: <strong>{settings.headerVariant}</strong>
              </li>
              <li>
                Footer variant: <strong>{settings.footerVariant}</strong>
              </li>
              <li>
                Footer alignment: <strong>{settings.footerAlign}</strong>
              </li>
              <li>
                Custom header class:{' '}
                {settings.headerClassName ? <strong>Applied</strong> : 'None'}
              </li>
              <li>
                Custom footer class:{' '}
                {settings.footerClassName ? <strong>Applied</strong> : 'None'}
              </li>
            </ul>
          </div>
        </Modal>
      </div>
    );
  },
};

export const BehaviorOptions: Story = {
  render: function BehaviorOptionsRenderer() {
    const [isOpen, setIsOpen] = useState(false);
    const [settings, setSettings] = useState({
      hideCloseButton: false,
      customCloseIcon: false,
      closeOnBackdropClick: true,
      closeOnEsc: true,
      closeButtonLabel: '',
    });

    const openWithSettings = (newSettings: Partial<typeof settings>) => {
      setSettings({ ...settings, ...newSettings });
      setIsOpen(true);
    };

    return (
      <div className='space-y-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          <Button
            onClick={() => openWithSettings({ hideCloseButton: true })}
            colorScheme='secondary'
          >
            No Close Button
          </Button>
          <Button
            onClick={() => openWithSettings({ customCloseIcon: true })}
            colorScheme='info'
          >
            Custom Close Icon
          </Button>
          <Button
            onClick={() => openWithSettings({ closeOnBackdropClick: false })}
            colorScheme='warning'
          >
            Prevent Backdrop Close
          </Button>
          <Button
            onClick={() => openWithSettings({ closeOnEsc: false })}
            colorScheme='error'
          >
            Disable Escape Key
          </Button>
          <Button
            onClick={() =>
              openWithSettings({ closeButtonLabel: 'Dismiss this dialog' })
            }
            colorScheme='success'
            className='md:col-span-2'
          >
            Custom Accessibility Label
          </Button>
        </div>

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          header='Modal Behavior Options'
          hideCloseButton={settings.hideCloseButton}
          closeIcon={
            settings.customCloseIcon ? (
              <Icon src={close} iconColor='error' size='lg' />
            ) : undefined
          }
          closeOnBackdropClick={settings.closeOnBackdropClick}
          closeOnEsc={settings.closeOnEsc}
          closeButtonLabel={settings.closeButtonLabel || undefined}
          animation='fade'
          backdropAnimation='fade'
          footer={
            <Button colorScheme='primary' onClick={() => setIsOpen(false)}>
              Close Modal
            </Button>
          }
        >
          <div className='py-4'>
            <p>Current behavior settings:</p>
            <ul className='list-disc pl-5 mt-2'>
              <li>
                Close button:{' '}
                <strong>
                  {settings.hideCloseButton ? 'Hidden' : 'Visible'}
                </strong>
              </li>
              <li>
                Custom close icon:{' '}
                <strong>{settings.customCloseIcon ? 'Yes' : 'No'}</strong>
              </li>
              <li>
                Close on backdrop click:{' '}
                <strong>
                  {settings.closeOnBackdropClick ? 'Enabled' : 'Disabled'}
                </strong>
              </li>
              <li>
                Close on Escape key:{' '}
                <strong>{settings.closeOnEsc ? 'Enabled' : 'Disabled'}</strong>
              </li>
              <li>
                Custom accessibility label:{' '}
                <strong>
                  {settings.closeButtonLabel
                    ? settings.closeButtonLabel
                    : 'Default'}
                </strong>
              </li>
            </ul>
          </div>
        </Modal>
      </div>
    );
  },
};

export const FormModal: Story = {
  render: function FormModalRenderer() {
    return (
      <ModalDemo
        variant='default'
        size='md'
        withTitle
        withFooter
        customContent={
          <div className='py-4 space-y-4'>
            <Input type='text' id='name' placeholder='Name' />

            <Input type='email' id='email' placeholder='Email' />
          </div>
        }
      />
    );
  },
};

export const AlertModal: Story = {
  render: function AlertModalRenderer() {
    return (
      <ModalDemo
        variant='error'
        size='sm'
        withTitle
        withFooter
        headerVariant='error'
        footerVariant='clean'
        footerAlign='center'
        customContent={
          <div className='py-4 text-center'>
            <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-error-100 mb-4'>
              <Icon src={triangleAlert} iconColor='error' size='lg' />
            </div>
            <p className='text-error-900 font-medium'>
              Are you sure you want to delete this item?
            </p>
            <p className='text-secondary-500 mt-1'>
              This action cannot be undone.
            </p>
          </div>
        }
      />
    );
  },
};

export const MultiStepModal: Story = {
  render: function MultiStepModalRenderer() {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1);
    const totalSteps = 3;

    const handleOpen = () => {
      setIsOpen(true);
      setStep(1);
    };

    const handleClose = () => {
      setIsOpen(false);
    };

    const nextStep = () => {
      if (step < totalSteps) setStep(step + 1);
    };

    const prevStep = () => {
      if (step > 1) setStep(step - 1);
    };

    const header = `Step ${step} of ${totalSteps}`;
    let content;

    switch (step) {
      case 1:
        content = (
          <div className='py-4'>
            <p className='font-medium text-lg mb-2'>
              Step 1: Personal Information
            </p>
            <Input type='text' placeholder='Full Name' />
          </div>
        );
        break;
      case 2:
        content = (
          <div className='py-4'>
            <p className='font-medium text-lg mb-2'>Step 2: Account Details</p>
            <Input type='text' placeholder='Username' />
          </div>
        );
        break;
      case 3:
        content = (
          <div className='py-4'>
            <p className='font-medium text-lg mb-2'>Step 3: Confirmation</p>
            <div className='bg-success-50 p-4 rounded-md border border-success-200'>
              <p className='text-success-800'>
                Review and submit your information
              </p>
            </div>
          </div>
        );
        break;
      default:
        content = null;
    }

    const footer = (
      <>
        {step > 1 && (
          <Button colorScheme='secondary' onClick={prevStep} className='mr-2'>
            Back
          </Button>
        )}
        <div className='flex-1'></div>
        {step < totalSteps ? (
          <Button colorScheme='primary' onClick={nextStep}>
            Next
          </Button>
        ) : (
          <Button colorScheme='success' onClick={handleClose}>
            Complete
          </Button>
        )}
      </>
    );

    return (
      <div>
        <Button onClick={handleOpen} colorScheme='primary'>
          Open Multi-step Modal
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={handleClose}
          variant='default'
          size='md'
          header={header}
          description='Complete all steps to finish the process.'
          footer={footer}
          footerAlign='between'
          closeOnBackdropClick={false}
        >
          {content}
        </Modal>
      </div>
    );
  },
};

export const CustomModal: Story = {
  render: function BestPracticesRenderer() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
      <div>
        <div className='max-w-md mx-auto bg-white p-5 rounded-lg shadow'>
          <h3 className='text-lg font-medium mb-4'>
            Modal Design Best Practices
          </h3>
          <p className='mb-4'>
            This example demonstrates a well-designed modal following best
            practices for:
          </p>
          <ul className='list-disc pl-5 mb-4'>
            <li>Appropriate sizing and content spacing</li>
            <li>Accessible controls</li>
            <li>Visual hierarchy</li>
            <li>Smooth animations</li>
            <li>Clear actions</li>
            <li>Keyboard focus management</li>
          </ul>
          <Button onClick={handleOpen} colorScheme='primary'>
            View Example Modal
          </Button>
        </div>

        <Modal
          isOpen={isOpen}
          onClose={handleClose}
          variant='primary'
          size='lg'
          animation='zoom'
          backdrop='blur'
          backdropAnimation='fade'
          headerVariant='primary'
          footerVariant='clean'
          headerClassName='px-6 py-4'
          footerClassName='px-6 py-4 bg-secondary-50'
          header='Complete Your Profile'
          description='Provide the following information to finish setting up your account.'
          footer={
            <div className='flex gap-2'>
              <Button colorScheme='secondary' onClick={handleClose}>
                Cancel
              </Button>
              <Button colorScheme='primary' onClick={handleClose}>
                Save Profile
              </Button>
            </div>
          }
          closeButtonLabel='Close profile dialog'
        >
          <div className='p-6 space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <Input
                type='text'
                id='fullName'
                placeholder='Full Name'
                variant='outlined'
              />
              <Input type='email' id='email' placeholder='Email Address' />

              <SingleSelect
                placeholder='Select a role'
                options={[
                  { label: 'Developer', value: 'Developer' },
                  { label: 'Designer', value: 'Designer' },
                  { label: 'Manager', value: 'Manager' },
                ]}
                id='role'
              />
              <SingleSelect
                placeholder='Select a timezone'
                options={[
                  {
                    label: 'UTC-8 (Pacific Time)',
                    value: 'UTC-8 (Pacific Time)',
                  },
                  {
                    label: 'UTC-5 (Eastern Time)',
                    value: 'UTC-5 (Eastern Time)',
                  },
                  { label: 'UTC+0 (GMT)', value: 'UTC+0 (GMT)' },
                  {
                    label: 'UTC+1 (Central European Time)',
                    value: 'UTC+1 (Central European Time)',
                  },
                ]}
                id='timezone'
              />
            </div>

            <div className='space-y-2'>
              <TextArea id='bio' rows={3} placeholder='Short Bio'></TextArea>
            </div>

            <div className='flex items-center gap-2'>
              <Checkbox type='checkbox' id='notifications' />
              <Text as={'label'} htmlFor='notifications' className='text-sm'>
                Subscribe to email notifications
              </Text>
            </div>
          </div>
        </Modal>
      </div>
    );
  },
};
