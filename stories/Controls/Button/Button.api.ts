import { ButtonProps as MUIButtonProps } from "@mui/base/Button/Button.types";
import { CSSProperties } from "react";
import type { Api } from "@/src/app.types";
import { ButtonClasses as Btn } from "./Button.styles";

export type ButtonBaseProps = Pick<MUIButtonProps, "aria-label" | "children" | "disabled" | "rootElementName" | "type">;
export type ButtonVariant = "default" | "primary" | "secondary" | "ghost" | "outlined";
export type ButtonSize = "sm" | "md" | "lg" | "xl";

export interface ButtonApi extends Api {}

export interface ButtonProps extends ButtonBaseProps {
  extraClasses?: string;
  hasIcon?: boolean;
  iconPos?: "start" | "end";
  //rounded?: boolean;
  variant?: ButtonVariant;
  removeClasses?: string[];
  size?: ButtonSize;
  style?: CSSProperties;
}

// Theme Colors
export const btnThemeColors = {
  default: Btn.theme.default,
  primary: Btn.theme.primary,
  secondary: Btn.theme.secondary,
  ghost: Btn.theme.ghost,
  outlined: Btn.theme.outlined,
};

// Button Sizes
export const btnSizes = {
  sm: Btn.sizes.sm,
  md: Btn.sizes.md,
  lg: Btn.sizes.lg,
  xl: Btn.sizes.xl,
};

// Button Styles
export const btnStyles = {
  backdrop: { root: Btn.backdrop },
  contentWrapper: Btn.contentWrapper,
  root: Btn.root,
  ...btnThemeColors,
};

// Button API
export const api = {
  //rounded: Btn.rounded,
  sizes: btnSizes,
  styles: btnStyles,
} as ButtonApi;
