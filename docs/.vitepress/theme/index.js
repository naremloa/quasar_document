import DefaultTheme from 'vitepress/theme';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // app.component('VueClickAwayExample', VueClickAwayExample)
    console.log('app', app);
  },
}