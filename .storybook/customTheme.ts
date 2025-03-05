import { create } from '@storybook/theming';

const customTheme = create({
  base: 'light',
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
  brandTitle: 'Bugg-UI',
  brandUrl: 'https://github.com/bugg-m/bugg-ui',
  brandImage: '/bugg-logo.png',
  brandTarget: '_self',
});

export default customTheme;
