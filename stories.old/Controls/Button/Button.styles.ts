import { cn } from "@/src/utils/cn";

/**
 * Root button styles for the element.
 */
const root = cn([
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
 * Backdrop styles for the button.
 */
const backdrop = cn([
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
 * The content wrapper for the button.
 */
const contentWrapper = cn(["inline-flex", "z-10", "relative"]);

/**
 * Styles representing the different sizes of the button.
 */
const small = cn(["h-[40px]", "px-4", "text-sm", "rounded-md", "tracking-tight"]);
const medium = cn(["h-[48px]", "px-5", "text-base", "rounded-md", "tracking-tight"]);
const large = cn(["h-[54px]", "px-6", "text-[18px]", "rounded-md", "tracking-tight"]);
const xlarge = cn(["h-[60px]", "px-7", "text-[20px]", "rounded-md", "tracking-tight"]);

/**
 * Default button styles.
 */
const defaultClasses = cn(["bg-slate-200", "dark:text-slate-800"]);

/**
 * Primary button styles
 */
const primary = cn([
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

/**
 * Secondary button styles
 */
const secondary = cn([
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

/**
 * Ghost button styles
 */
const ghost = cn([
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

/**
 * Outlined button styles
 */
const outlined = cn([
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

/**
 * Button classes for the different sizes and themes.
 */
export const ButtonClasses = {
  root: root,
  backdrop: backdrop,
  contentWrapper: contentWrapper,
  sizes: {
    sm: small,
    md: medium,
    lg: large,
    xl: xlarge,
  },
  theme: {
    default: defaultClasses,
    primary: primary,
    secondary: secondary,
    ghost: ghost,
    outlined: outlined,
  },
};
