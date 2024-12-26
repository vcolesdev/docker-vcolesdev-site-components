import { TablerIconName } from "@/stories/TablerIcon/TablerIcon";

/**
 * @type ListItemsSize
 */
export type ListItemsSize = "sm" | "md" | "lg";

/**
 * @type ListItemsElement
 */
export type ListItemsElement = "ol" | "ul";

/**
 * @interface ListItemsApi
 */
export interface ListItemsApi {
  el?: ListItemsElement;
  hasCustomIcon?: boolean;
  iconName?: TablerIconName;
  id?: string;
  isUnstyled?: boolean;
  items: string | string[];
  size?: ListItemsSize;
}

/**
 * @interface SingleItemProps
 */
export interface SingleItemProps {
  item: string;
}

/**
 * @interface ItemWithIconProps
 */
export interface ItemWithIconProps {
  item: string;
  icon?: ListItemsApi["iconName"];
}

/**
 * @interface ItemsProps
 */
export interface ItemsProps {
  hasCustomIcon?: boolean;
  iconName?: ListItemsApi["iconName"];
  items: ListItemsApi["items"];
}
