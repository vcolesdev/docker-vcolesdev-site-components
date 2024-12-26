import { cn } from "@/src/utils/cn";

/**
 * Classnames for the Eyebrow and EyebrowWithIcon components.
 * @constant classnames
 */
export const classnames = {
  base: cn([
    "flex",
    "items-center",
    "space-x-1",
    "font-heading",
    "text-md",
    "uppercase",
    "leading-none",
    "tracking-wider",
    "font-semibold",
    "text-tree-bark",
    "dark:text-baby-blue",
  ]),
  content: cn(["relative"]),
  icon: cn(["translate-y-[1px]"]),
};
