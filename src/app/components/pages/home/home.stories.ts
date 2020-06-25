// src/app/components/task.stories.ts
import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import { action } from '@storybook/addon-actions';
import { HomeComponent } from './home.component';
import { withKnobs, object } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addons.setConfig({
  theme: themes.dark,
});


export default {
  title: 'Home',
  excludeStories: /.*Data$/,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6'
    },
    backgrounds: [
      { name: 'twitter', value: '#00aced', default: true },
      { name: 'facebook', value: '#3b5998' },
    ]
  }
};

export const Basic = () => ({
  component: HomeComponent
});

