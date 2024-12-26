import { ListItemsApi } from "@/stories/Typography/ListItems/ListItems.api";
import { classnames } from "@/stories/Typography/ListItems/ListItems.classes";

/**
 * Classnames for the ListItems component, determined by the element type.
 * @hook useBulletTypeCn
 * @param el
 * @param cn
 */
export function useBulletTypeCn(el: ListItemsApi["el"], cn: typeof classnames) {
  switch (el) {
    case "ol":
      return cn.ordered;
    case "ul":
      return cn.unordered;
    default:
      return "";
  }
}
