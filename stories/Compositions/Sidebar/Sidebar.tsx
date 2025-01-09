import { cn } from "@/src/utils/cn";
import { TablerIcon } from "@/stories/Components/TablerIcon/TablerIcon";
import { Heading } from "@/stories/Typography/Heading/Heading";
import * as React from "react";

/**
 * @interface SidebarApi
 */
export interface SidebarApi {
  children?: React.ReactNode | string;
  id?: string;
  title?: string;
}

/**
 * @const classnames
 */
export const classnames = {
  root: cn(["w-full", "max-w-sm", "bg-light-elevated", "dark:bg-dark-elevated", "p-8", "rounded-md"]),
  heading: cn(["flex", "items-center", "space-x-2", "mb-8"]),
  text: cn(["inline-block"]),
};

/**
 * Sidebar
 * @param props SidebarApi
 */
export function Sidebar(props: SidebarApi) {
  return (
    <aside className={classnames.root} id={props.id}>
      <Heading extraClassnames={classnames.heading} size="sm" level={3}>
        <TablerIcon color="currentColor" currentIcon="IconLayoutSidebar" size={30} />
        <span className={classnames.text}>{props.title || "Default Sidebar"}</span>
      </Heading>
      {props.children || "No Sidebar Content"}
    </aside>
  );
}
