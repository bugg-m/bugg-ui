import { create } from '@storybook/theming';

const customTheme = create({
  base: 'light',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Bugg-UI',
  brandUrl: 'https://bugg-portfolio.netlify.app',
  brandImage: '/bugg-logo.png',
  brandTarget: '_self',
});

export default customTheme;
