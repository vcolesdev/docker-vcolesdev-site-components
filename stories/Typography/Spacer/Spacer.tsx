import { cn } from "@/src/utils/cn";
import { useEffect, useState } from "react";

/**
 * @type SpacerSizes
 */
export type SpacerSizes = "xs" | "sm" | "md" | "lg" | "xl" | "2x" | "3x" | "4x" | "5x";

/**
 * @interface SpacerApi
 */
export interface SpacerApi {
  hasDemoBorder?: boolean;
  hasDemoBackground?: boolean;
  size: SpacerSizes;
}

/**
 * @const classnames
 */
export const classnames = {
  root: cn(["block", "m-0", "h-0", "w-full"]),
  demo: {
    bg: cn(["bg-gray-100", "dark:bg-gray-800"]),
    border: cn(["border", "border-dashed", "border-gray-300", "dark:border-gray-700"]),
  },
  size: {
    xs: cn(["py-[8px]"]),
    sm: cn(["py-[16px]"]),
    md: cn(["py-[24px]"]),
    lg: cn(["py-[32px]"]),
    xl: cn(["py-[40px]"]),
    "2x": cn(["py-[48px]"]),
    "3x": cn(["py-[56px]"]),
    "4x": cn(["py-[64px]"]),
    "5x": cn(["py-[72px]"]),
  },
};

/**
 * @hook useSpacerApi
 * @param props
 */
export function useSpacerApi(props: SpacerApi) {
  const { hasDemoBorder, hasDemoBackground, size } = props;

  const [hasDemoBorderStyles, setHasDemoBorderStyles] = useState(false);
  const [hasDemoBgStyles, setHasDemoBgStyles] = useState(false);

  useEffect(() => {
    setHasDemoBorderStyles(hasDemoBorder); // true or false
    setHasDemoBgStyles(hasDemoBackground); // true or false
  }, [props]);

  const composedClasses = cn([
    classnames.root,
    classnames.size[size],
    hasDemoBorderStyles ? classnames.demo.border : "",
    hasDemoBgStyles ? classnames.demo.bg : "",
  ]);

  return {
    actions: {
      setHasDemoBgStyles,
      setHasDemoBorderStyles,
    },
    state: {
      hasDemoBorderStyles,
      hasDemoBgStyles,
    },
    composedClasses,
  };
}

/**
 * Spacer Component
 * @param props
 */
export function Spacer(props: SpacerApi) {
  const { composedClasses } = useSpacerApi(props);

  return <div className={composedClasses} />;
}
