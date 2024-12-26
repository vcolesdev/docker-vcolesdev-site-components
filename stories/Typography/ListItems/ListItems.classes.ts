import { cn } from "@/src/utils/cn";

/**
 * Classnames for the ListItems component
 * @const classnames
 */
export const classnames = {
  customIcon: cn(["list-none"]),
  customItems: cn([]),
  itemIcon: cn(["text-melon", "dark:text-rose-400"]),
  items: cn([]),
  itemWrapper: cn(["flex", "flex-row", "space-x-2", "items-center"]),
  list: cn([
    "flex",
    "flex-col",
    "space-y-3",
    "my-3",
    "p-0",
    "font-body",
    "font-medium",
    "text-tree-bark",
    "dark:text-tropical-indigo",
  ]),
  sizes: {
    sm: cn(["text-sm"]),
    md: cn(["text-base"]),
    lg: cn(["text-lg"]),
  },
  ordered: cn(["list-decimal", "ps-4"]),
  unordered: cn(["list-disc", "ps-4"]),
  unstyled: cn(["list-none"]),
};
