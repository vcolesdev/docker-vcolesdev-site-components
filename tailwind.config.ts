import { fontFamily } from "tailwindcss/defaultTheme";

// @todo Organize this file.

const themeScreens = {
  full: "1920px",
};

const borderRadius = {
  sm: "var(--border-radius-sm)",
  md: "var(--border-radius-md)",
  lg: "var(--border-radius-lg)",
  xl: "var(--border-radius-xl)",
  "2xl": "var(--border-radius-2xl)",
  icon: "var(--border-radius-icon)",
  button: "var(--border-radius-button)",
  "featured-post": "var(--border-radius-featured-post)",
  "featured-image": "var(--border-radius-featured-image)",
};

const borderWidth = {
  button: "var(--border-width-button)",
};

const themeShadowColors = {
  "theme-light": "rgba(243,24,32,0.1)",
  "theme-dark": "rgb(12,20,24,0.3)",
};

const themeColors = {
  black: "var(--color-black)",
  neutral: "var(--color-neutral)",
  melon: "var(--color-melon)",
  rose: "var(--color-rose)",
  "rose-dark": "var(--color-rose-dark)",
  sky: "var(--color-sky)",
  "baby-blue": "var(--color-baby-blue)",
  "freshwater-blue": "var(--color-freshwater-blue)",
  "deep-brown": "var(--color-deep-brown)",
  "tree-bark": "var(--color-tree-bark)",
};

const themeStateColors = {
  success: "var(--color-success)",
  warning: "var(--color-warning)",
  destructive: "var(--color-destructive)",
};

const themeBgColors = {
  light: "var(--bg-color)",
  "light--elevated": "var(--bg-color--elevated)",
  dark: "var(--bg-color--dark)",
  "dark--elevated": "var(--bg-color--dark-elevated)",
};

const themeGradientColorStops = {
  "gradient-primary-start": "var(--gradient-primary-start)",
  "gradient-primary-end": "var(--gradient-primary-end)",
};

const themeTextColors = {
  "body-color": "var(--text-color)",
  "body-color--muted": "var(--text-color--muted)",
  "body-color--dark": "var(--text-color--dark)",
  "body-color--dark-muted": "var(--text-color--dark-muted)",
};

const themeHeadingColors = {
  heading: "var(--color-heading)",
  "heading--dark": "var(--color-heading--dark)",
  "heading-subtitle": "var(--color-heading-subtitle)",
  "heading-subtitle--dark": "var(--color-heading-subtitle--dark)",
  "site-intro": "var(--color-site-intro)",
  "site-intro--dark": "var(--color-site-intro--dark)",
};

const themeActionColors = {
  "action-primary": "var(--color-action-primary)",
  "action-primary--dark": "var(--color-action-primary--dark)",
};

const themeFontSizes = {
  base: "var(--text-size-base)",
  sm: "var(--text-size-sm)",
  lg: "var(--text-size-lg)",
  xl: "var(--text-size-xl)",
  huge: "var(--text-size-huge)",
  jumbo: "var(--text-size-jumbo)",
  body: "var(--font-size-body)",
};

const elementFontSizes = {
  button: "var(--font-size-button)",
  "featured-heading": "var(--font-size-featured-heading)",
  "intro-heading": "var(--font-size-intro-heading)",
  "featured-text": "var(--font-size-featured-text)",
  "intro-text": "var(--font-size-intro-text)",
};

const baseFontFamilies = {
  body: ["Reddit Sans", ...fontFamily.sans],
  button: ["Reddit Sans", ...fontFamily.sans],
  heading: ["Anek Tamil", ...fontFamily.serif],
  cursive: ["Playwrite AU NSW", ...fontFamily.serif],
};

const transitionTimingFunc = {
  linear: "cubic-bezier( 0.250, 0.250, 0.750, 0.750)",

  "in-quad": "cubic-bezier( 0.26, 0, 0.6, 0.2 )",
  "out-quad": "cubic-bezier( 0.4, 0.8, 0.74, 1 )",
  "in-out-quad": "cubic-bezier( 0.48, 0.04, 0.52, 0.96 )",

  "in-cubic": "cubic-bezier( 0.4, 0, 0.68, 0.06 )",
  "out-cubic": "cubic-bezier( 0.34, 1.02, 0.68, 1 )",
  "in-out-cubic": "cubic-bezier( 0.66, 0, 0.34, 1 )",

  "in-quart": "cubic-bezier( 0.52, 0, 0.74, 0 )",
  "out-quart": "cubic-bezier( 0.26, 1.04, 0.54, 1 )",
  "in-out-quart": "cubic-bezier( 0.770, 0.000, 0.175, 1.000 )",

  "in-expo": "cubic-bezier( 0.66, 0, 0.86, 0 )",
  "out-expo": "cubic-bezier( 0.16, 1.08, 0.38, 0.98 )",
  "in-out-expo": "cubic-bezier( 0.9, 0, 0.1, 1 )",

  "in-back": "cubic-bezier( 0.600, -0.280, 0.735, 0.045 )",
  "out-back": "cubic-bezier( 0.175, 0.885, 0.320, 1.275 )",
  "in-out-back": "cubic-bezier( 0.175, 0.885, 0.320, 1.275 )",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./stories/**/*.stories.{ts,tsx}", "./stories/**/*.{ts,tsx}", "./stories/**/*.mdx"],
  darkMode: "selector",
  theme: {
    extend: {
      borderRadius: { ...borderRadius },
      borderWidth: { ...borderWidth },
      boxShadowColor: {
        ...themeColors,
        ...themeShadowColors,
      },
      colors: {
        ...themeColors,
        ...themeStateColors,
        ...themeBgColors,
        ...themeTextColors,
        ...themeHeadingColors,
        ...themeActionColors,
        ...themeGradientColorStops,
      },
      fontSize: {
        ...themeFontSizes,
        ...elementFontSizes,
      },
      fontFamily: {
        ...baseFontFamilies,
      },
      screens: {
        ...themeScreens,
      },
      transitionTimingFunction: {
        ...transitionTimingFunc,
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
