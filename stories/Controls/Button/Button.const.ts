import { cn } from "@/src/utils/cn";

/**
 * Button Root
 */
export const BUTTON_ROOT = cn([
  "group/button",
  "relative",
  "flex",
  "justify-center",
  "align-center",
  "items-center",
  "my-0",
  "py-0",
  "font-sans",
  "font-medium",
  "shadow-sm",
  "shadow-theme-light",
  "overflow-hidden",
  "translate-y-0",
  "transition-all",
  "duration-300",
  "ease-in-out-cubic",
  "hover:shadow-lg",
  "hover:shadow-theme-light",
  "hover:transform",
  "hover:translate-y-[-1px]",
  "active:translate-y-0",
  "active:shadow-sm",
  "dark:shadow-theme-dark",
  "dark:hover:shadow-theme-dark",
]);

/**
 * Button Backdrop Root
 */
export const BUTTON_BACKDROP_ROOT = cn([
  "group/button",
  "block",
  "absolute",
  "inset-0",
  "w-full",
  "h-full",
  "left-0",
  "z-0",
  "translate-y-full",
  "transition",
  "transition-all",
  "delay-75",
  "ease-in-out-quart",
  "group-hover/duration-400",
  "group-hover/button:translate-y-0",
]);

/**
 * Button Content Wrapper
 */
export const BUTTON_CONTENT_WRAPPER = cn(["inline-flex", "z-10", "relative"]);

/**
 * Button Sizes
 */
export const BUTTON_SIZE_SM = cn(["h-[36px]", "px-3", "rounded-[6px]", "text-sm"]);
export const BUTTON_SIZE_MD = cn(["h-[48px]", "px-4", "rounded-[6px]", "text-base"]);
export const BUTTON_SIZE_LG = cn(["h-[52px]", "px-4", "rounded-[8px]", "text-[18px]"]);
export const BUTTON_SIZE_XL = cn(["h-[60px]", "px-5", "rounded-[8px]", "text-[20px]"]);

/**
 * Button Background Gradients
 */
export const BUTTON_BG_GRADIENT_PRIMARY = cn([
  "bg-gradient-to-b",
  "from-gradient-primary-start",
  "to-gradient-primary-end",
  "dark:from-gradient-primary--dark-start",
  "dark:to-gradient-primary--dark-end",
]);

export const BUTTON_BG_GRADIENT_SECONDARY = cn([""]);
export const BUTTON_BG_GRADIENT_GHOST = cn([""]);
export const BUTTON_BG_GRADIENT_OUTLINED = cn([""]);

/**
 * Button Themes
 */
export const BUTTON_THEME_DEFAULT = cn(["bg-slate-200", "dark:text-slate-800"]);

export const BUTTON_THEME_PRIMARY = cn([
  "border",
  "border-button",
  "border-melon",
  "text-white",
  "bg-melon",
  "hover:bg-rose",
  "dark:bg-rose",
  "dark:border-rose",
  "dark:hover:border-rose-dark",
  "dark:hover:bg-rose-dark",
]);

export const BUTTON_THEME_SECONDARY = cn([
  "border",
  "border-button",
  "border-tree-bark",
  "text-white",
  "bg-tree-bark",
  "dark:text-slate-700",
  "dark:border-baby-blue",
  "dark:bg-baby-blue",
  "dark:hover:border-baby-blue",
]);

export const BUTTON_THEME_GHOST = cn([
  "border",
  "border-button",
  "border-transparent",
  "text-melon",
  "bg-[rgb(255,244,241)]",
  "hover:border-melon",
  "dark:text-slate-300",
  "dark:bg-slate-800",
  "dark:hover:border-baby-blue",
]);

export const BUTTON_THEME_OUTLINED = cn([
  "text-melon",
  "border",
  "border-button",
  "bg-transparent",
  "border-melon",
  "hover:text-white",
  "hover:bg-melon",
  "dark:text-rose",
  "dark:border-rose",
  "dark:hover:bg-rose",
  "dark:hover:border-rose",
]);
