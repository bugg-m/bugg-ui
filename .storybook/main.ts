import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import tsConfigPaths from 'vite-tsconfig-paths';

const dir = import.meta.dirname ?? __dirname;

const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.@(ts|tsx)'],
  addons: [
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

  docs: { autodocs: 'tag' },
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    config.plugins?.push(
      tsConfigPaths({
        projects: [path.resolve(path.dirname(dir), 'tsconfig.json')],
      })
    );
    return config;
  },
  managerHead: (head) => `
    ${head}
    <link rel="icon" type="image/png" href="/bugg.png" sizes="192x192" />
  `,
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
