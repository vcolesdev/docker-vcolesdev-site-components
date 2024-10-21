import ThemeDark from "../../theme/ThemeDark";
import ThemeLight from "../../theme/ThemeLight";

/**
 * This is an example hook utilizing some theme styles based on our application's dark mode.
 * @hook useGlobalStyles
 * @param isDarkTheme
 */
export default function useGlobalStyles(isDarkTheme: boolean) {
  const dark = ThemeDark;
  const light = ThemeLight;

  const bgColor = isDarkTheme ? dark.appPreviewBg : light.appPreviewBg;
  const textColor = isDarkTheme ? dark.textColor : light.textColor;

  return { bgColor, textColor };
}
