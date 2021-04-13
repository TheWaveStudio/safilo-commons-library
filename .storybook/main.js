const storiesPath = "../frontend/stories";
const path = require('path');

module.exports = {
  "stories": [
    `${storiesPath}/*.stories.@(js|jsx|ts|tsx)`,
    `${storiesPath}/**/*.stories.@(js|jsx|ts|tsx)`,
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/preset-scss'
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
}
