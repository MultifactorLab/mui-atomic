import '!style-loader!css-loader!sass-loader!../src/lib/styles/theme/typography.scss';
import type { Preview } from '@storybook/angular';
import { themes } from 'storybook/internal/theming';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    darkMode: {
      dark: { ...themes.dark},
      light: { ...themes.normal},
      stylePreview: true,
      classTarget: 'html',
      darkClass: 'storybook-dark',
      lightClass: 'storybook-light'
    }
  }
};

export default preview;
