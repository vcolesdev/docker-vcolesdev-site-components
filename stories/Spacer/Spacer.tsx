import { useEffect, useState } from "react";

import { cn } from "@/src/utils/cn";

type SpacerSizes = "xs" | "sm" | "md" | "lg" | "xl" | "2x" | "3x" | "4x" | "5x";

interface SpacerApi {
  hasDemoBorder?: boolean;
  hasDemoBackground?: boolean;
  size: SpacerSizes;
}

const SPACER_STYLES = {
  element: cn(["block", "m-0", "h-0", "w-full"]),
  borderStyles: cn(["border", "border-dashed", "border-gray-300", "dark:border-gray-700"]),
  bgStyles: cn(["bg-gray-100", "dark:bg-gray-800"]),
};

const SPACER_SIZES = {
  xs: cn(["py-[8px]"]),
  sm: cn(["py-[16px]"]),
  md: cn(["py-[24px]"]),
  lg: cn(["py-[32px]"]),
  xl: cn(["py-[40px]"]),
  "2x": cn(["py-[48px]"]),
  "3x": cn(["py-[56px]"]),
  "4x": cn(["py-[64px]"]),
  "5x": cn(["py-[72px]"]),
};

function Spacer(props: SpacerApi) {
  const { hasDemoBorder, hasDemoBackground, size } = props;

  const [sizeStyles, setSizeStyles] = useState(SPACER_SIZES["md"]);
  const [hasDemoBorderStyles, setHasDemoBorderStyles] = useState(false);
  const [hasDemoBgStyles, setHasDemoBgStyles] = useState(false);

  const getSizeStyles = () => {
    switch (size) {
      case "xs":
        return SPACER_SIZES["xs"];
      case "sm":
        return SPACER_SIZES["sm"];
      case "md":
        return SPACER_SIZES["md"];
      case "lg":
        return SPACER_SIZES["lg"];
      case "xl":
        return SPACER_SIZES["xl"];
      case "2x":
        return SPACER_SIZES["2x"];
      case "3x":
        return SPACER_SIZES["3x"];
      case "4x":
        return SPACER_SIZES["4x"];
      case "5x":
        return SPACER_SIZES["5x"];
      default:
        return SPACER_SIZES["md"];
    }
  };

  useEffect(() => {
    setSizeStyles(getSizeStyles);
    setHasDemoBorderStyles(hasDemoBorder); // true or false
    setHasDemoBgStyles(hasDemoBackground); // true or false
  }, [size, hasDemoBorder, hasDemoBackground]);

  return (
    <div
      className={`${SPACER_STYLES["element"]} ${sizeStyles} ${hasDemoBorderStyles ? SPACER_STYLES["borderStyles"] : ""} ${hasDemoBgStyles ? SPACER_STYLES["bgStyles"] : ""}`}
    />
  );
}

export { Spacer, SpacerApi };
