import { cn } from "@/src/utils/cn";
import { TablerIcon, TablerIconName } from "@/stories/Components/TablerIcon/TablerIcon";
import { Heading } from "@/stories/Typography/Heading/Heading";
import { desc } from "framer-motion/dist/m";
import * as React from "react";

export const exampleTextContent = `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.`;

/**
 * @interface WidgetApi
 */
export interface WidgetApi {
  children?: React.ReactNode | string;
  currentIcon?: TablerIconName;
  description?: string;
  hasTitleIcon?: boolean;
  id?: string;
  hasExampleTextContent?: boolean;
  title?: string;
}

/**
 * @const classnames
 */
export const classnames = {
  root: cn([""]),
  contentWrapper: cn(["grid", "grid-cols-1", "gap-3"]),
  description: cn(["rounded-md", "mb-4", "p-4", "bg-[hsla(11,77%,92%,0.7)]", "dark:bg-[hsla(225,25%,12%,1)]"]),
  descriptionText: cn(["text-md", "font-serif"]),
  exampleTextContent: cn(["text-body-color", "dark:text-body-color-dark", "font-semibold", "text-[15px]"]),
  content: cn(["text-body-color", "dark:text-body-color-dark", "font-semibold", "text-[15px]"]),
  heading: cn(["flex", "items-center", "space-x-2", "mb-4"]),
};

/**
 * Widget
 * @param props WidgetApi
 */
export function Widget(props: WidgetApi) {
  return (
    <div className={classnames.root} id={props.id}>
      <Heading extraClassnames={classnames.heading} size="xs" level={4}>
        {props.hasTitleIcon && (
          <TablerIcon color="currentColor" currentIcon={props.currentIcon || "IconLayoutSidebar"} size={24} />
        )}
        <span>{props.title || "Example Widget"}</span>
      </Heading>
      <div className={classnames.contentWrapper}>
        {props.description && (
          <div className={classnames.description}>
            <p className={classnames.descriptionText}>{props.description}</p>
          </div>
        )}
        {props.hasExampleTextContent && <p className={classnames.exampleTextContent}>{exampleTextContent}</p>}
        {props.children && <div className={classnames.content}>{props.children}</div>}
      </div>
    </div>
  );
}
