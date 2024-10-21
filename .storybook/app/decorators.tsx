import type { StoryFn } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";

import StoriesApp from "../StoriesApp";
import ThemeWrapper from "../theme/ThemeWrapper";

/**
 * Storybook decorators
 * @link https://storybook.js.org/docs/react/writing-stories/decorators
 * @param Story
 */
const decorators = (Story: StoryFn) => {
  const isDark = useDarkMode();

  return (
    <ThemeWrapper>
      <StoriesApp isDarkTheme={isDark}>
        <Story />
      </StoriesApp>
    </ThemeWrapper>
  );
};

export default decorators;
