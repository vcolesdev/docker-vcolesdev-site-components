import type { ListItemsApi } from "@/stories/Typography/ListItems/ListItems.api";
import { useBulletTypeCn } from "@/stories/Typography/ListItems/use-bullet-type-cn";
import { classnames } from "@/stories/Typography/ListItems/ListItems.classes";
import { cn } from "@/src/utils/cn";

/**
 * @hook useListItemsCn
 * @param props
 */
export function useListItemsCn(props: ListItemsApi) {
  const { el, hasCustomIcon, isUnstyled, size } = props;
  const bulletTypeCn = useBulletTypeCn(el, classnames);
  return cn([
    classnames.list,
    size && classnames.sizes[size],
    hasCustomIcon ? classnames.customIcon : bulletTypeCn,
    isUnstyled && classnames.unstyled,
  ]);
}
