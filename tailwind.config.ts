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
  white: "var(--color-white)",
  // Melon
  melon: "var(--color-melon)",
  "melon-dark": "var(--color-melon-dark)",
  "melon-light": "var(--color-melon-light)",
  // Charcoal Blue
  "charcoal-blue": "var(--color-charcoal-blue)",
  "charcoal-blue-dark": "var(--color-charcoal-blue-dark)",
  "charcoal-blue-light": "var(--color-charcoal-blue-light)",
  // Rose
  rose: "var(--color-rose)",
  "rose-dark": "var(--color-rose-dark)",
  // Salmon
  salmon: "var(--color-salmon)",
  // Baby Blue
  "baby-blue": "var(--color-baby-blue)",
  // Baby Pink
  "baby-pink": "var(--color-baby-pink)",
  // Tree Bark
  "tree-bark": "var(--color-tree-bark)",
  // Tropical Indigo
  "tropical-indigo": "var(--color-tropical-indigo)",
};

const themeStateColors = {
  success: "var(--color-success)",
  warning: "var(--color-warning)",
  destructive: "var(--color-destructive)",
  "destructive-hover": "var(--color-destructive-hover)",
};

const themeBgColors = {
  light: "var(--bg-color)",
  dark: "var(--bg-color-dark)",
  spotlight: "var(--bg-color-elevated)",
  "light-elevated": "var(--bg-color-elevated)",
  "dark-elevated": "var(--bg-color-dark-elevated)",
  "spotlight-dark": "var(--bg-color-dark-elevated)",
};

const themeGradientColorStops = {
  "gradient-primary-start": "var(--gradient-primary-start)",
  "gradient-primary-end": "var(--gradient-primary-end)",
};

const themeTextColors = {
  "body-color": "var(--text-color)",
  "body-color-muted": "var(--text-color-muted)",
  "body-color-dark": "var(--text-color-dark)",
  "body-color-dark-muted": "var(--text-color-dark-muted)",
};

const themeHeadingColors = {
  heading: "var(--color-heading)",
  "heading--dark": "var(--color-heading-dark)",
  "heading-subtitle": "var(--color-heading-subtitle)",
  "heading-subtitle-dark": "var(--color-heading-subtitle-dark)",
  "site-intro": "var(--color-site-intro)",
  "site-intro-dark": "var(--color-site-intro-dark)",
};

const themeActionColors = {
  primary: "var(--color-primary)",
  "primary-hover": "var(--color-primary-hover)",
  "primary-dark": "var(--color-primary-dark)",
  "primary-dark-hover": "var(--color-primary-dark-hover)",
  secondary: "var(--color-secondary)",
  "secondary-hover": "var(--color-secondary-hover)",
  "secondary-dark": "var(--color-secondary-dark)",
  "secondary-dark-hover": "var(--color-secondary-dark-hover)",
  ghost: "var(--color-ghost)",
  "ghost-hover": "var(--color-ghost-hover)",
  "ghost-dark": "var(--color-ghost-dark)",
  "ghost-dark-hover": "var(--color-ghost-dark-hover)",
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
  body: ["var(--font-body)", "sans-serif"],
  serif: ["var(--font-serif)", "serif"],
  button: ["var(--font-button)", "sans-serif"],
  heading: ["var(--font-heading)", "serif"],
  "heading-alt": ["var(--font-heading-alt)", "serif"],
  cursive: ["Playwrite AU NSW", "cursive"],
  logo: ["Playwrite IE", "cursive"],
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
  content: [
    "./@/**/*.{ts,tsx}",
    "./stories/**/*.stories.{ts,tsx}", 
    "./stories/**/*.{ts,tsx}", 
    "./stories/**/*.mdx"
  ],
  darkMode: ["selector"],
  theme: {
  	extend: {
  		borderRadius: {
        ...borderRadius,
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		borderWidth: {
        ...borderWidth
  		},
  		boxShadowColor: {
        ...themeColors,
        ...themeShadowColors
  		},
  		colors: {
        ...themeColors,
        ...themeStateColors,
        ...themeBgColors,
        ...themeTextColors,
        ...themeHeadingColors,
        ...themeActionColors,
        ...themeGradientColorStops
  		},
  		fontSize: {
        ...themeFontSizes,
        ...elementFontSizes
  		},
  		fontFamily: {
        ...baseFontFamilies
  		},
  		screens: {
        ...themeScreens
  		},
  		transitionTimingFunction: {
        ...transitionTimingFunc
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
};
