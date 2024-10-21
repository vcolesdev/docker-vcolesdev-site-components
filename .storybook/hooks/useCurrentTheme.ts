import useDarkModeChannel from "./useDarkModeChannel";
import { themes } from "@storybook/theming";
import { useMemo } from "react";

/**
 * Handle the current theme for Storybook using the addons events channel.
 * @hook useCurrentTheme
 */
export default function useCurrentTheme() {
  const { isDarkMode } = useDarkModeChannel();
  const { light, dark } = themes;
  const theme = useMemo(() => (isDarkMode ? dark : light), [isDarkMode]);

  return { theme };
}
