import * as React from "react";
import { ButtonProps } from "@/stories/Controls/Button/Button.api";
import { ForwardedRef } from "react";
import { HeadingApi } from "@/stories/Heading/Heading";
import { TextContentApi } from "@/stories/TextContent/TextContent";
import { TablerIconName } from "@/stories/TablerIcon/TablerIcon";

export interface SectionIntroApi {
  children: React.ReactNode | React.ReactNode[] | string;
  ctaText?: string;
  ctaVariant?: ButtonProps["variant"];
  eyebrowIconName?: TablerIconName;
  eyebrowIconPos?: "end" | "start" | null;
  eyebrowIconSize?: number;
  eyebrowText?: string;
  ref?: ForwardedRef<HTMLDivElement>;
  titleContent?: React.ReactNode | React.ReactNode[] | string;
  titleSize?: HeadingApi["size"];
  textSize?: TextContentApi["size"];
}

export interface SectionIntroHeaderApi {
  titleContent: React.ReactNode | React.ReactNode[] | string;
  titleSize?: HeadingApi["size"];
}

export interface SectionIntroContentApi {
  children: React.ReactNode | React.ReactNode[] | string;
  textSize?: TextContentApi["size"];
}

export interface SectionIntroCtaApi {
  ctaText: string;
  ctaVariant?: ButtonProps["variant"];
}

export interface SectionIntroProviderApi {
  children: React.ReactNode | React.ReactNode[] | string;
  ref: ForwardedRef<HTMLDivElement>;
}
