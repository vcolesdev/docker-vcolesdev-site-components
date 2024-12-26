const site = {
  babyBlue: "hsl(200, 40%, 72%)",
  babyPink: "hsl(11, 80%, 90%)",
  charcoalBlue: "hsl(225, 28%, 23%)",
  melon: "hsl(0, 90%, 72%)",
  rose: "hsl(347, 58%, 46%)",
  roseDark: "hsl(347, 58%, 31%)",
  salmon: "hsl(0, 57%, 60%)",
  treeBark: "hsl(11, 10%, 21%)",
  tropicalIndigo: "hsl(261, 100%, 79%)",
};

const actions = {
  primary: site.salmon,
  secondary: site.rose,
  primaryDark: site.tropicalIndigo,
  secondaryDark: site.salmon,
};

const bg = {
  light: site.babyPink,
  lightElevated: "hsl(11, 80%, 97%)",
  dark: site.charcoalBlue,
  darkElevated: "hsl(225, 28%, 40%)",
};

const text = {
  light: site.treeBark,
  dark: "hsl(258, 26%, 85%)",
};

const states = {
  success: "hsl(160, 84%, 39%)",
  warning: "hsl(45, 100%, 50%)",
  danger: "hsl(354, 69%, 50%)",
};

export const swatches = {
  white: "hsl(0, 0%, 100%)",
  black: "hsl(30, 7%, 11%)",
  neutral: "hsl(210, 9%, 87%)",
  site: site,
  states: states,
  actions: actions,
  bg: bg,
  text: text,
};
