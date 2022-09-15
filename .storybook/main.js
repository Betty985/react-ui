// .storybook/main.js
// 这是storybook的配置文件，loader、entry file等都会在此进行配置
const path = require("path");

module.exports = {
  // storybook文档的目标文件
  stories: ["../src/**/*.stories.(tsx|mdx)"],
  // 插件依赖
  addons: ['@storybook/addon-knobs', '@storybook/addon-docs'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]]
      }
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  }
};