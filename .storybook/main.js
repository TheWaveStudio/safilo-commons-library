const storiesPath = "../frontend/stories";
const path = require('path');
// const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  "stories": [
    `${storiesPath}/*.stories.mdx`,
    `${storiesPath}/**/*.stories.@(js|jsx|ts|tsx)`
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-controls'
  ],
  babel: async (options) => ({
    plugins: ["@babel/plugin-proposal-optional-chaining"]
  }),
  webpackFinal: async (config, {configType}) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            // Provide path to the file with resources
            resources: path.resolve(__dirname, '../frontend/scss/main.scss'),
          }
        },
      ],
    });

    return config;
  }

}
