import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import tsConfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    config.plugins?.push(
      tsConfigPaths({
        projects: [path.resolve(path.dirname(__dirname), 'tsconfig.json')],
      })
    );
    return config;
  },
};
export default config;
