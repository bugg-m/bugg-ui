import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import tsConfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

const dir = import.meta.dirname ?? __dirname;

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
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
  docs: {},
  viteFinal: async (config) => {
    config.plugins?.push(
      tsConfigPaths({
        projects: [path.resolve(path.dirname(dir), 'tsconfig.json')],
      })
    );
    config.plugins?.push(svgr());
    return config;
  },
};
export default config;
