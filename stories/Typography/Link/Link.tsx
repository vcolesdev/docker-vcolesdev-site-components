import { cn } from "@/src/utils/cn";
import { TablerIcon, TablerIconName } from "@/stories/Components/TablerIcon/TablerIcon";
import * as React from "react";
import { useEffect } from "react";

/**
 * @type LinkIconPos
 */
export type LinkIconPos = "before" | "after";

/**
 * @interface LinkApi
 */
export interface LinkApi {
  children: React.ReactNode | React.ReactNode[] | string;
  hasBorder?: boolean;
  hasIcon?: boolean;
  iconName?: TablerIconName;
  iconPos?: LinkIconPos;
  to?: string;
}

/**
 * @const classnames
 */
export const classnames = {
  base: cn(["group/list-item", "relative", "inline-flex"]),
  border: cn([
    "group/list-item",
    "absolute",
    "bottom-1",
    "left-0",
    "w-full",
    "h-[2px]",
    "bg-tree-bark",
    "translate-y-0",
    "transition",
    "duration-300",
    "delay-100",
    "ease-in-out-cubic",
    "dark:bg-white",
    "group-hover/list-item:translate-y-[-1.5px]",
    "group-hover/list-item:bg-melon",
    "group-hover/list-item:dark:bg-rose",
  ]),
  content: cn(["relative", "top-[-1px]"]),
  iconBefore: cn(["mr-1"]),
  iconAfter: cn(["ml-1"]),
  span: cn([
    "group/list-item",
    "relative",
    "flex",
    "items-center",
    "pb-2",
    "font-semibold",
    "font-heading",
    "text-[15px]",
    "text-tree-bark",
    "tracking-wide",
    "transition",
    "duration-300",
    "delay-100",
    "ease-in-out-cubic",
    "hover:text-melon",
    "dark:text-white",
    "dark:hover:text-rose",
  ]),
};

/**
 * Link Component
 * @constructor
 */
export function Link(props: LinkApi) {
  const { children, hasBorder, hasIcon, iconName, iconPos, to } = props;

  useEffect(() => {}, [props]);

  return (
    <a className={classnames.base} href={to || ""}>
      <div className={classnames.span}>
        {hasIcon && iconPos === "before" && (
          <span className={classnames.iconBefore}>
            <TablerIcon color="currentColor" currentIcon={iconName} size={16} stroke={3} />
          </span>
        )}
        <span className={classnames.content}>{children}</span>
        {hasIcon && iconPos === "after" && (
          <span className={classnames.iconAfter}>
            <TablerIcon color="currentColor" currentIcon={iconName} size={16} stroke={3} />
          </span>
        )}
      </div>
      {hasBorder && <div className={classnames.border} />}
    </a>
  );
}
