import type { Preview } from '@storybook/react';
import '../src/index.css';
import customTheme from './customTheme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: false,
      hideNoControlsWarning: true,
    },
    docs: {
      theme: customTheme,
    },
  },

  tags: ['autodocs'],
};

export default preview;
