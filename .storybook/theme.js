import { create } from '@storybook/theming/create';

export default create({
    base: 'dark',
  
    colorPrimary: '#f9b732',
    colorSecondary: '#ff6f54',
  
    // UI
    appBg: 'white',
    appContentBg: 'silver',
    appBorderColor: 'grey',
    appBorderRadius: 4,
  
    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',
  
    // Text colors
    textColor: 'black',
    textInverseColor: 'rgba(255,255,255,0.9)',
  
    // Toolbar default and active colors
    barTextColor: 'silver',
    barSelectedColor: 'black',
    barBg: '#f9b732',
  
    // Form colors
    inputBg: 'white',
    inputBorder: 'silver',
    inputTextColor: 'black',
    inputBorderRadius: 4,
  
    brandTitle: 'Linkaband',
    brandUrl: 'https://linkaband.com',
    brandImage: 'https://linkaband.com/assets/images/logo-linkaband.png',
  });