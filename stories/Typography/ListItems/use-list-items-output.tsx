import { ListItemsApi } from "@/stories/Typography/ListItems/ListItems.api";
import { ItemWithIcon, SingleItem } from "@/stories/Typography/ListItems/ListItems.components";
import * as React from "react";

/**
 * @hook useListItemsOutput
 */
export function useListItemsOutput(props: ListItemsApi) {
  const { hasCustomIcon, iconName, items } = props;

  return Array.isArray(items) ? (
    items.map((item, index) =>
      hasCustomIcon ? <ItemWithIcon key={`item-${index}`} item={item} icon={iconName} /> : <SingleItem item={item} />
    )
  ) : (
    <SingleItem item={items} />
  );
}
