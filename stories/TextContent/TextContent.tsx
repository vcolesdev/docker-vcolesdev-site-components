import * as React from "react";
import { CSSProperties, ForwardedRef, forwardRef, useEffect, useState } from "react";

import { cn } from "@/src/utils/cn";

type TextElement = HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement;
type TextHtmlElement = "p" | "span" | "div";

interface TextContentApi {
  children: React.ReactNode | React.ReactNode[] | string;
  element?: "p" | "span" | "div";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  styles?: React.CSSProperties;
}

const TEXT_STYLES = {
  element: cn(["font-body", "text-inherit", "dark:text-inherit"]),
};

const TEXT_SIZES = {
  sm: cn(["text-sm", "font-medium", "tracking-wide", "leading-normal"]),
  md: cn(["text-base", "tracking-normal", "leading-relaxed"]),
  lg: cn(["text-base", "tracking-normal", "leading-relaxed", "md:text-lg"]),
  xl: cn(["text-base", "tracking-tight", "leading-relaxed", "md:text-lg", "lg:text-xl"]),
  "2xl": cn(["text-lg", "tracking-tight", "lg:text-xl", "xl:text-[24px]", "xl:leading-10"]),
};

const TextContent = forwardRef(function TextContent({ ...props }: TextContentApi, ref: ForwardedRef<TextElement>) {
  const { element, size, styles } = props;

  const [htmlElem, setHtmlElem] = useState<TextHtmlElement>("p");
  const [sizeStyles, setSizeStyles] = useState(TEXT_SIZES["md"]);
  const [customStyles, setCustomStyles] = useState<CSSProperties>({});

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return TEXT_SIZES["sm"];
      case "md":
        return TEXT_SIZES["md"];
      case "lg":
        return TEXT_SIZES["lg"];
      case "xl":
        return TEXT_SIZES["xl"];
      case "2xl":
        return TEXT_SIZES["2xl"];
      default:
        return TEXT_SIZES["md"];
    }
  };

  useEffect(() => {
    setHtmlElem(element);
    setSizeStyles(getSizeStyles);
    setCustomStyles(styles);
  }, [customStyles, htmlElem, sizeStyles]);

  return (
    <>
      {React.createElement(htmlElem || "p", {
        className: `${TEXT_STYLES["element"]} ${sizeStyles}`,
        style: { ...customStyles },
        ...props,
        ref,
      })}
    </>
  );
});

export { TextContent, TextContentApi };
