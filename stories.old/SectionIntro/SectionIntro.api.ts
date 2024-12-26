import * as React from "react";
import { ButtonProps } from "../Controls/Button/Button.api";
import { ForwardedRef } from "react";
import { HeadingApi } from "../Heading/Heading";
import { TextContentApi } from "../TextContent/TextContent";
import { TablerIconName } from "../TablerIcon/TablerIcon";

/**
 * SectionIntroApi is an interface that defines the shape of the SectionIntro component's props.
 * @interface SectionIntroApi
 */
export interface SectionIntroApi {
  // The elements that will be rendered inside the SectionIntro component.
  children: React.ReactNode | React.ReactNode[] | string;

  // The text content of the call-to-action button.
  ctaText?: string;

  // The variant of the call-to-action button.
  ctaVariant?: ButtonProps["variant"];

  // The name of the Tabler icon that will be rendered as the eyebrow icon. Ex: "IconActivity".
  eyebrowIconName?: TablerIconName;

  // The position of the eyebrow icon. Ex: "end".
  eyebrowIconPos?: "end" | "start" | null;

  // The size of the eyebrow icon. Ex: 64.
  eyebrowIconSize?: number;

  // The text content of the eyebrow element.
  eyebrowText?: string;

  // The ref that will be forwarded to the root element of the SectionIntro component.
  ref?: ForwardedRef<HTMLDivElement>;

  // The text content of the title element if present.
  titleContent?: React.ReactNode | React.ReactNode[] | string;

  // The size of the title element. Ex: "lg".
  titleSize?: HeadingApi["size"];

  // The size of the text content elements. Ex: "lg".
  textSize?: TextContentApi["size"];
}

/**
 * @interface SectionIntroHeaderApi
 */
export interface SectionIntroHeaderApi {
  titleContent: React.ReactNode | React.ReactNode[] | string;
  titleSize?: HeadingApi["size"];
}

/**
 * @interface SectionIntroContentApi
 */
export interface SectionIntroContentApi {
  children: React.ReactNode | React.ReactNode[] | string;
  textSize?: TextContentApi["size"];
}

/**
 * @interface SectionIntroCtaApi
 */
export interface SectionIntroCtaApi {
  ctaText: string;
  ctaVariant?: ButtonProps["variant"];
}

/**
 * @interface SectionIntroProviderApi
 */
export interface SectionIntroProviderApi {
  children: React.ReactNode | React.ReactNode[] | string;
  ref: ForwardedRef<HTMLDivElement>;
}
