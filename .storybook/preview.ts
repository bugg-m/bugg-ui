import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview } from "@storybook/react";
import "../src/index.css";


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [withThemeByDataAttribute({
  themes: {
    light: 'light',
    dark: 'dark',
  },
  defaultTheme: 'light',

})];