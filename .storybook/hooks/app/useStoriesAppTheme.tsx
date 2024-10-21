import { useContext } from "react";

import type { ThemeContextApi } from "../../../src/context/ThemeContext";
import { ThemeContext } from "../../../src/context/ThemeContext";

/**
 * Control the theme of the application.
 * @hook useAppTheme
 */
export default function useStoriesAppTheme() {
  const currentTheme = useContext(ThemeContext);
  if (!currentTheme) throw new Error("useAppTheme must be used within a ThemeProvider");
  return currentTheme as ThemeContextApi;
}
