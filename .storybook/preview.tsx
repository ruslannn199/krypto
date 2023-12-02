import React from 'react';
import type { Preview } from '@storybook/react';
import StyledComponentsRegistry from '../lib/AntdRegistry';
import mainTheme from '../theme/main';
import { ConfigProvider } from 'antd';
import { poppins } from '../app/layout';

import '../styles/global.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <StyledComponentsRegistry>
        <ConfigProvider theme={mainTheme}>
          <div className={poppins.variable}>
            <Story />
          </div>
        </ConfigProvider>
      </StyledComponentsRegistry>
    ),
  ],
}

export default preview;
