import CustomDocsContainerWrapper from "../docs/CustomDocsContainerWrapper";
import CustomDocsPageRoot from "../docs/CustomDocsPageRoot";
import ThemeLight from "../theme/ThemeLight";
import ThemeDark from "../theme/ThemeDark";

const themes = {
  dark: { ...ThemeDark },
  light: { ...ThemeLight },
};

/**
 * Docs configuration
 * @link https://storybook.js.org/docs/react/writing-docs/introduction
 */
const docs = {
  container: CustomDocsContainerWrapper,
  page: CustomDocsPageRoot,
  themes: themes,
  toc: true, // Enables the table of contents
};

export default docs;
