import { cn } from "@/src/utils/cn";

// Base
export const TEXT_BASE_CN = cn(["font-body", "text-tree-bark", "dark:text-baby-blue"]);

// Sizes
export const TEXT_SIZE_SM_CN = cn(["text-sm", "font-semibold", "leading-normal"]);
export const TEXT_SIZE_MD_CN = cn(["text-base", "leading-relaxed"]);
export const TEXT_SIZE_LG_CN = cn(["text-lg"]);
export const TEXT_SIZE_XL_CN = cn(["text-xl", "font-normal", "leading-relaxed"]);
export const TEXT_SIZE_2XL_CN = cn(["text-2xl", "font-normal", "leading-relaxed", "tracking-tight"]);

/**
 * Classnames for the Text component.
 */
export const classNames = {
  base: TEXT_BASE_CN,
  sizes: {
    sm: TEXT_SIZE_SM_CN,
    md: TEXT_SIZE_MD_CN,
    lg: TEXT_SIZE_LG_CN,
    xl: TEXT_SIZE_XL_CN,
    "2xl": TEXT_SIZE_2XL_CN,
  },
};
