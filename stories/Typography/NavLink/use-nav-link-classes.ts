import { classnames } from "@/stories/Typography/NavLink/NavLink.classes";
import { cn } from "@/src/utils/cn";
import { useEffect } from "react";

/**
 * @hook useNavLinkClasses
 */
export function useNavLinkClasses() {
  const linkClasses = cn([classnames.anchor]);

  useEffect(() => {}, [linkClasses]);

  return { linkClasses };
}
