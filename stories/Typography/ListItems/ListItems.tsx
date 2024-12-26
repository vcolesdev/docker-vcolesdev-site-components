import type { ListItemsApi } from "@/stories/Typography/ListItems/ListItems.api";
import { useListItemsApi } from "@/stories/Typography/ListItems/use-list-items";
import * as React from "react";

/**
 * ListItems Component
 * @param props
 */
export function ListItems(props: ListItemsApi) {
  const { listElement } = useListItemsApi(props);
  return <div>{listElement}</div>;
}
