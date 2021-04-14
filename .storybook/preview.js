import Vue from 'vue'
import Oruga from '@oruga-ui/oruga'
import '@oruga-ui/oruga/dist/oruga.css'

Vue.use(Oruga)


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}