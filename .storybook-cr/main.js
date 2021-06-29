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
    "@storybook/addon-essentials"
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
            resources: [
              path.resolve(__dirname, '../frontend/scss/abstracts/main-cr.scss'),
              path.resolve(__dirname, '../frontend/scss/main.scss')
            ],
          }
        },
      ],
    });

    config.resolve.alias['~assets'] = path.resolve(__dirname, '../frontend/assets')
    return config;
  }

}
