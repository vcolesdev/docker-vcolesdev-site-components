import useStorageApiTheme from "../api/useStorageApiTheme";
import useBootstrapTheme from "../app/useBootstrapTheme";

/**
 * App-related properties and hooks.  Mainly for bootstrapping themes in Storybook Preview.
 * @param isDarkTheme
 */
export default function useStoriesAppComponent(isDarkTheme: boolean) {
  useStorageApiTheme(isDarkTheme);
  useBootstrapTheme(isDarkTheme);
}
