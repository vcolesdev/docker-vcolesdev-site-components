import useStoriesAppTheme from "./useStoriesAppTheme";
import { useEffect } from "react";
import useGlobalStyles from "./useGlobalStyles";

/**
 * Control the theme of the application through the App Component.
 * @param isDarkTheme
 */
export default function useStoriesApp(isDarkTheme: boolean) {
  const { theme } = useStoriesAppTheme();
  const globalStyles = useGlobalStyles(isDarkTheme);

  useEffect(() => {}, [isDarkTheme, theme]);

  return { theme, globalStyles };
}
