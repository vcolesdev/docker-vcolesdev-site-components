/**
 * Light Theme
 * @link https://storybook.js.org/docs/react/configure/theming
 */
import { create } from "@storybook/theming/create";
import { ThemeVars } from "@storybook/theming";

const Light = create({
  base: "light" as "light",

  fontBase: '"system-ui", sans-serif',
  fontCode: "monospace",

  appPreviewBg: "rgb(250, 224, 219)", // Preview BG (Stories & Docs)
}) as ThemeVars;

export default Light;
