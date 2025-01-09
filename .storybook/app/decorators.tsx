import type { StoryFn } from "@storybook/react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import * as React from "react";
import { useDarkMode } from "storybook-dark-mode";

import StoriesApp from "../StoriesApp";
import ThemeWrapper from "../theme/ThemeWrapper";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

/**
 * Storybook decorators
 * @link https://storybook.js.org/docs/react/writing-stories/decorators
 * @param Story
 */
const decorators = (Story: StoryFn) => {
  const isDark = useDarkMode();

  console.log(convex);

  return (
    <ConvexProvider client={convex}>
      <ThemeWrapper>
        <StoriesApp isDarkTheme={isDark}>
          <Story />
        </StoriesApp>
      </ThemeWrapper>
    </ConvexProvider>
  );
};

export default decorators;
