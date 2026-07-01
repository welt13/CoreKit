import type { StorybookConfig } from '@storybook/react-vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/react-vite',
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': resolve(dirname(fileURLToPath(import.meta.url)), '../src'),
        '@components': resolve(dirname(fileURLToPath(import.meta.url)), '../src/components'),
        '@utils': resolve(dirname(fileURLToPath(import.meta.url)), '../src/utils'),
        '@tokens': resolve(dirname(fileURLToPath(import.meta.url)), '../src/tokens'),
      };
    }
    return config;
  },
};
export default config;
