const storiesPath = "../frontend/stories";

module.exports = {
  "stories": [
    `${storiesPath}/*.stories.@(js|jsx|ts|tsx)`,
    `${storiesPath}/**/*.stories.@(js|jsx|ts|tsx)`,
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}
