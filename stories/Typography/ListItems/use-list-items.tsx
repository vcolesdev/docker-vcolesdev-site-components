import type { ListItemsApi } from "@/stories/Typography/ListItems/ListItems.api";
import { useListProps } from "@/stories/Typography/ListItems/use-list-props";
import { useEffect } from "react";
import * as React from "react";

/**
 * @hook useListItemsApi
 * @param props
 */
export function useListItemsApi(props: ListItemsApi) {
  const { el } = props;

  useEffect(() => {}, [props]);

  const listProps = useListProps(props);
  const listElement = React.createElement(el || "ul", listProps);
  return {
    listElement,
  };
}
