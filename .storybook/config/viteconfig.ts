import alias from "./alias";

/**
 * Vite config
 * @link https://storybook.js.org/docs/react/configure/webpack#extending-storybooks-webpack-config
 */
const viteConfig = {
  optimizeDeps: {},
  server: {
    fs: {
      strict: false,
    },
  },
  resolve: {
    alias: alias,
  },
};

export default viteConfig;
