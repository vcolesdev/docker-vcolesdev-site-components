import ThemeDark from "../theme/ThemeDark";
import ThemeLight from "../theme/ThemeLight";

/**
 * Storybook dark mode
 * @link https://storybook.js.org/addons/storybook-dark-mode
 */
const darkMode = {
  classTarget: "html",
  dark: {
    ...ThemeDark,
  },
  darkClass: "dark",
  light: {
    ...ThemeLight,
  },
  lightClass: "light",
  stylePreview: true,
};

export default darkMode;
