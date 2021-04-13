import { app } from '@storybook/vue3';
import Oruga from '@oruga-ui/oruga-next';
import '@oruga-ui/oruga/dist/oruga.css'

app.use(Oruga);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
