import { CSSProperties, ForwardedRef } from "react";
import * as React from "react";

export type FancyCardCustomStyles = CSSProperties | {};
export type FancyCardExtraClasses = string | null;
export type FancyCardFooterContent = React.ReactNode | React.ReactNode[] | string | null;

export type FancyCardTitleText = string | null;

export interface FancyCardHeaderApi {
  title: string;
}

export interface FancyCardFooterApi {
  children: React.ReactNode | React.ReactNode[] | string;
}

export interface FancyCardProviderApi {
  children: React.ReactNode | React.ReactNode[] | string;
  extraClasses?: FancyCardExtraClasses;
  id?: string;
  ref?: ForwardedRef<HTMLDivElement>;
  styles?: FancyCardCustomStyles;
}

export interface FancyCardContentApi {
  children: React.ReactNode | React.ReactNode[] | string;
}

export interface FancyCardApi {
  children: React.ReactNode | React.ReactNode[] | string;
  extraClasses?: FancyCardExtraClasses;
  footerContent?: FancyCardFooterContent;
  id?: string;
  styles?: FancyCardCustomStyles;
  titleText?: FancyCardTitleText;
}
