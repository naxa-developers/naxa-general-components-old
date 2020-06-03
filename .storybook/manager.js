import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import { addDecorator, configure } from '@storybook/react';
import { addReadme } from 'storybook-readme';

addons.setConfig({
  theme: themes.dark,
  
});

addDecorator(addReadme);