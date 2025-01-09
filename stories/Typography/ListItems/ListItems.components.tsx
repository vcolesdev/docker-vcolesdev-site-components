import { TablerIcon } from "@/stories/Components/TablerIcon/TablerIcon";
import type { ItemWithIconProps, ItemsProps, SingleItemProps } from "@/stories/Typography/ListItems/ListItems.api";
import { classnames } from "@/stories/Typography/ListItems/ListItems.classes";
import {
  DEFAULT_ICON_COLOR,
  DEFAULT_ICON_NAME,
  DEFAULT_ICON_SIZE,
  DEFAULT_ICON_STROKE,
} from "@/stories/Typography/ListItems/ListItems.const";
import { useListItemsOutput } from "@/stories/Typography/ListItems/use-list-items-output";
import * as React from "react";

/**
 * SingleItem Component
 * @param item
 */
export function SingleItem({ item }: SingleItemProps) {
  return (
    <li className={classnames.items}>
      <span>{item}</span>
    </li>
  );
}

/**
 * ItemWithIcon Component
 * @param item
 * @param icon
 */
export function ItemWithIcon({ item, icon }: ItemWithIconProps) {
  return (
    <li className={classnames.customItems}>
      <div className={classnames.itemWrapper}>
        <span className={classnames.itemIcon}>
          <TablerIcon
            color={DEFAULT_ICON_COLOR}
            currentIcon={icon || DEFAULT_ICON_NAME}
            size={DEFAULT_ICON_SIZE}
            stroke={DEFAULT_ICON_STROKE}
          />
        </span>
        <span>{item}</span>
      </div>
    </li>
  );
}

/**
 * Items Component
 * @param props
 */
export function Items(props: ItemsProps) {
  return useListItemsOutput(props);
}
