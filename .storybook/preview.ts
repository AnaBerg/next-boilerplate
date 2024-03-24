import type { Preview } from '@storybook/react';
import {
  withThemeByClassName,
  withThemeByDataAttribute,
} from '@storybook/addon-themes';

import '../src/app/globals.css';

const themeConfig = {
  themes: { light: 'light', dark: 'dark' },
  defaultTheme: 'light',
};

export const decorators = [
  withThemeByClassName(themeConfig),
  withThemeByDataAttribute({ ...themeConfig, attributeName: 'data-mode' }),
];

const preview: Preview = {
  parameters: {
    docs: {
      toc: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
