import { cn } from "@/src/utils/cn";

/**
 * @const styles
 */
const styles = {
  element: cn([
    "block",
    "w-full",
    "border-[1.5px]",
    "border-transparent",
    "bg-light--elevated",
    "px-8",
    "py-10",
    "rounded-xl",
    "transition",
    "ease-in-out-cubic",
    "delay-75",
    "duration-300",
    "hover:border-[#e5b8b0]",
    //"hover:shadow-xl",
    //"hover:shadow-theme-light",
    "dark:bg-dark--elevated",
    //"dark:hover:shadow-theme-dark",
    "dark:hover:border-baby-blue",
  ]),
  contentWrapper: cn([]),
  divider: cn(["h-[1px]", "w-full", "bg-stone-800/20", "dark:bg-slate-400/20", "my-4"]),
  heading: cn(["dark:text-white"]),
  projectLink: cn([
    "ms-3",
    "inline-block",
    "text-melon",
    "font-semibold",
    "font-body",
    "border-b-[1.5px]",
    "border-melon",
    "transition-all",
    "ease-in-out-cubic",
    "delay-75",
    "duration-300",
    "hover:text-tree-bark",
    "hover:border-tree-bark",
    "dark:text-white",
    "dark:border-white",
    "dark:hover:text-rose",
    "dark:hover:border-rose",
  ]),
  subtitle: cn(["font-semibold", "font-body", "uppercase", "text-tree-bark", "dark:text-baby-blue"]),
};

export { styles };
