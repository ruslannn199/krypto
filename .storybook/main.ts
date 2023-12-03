import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-pseudo-states',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: [{ from: '../public', to: '@' }],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: false,
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config) => {
    if (config && config.module && config.module.rules) {
      const fileLoaderRule = config.module.rules.find((rule) => {
        if (rule && typeof rule !== 'string' && rule.test && rule.test instanceof RegExp) {
          return rule.test.test('.svg');
        }
      });
      if (fileLoaderRule && typeof fileLoaderRule !== 'string') {
        fileLoaderRule.exclude = /\.svg$/;
      }
  
      config.module.rules.push({
        test: /\.svg$/,
        enforce: 'pre',
        loader: require.resolve('@svgr/webpack'),
      });
    }

    return config;
  }
}
export default config;
