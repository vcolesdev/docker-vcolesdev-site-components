import docs from "../addons/docs";
import darkMode from "../addons/darkMode";
import ThemeDark from "../theme/ThemeDark";
import ThemeLight from "../theme/ThemeLight";

/**
 * Storybook controls
 */
const controls = {
  expanded: true,
  hideNoControlsWarning: true,
};

/**
 * Storybook preview tabs
 */
const previewTabs = {
  canvas: {
    hidden: false,
  },
  docs: {
    hidden: false,
  },
};

/**
 * Storybook theming
 */
const themes = {
  dark: { ...ThemeDark },
  light: { ...ThemeLight },
};

/**
 * Storybook parameters
 * @link https://storybook.js.org/docs/writing-stories/parameters
 */
const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: controls,
  docs: docs,
  darkMode: darkMode,
  previewTabs: previewTabs,
  themes: themes,
};

export default parameters;
