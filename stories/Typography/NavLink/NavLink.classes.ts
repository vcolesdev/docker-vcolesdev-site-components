import { cn } from "@/src/utils/cn";

/**
 * Classnames for NavLink component.
 * @const classnames
 */
export const classnames = {
  anchor: cn([
    "flex",
    "items-center",
    "font-body",
    "font-semibold",
    "text-md",
    "transition",
    "duration-300",
    "ease-in-out-cubic",
    "hover:text-melon",
    "dark:hover:text-tropical-indigo",
  ]),
  base: cn([
    "group",
    "flex",
    "list-none",
    "mb-3",
    "transition",
    "duration-300",
    "ease-in-out-cubic",
    "md:flex",
    "md:items-center",
    "md:justify-center",
    "md:mb-0",
    "md:mx-3",
    "lg:mx4",
    "xl:mx-5",
  ]),
  icon: cn(["relative", "mr-2"]),
  span: cn(["inline-block", "relative"]),
  states: {
    inactive: cn(["text-tree-bark", "dark:text-slate-200", "hover:text-melon", "dark:hover:text-tropical-indigo"]),
    active: cn(["text-melon", "dark:text-tropical-indigo"]),
  },
};
