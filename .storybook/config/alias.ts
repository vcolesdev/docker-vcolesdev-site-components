import * as path from "path";

/**
 * Aliases for Storybook and Vite
 * @link https://storybook.js.org/docs/react/configure/webpack#extending-storybooks-webpack-config
 */
const alias = {
  "@": path.resolve(__dirname, "../../"),
};

console.log(alias);

export default alias;
