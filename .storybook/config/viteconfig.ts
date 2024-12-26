import alias from "./alias";
import * as path from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
const getAbsolutePath = (packageName: string): any =>
  path.dirname(require.resolve(path.join(packageName, "package.json")));

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
