import { swatches } from "@/src/swatches";
import { cn } from "@/src/utils/cn";
import { TablerIcon } from "@/stories/Components/TablerIcon/TablerIcon";

/**
 * @interface SocialIconApi
 */
export interface SocialIconApi {}

/**
 * @const classnames
 */
export const classnames = {
  root: cn([
    "cursor-pointer",
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "px-3",
    "py-3",
    "rounded-[14px]",
    "text-tree-bark",
    "border-[2px]",
    "border-tree-bark",
    "transition",
    "transition-all",
    "ease-in-out-cubic",
    "duration-300",
    "dark:border-none",
    "dark:bg-charcoal-blue-light",
  ]),
};

/**
 * SocialIcon
 * @param props SocialIconApi
 */
export function SocialIcon(props: SocialIconApi) {
  return (
    <div className={classnames.root}>
      <TablerIcon color="currentColor" currentIcon="IconBrandGithub" size={32} stroke={1.5} />
    </div>
  );
}
