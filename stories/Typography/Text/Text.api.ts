import * as React from "react";

/**
 * The HTML element to render the text content.
 * @type {HTMLTextElement}
 */
export type HTMLTextElement = "p" | "span" | "div";

/**
 * The size of the text content.
 * @type {TextSize}
 */
export type TextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

/**
 * The weight of the text content, ranging from 200 to 900.
 * @enum {EnumTextWeight}
 */
export enum EnumTextWeight {
  Thin = 200,
  Light = 300,
  Regular = 400,
  Medium = 500,
  SemiBold = 600,
  Bold = 700,
  Bolder = 800,
  Black = 900,
}

/**
 * The API for the Text component.
 * @interface TextApi
 */
export interface TextApi {
  children: React.ReactNode | React.ReactNode[] | string;
  color?: string;
  element?: HTMLTextElement;
  extraClassnames?: string;
  extraStyles?: React.CSSProperties;
  italic?: boolean;
  ref?: React.Ref<HTMLTextElement>;
  size?: TextSize;
  uppercase?: boolean;
  weight?: EnumTextWeight;
}
