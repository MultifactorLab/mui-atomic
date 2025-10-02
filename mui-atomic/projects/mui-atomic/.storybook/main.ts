import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/lib/components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@vueless/storybook-dark-mode'],
  framework: {
    name: '@storybook/angular',
    options: {}
  }
};
export default config;
