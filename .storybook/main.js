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
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // config.module.rules.push({
    //   enforce: 'pre',
    //   test: /\.js?$/,
    //   exclude: /node_modules/,
    //   loader: 'eslint-loader',
    //   options: {
    //     failOnWarning: true,
    //     failOnError: true,
    //   },
    // });

    // config.plugins.push(new ESLintPlugin({exclude: 'node_modules'}));

    return config;
  }
  
}