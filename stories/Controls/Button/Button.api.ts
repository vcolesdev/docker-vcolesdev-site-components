import { ButtonProps as MUIButtonProps } from "@mui/base/Button/Button.types";
import { CSSProperties } from "react";
import * as BTN from "./Button.const";
import type { Api } from "@/src/app.types";

export type ButtonBaseProps = Pick<MUIButtonProps, "aria-label" | "children" | "disabled" | "rootElementName" | "type">;
export type ButtonVariant = "default" | "primary" | "secondary" | "ghost" | "outlined";
export type ButtonSize = "sm" | "md" | "lg" | "xl";

export interface ButtonApi extends Api {}

export interface ButtonProps extends ButtonBaseProps {
  extraClasses?: string;
  hasIcon?: boolean;
  iconPos?: "start" | "end";
  variant?: ButtonVariant;
  removeClasses?: string[];
  size?: ButtonSize;
  style?: CSSProperties;
}

// Gradients
export const BUTTON_BG_GRADIENTS = {
  primary: BTN.BUTTON_BG_GRADIENT_PRIMARY,
};

// Theme Colors
export const BUTTON_THEME_COLORS = {
  default: BTN.BUTTON_THEME_DEFAULT,
  primary: BTN.BUTTON_THEME_PRIMARY,
  secondary: BTN.BUTTON_THEME_SECONDARY,
  ghost: BTN.BUTTON_THEME_GHOST,
  outlined: BTN.BUTTON_THEME_OUTLINED,
};

// Theme Styles
export const BUTTON_BACKDROP_THEME_COLORS = {
  primary: BTN.BUTTON_BG_GRADIENT_PRIMARY,
  secondary: BTN.BUTTON_BG_GRADIENT_SECONDARY,
  ghost: BTN.BUTTON_BG_GRADIENT_GHOST,
  outlined: BTN.BUTTON_BG_GRADIENT_OUTLINED,
};

// Button Sizes
export const BUTTON_SIZES = {
  sm: BTN.BUTTON_SIZE_SM,
  md: BTN.BUTTON_SIZE_MD,
  lg: BTN.BUTTON_SIZE_LG,
  xl: BTN.BUTTON_SIZE_XL,
};

// Button Styles
export const BUTTON_STYLES = {
  backdrop: { root: BTN.BUTTON_BACKDROP_ROOT, ...BUTTON_BACKDROP_THEME_COLORS },
  contentWrapper: BTN.BUTTON_CONTENT_WRAPPER,
  root: BTN.BUTTON_ROOT,
  ...BUTTON_THEME_COLORS,
};

// Button API
export const api = {
  bgGradients: BUTTON_BG_GRADIENTS,
  sizes: BUTTON_SIZES,
  styles: BUTTON_STYLES,
} as ButtonApi;
