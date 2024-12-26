import * as React from "react";

/**
 * The level of the heading represented by a number.
 * @type {HeadingLevels}
 */
export type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * The size of the heading represented by a string.
 * @type {HeadingSizes}
 */
export type HeadingSizes = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * @interface HeadingApi
 */
export interface HeadingApi {
  children: React.ReactNode | React.ReactNode[] | string;
  extraClassnames?: string;
  extraStyles?: React.CSSProperties;
  italic?: boolean;
  level?: HeadingLevels;
  ref?: React.Ref<HTMLHeadingElement>;
  size?: HeadingSizes;
}
