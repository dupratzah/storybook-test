// src/app/components/task.stories.ts
import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import { action } from '@storybook/addon-actions';
import { ButtonsComponent } from './buttons.component';
import { withKnobs, object } from '@storybook/addon-knobs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import myTheme from './../../../../../.storybook/theme';

// addons.setConfig({
//   theme: myTheme,
// });

addons.setConfig({
  theme: themes.dark,
});


export default {
  title: 'Buttons',
  excludeStories: /.*Data$/,
  decorators: [
    withKnobs,
  ],
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

export const buttonData = {
  color: '',
  disabled: false,
  outline: false,
  content: 'button',
};

export const Basic = () => ({
  component: ButtonsComponent,
  props: {
    color: object('color', buttonData.color),
    disabled: object('disabled', buttonData.disabled),
    outline: object('outline', buttonData.outline),
    content: object('content', buttonData.content),
    onClick: action('Action'),
  },
});

