import { cn } from "@/src/utils/cn";
import * as React from "react";
import { CSSProperties, ForwardedRef, forwardRef, useEffect, useState } from "react";

type HeadingSizes = "xs" | "sm" | "md" | "lg" | "xl";
type HeadingElements = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingApi {
  children: React.ReactNode | React.ReactNode[] | string;
  el?: HeadingElements;
  extraClasses?: string;
  size?: HeadingSizes;
  styles?: CSSProperties;
}

const HEADING_STYLES = {
  element: cn(["relative", "font-heading", "leading-none", "text-inherit", "dark:text-inherit"]),
};

const HEADING_SIZES = {
  xs: cn(["left-[-1px]", "my-0", "text-[18px]", "font-bold", "tracking-wide", "uppercase"]),
  sm: cn(["left-[-1px]", "my-0", "text-[24px]", "font-bold", "tracking-tight"]),
  md: cn(["left-[-2px]", "my-0", "text-[32px]", "font-bold", "tracking-tight"]),
  lg: cn(["left-[-2px]", "my-0", "text-[48px]", "font-bold", "tracking-tight"]),
  xl: cn(["left-[-3px]", "my-0", "text-[60px]", "font-bold", "tracking-tight"]),
};

const Heading = forwardRef(function Heading({ ...props }: HeadingApi, ref: ForwardedRef<HTMLHeadingElement>) {
  const { el, extraClasses, size, styles } = props;

  const [htmlElem, setHtmlElem] = useState<HeadingElements>("h2");
  const [sizeStyles, setSizeStyles] = useState(HEADING_SIZES["md"]);

  const getSizeStyles = () => {
    switch (size) {
      case "xs":
        return HEADING_SIZES["xs"];
      case "sm":
        return HEADING_SIZES["sm"];
      case "md":
        return HEADING_SIZES["md"];
      case "lg":
        return HEADING_SIZES["lg"];
      case "xl":
        return HEADING_SIZES["xl"];
      default:
        return HEADING_SIZES["md"];
    }
  };

  useEffect(() => {
    setHtmlElem(el);
    setSizeStyles(getSizeStyles);
  }, [htmlElem, sizeStyles]);

  return (
    <>
      {React.createElement(htmlElem || "h2", {
        className: `${HEADING_STYLES["element"]} ${sizeStyles} ${extraClasses}`,
        style: { ...styles },
        ...props,
        ref,
      })}
    </>
  );
});

export { Heading, HeadingApi, HeadingSizes, HeadingElements };