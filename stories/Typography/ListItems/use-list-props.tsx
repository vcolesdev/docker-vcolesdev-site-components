import type { ListItemsApi } from "@/stories/Typography/ListItems/ListItems.api";
import { Items } from "@/stories/Typography/ListItems/ListItems.components";
import { useListItemsCn } from "@/stories/Typography/ListItems/use-list-items-cn";
import * as React from "react";

/**
 * @hook useListProps
 * @param props
 */
export function useListProps(props: ListItemsApi) {
  const { hasCustomIcon, iconName, items } = props;

  const classnames = useListItemsCn(props);

  const children = <Items items={items} hasCustomIcon={hasCustomIcon} iconName={iconName} />;
  return {
    children: children,
    className: classnames,
    id: props.id,
  };
}
