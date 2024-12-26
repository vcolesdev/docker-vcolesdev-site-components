import { ButtonProps as MUIButtonProps } from "@mui/base/Button/Button.types";
import { CSSProperties } from "react";
import type { Api } from "@/src/app.types";
import { ButtonClasses as Btn } from "./Button.styles";

/** @type ButtonBaseProps - Contains the base MUI button properties for our element. */
export type ButtonBaseProps = Pick<MUIButtonProps, "aria-label" | "children" | "disabled" | "rootElementName" | "type">;

/** @type ButtonVariant - Contains the different button variants. */
export type ButtonVariant = "default" | "primary" | "secondary" | "ghost" | "outlined";

/** @type ButtonSize - Contains the different button sizes. */
export type ButtonSize = "sm" | "md" | "lg" | "xl";

/** @type ButtonApi - Contains the API for the Button component. */
export interface ButtonApi extends Api {}

/**
 * ButtonProps - Contains the properties for the custom Button component, based on MUI.
 * @interface ButtonProps
 */
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

/**
 * Button Theme Colors
 * @const btnThemeColors
 */
export const btnThemeColors = {
  default: Btn.theme.default,
  primary: Btn.theme.primary,
  secondary: Btn.theme.secondary,
  ghost: Btn.theme.ghost,
  outlined: Btn.theme.outlined,
};

/**
 * Button Sizes
 * @const btnSizes
 */
export const btnSizes = {
  sm: Btn.sizes.sm,
  md: Btn.sizes.md,
  lg: Btn.sizes.lg,
  xl: Btn.sizes.xl,
};

/**
 * Button Styles
 * @const btnStyles
 */
export const btnStyles = {
  backdrop: { root: Btn.backdrop },
  contentWrapper: Btn.contentWrapper,
  root: Btn.root,
  ...btnThemeColors,
};

/**
 * Button API
 * Our button API consisting of our button sizes and styles.  The API can also be extended to include more properties.
 * @const api
 */
export const api = {
  //rounded: Btn.rounded,
  sizes: btnSizes,
  styles: btnStyles,
} as ButtonApi;
