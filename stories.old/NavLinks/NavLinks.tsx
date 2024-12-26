import { cn } from "@/src/utils/cn";
import * as React from "react";
import { ForwardedRef, forwardRef, useEffect, useState } from "react";

import { useNavLinks } from "./useNavLinks";

interface NavLinksApi {
  hasSpan?: boolean;
  items: string[] | string;
}

const styles = {
  element: cn([
    "block",
    "flex",
    "flex-col",
    "max-w-[150px]",
    "w-full",
    "ps-2",
    "md:flex-row",
    "md:max-w-none",
    "md:ps-0",
  ]),
};

/**
 * @const NavLinks
 * @param {NavLinksApi} props - The props for the NavLinks component
 */
const NavLinks = forwardRef(function NavLinks({ ...props }: NavLinksApi, ref: ForwardedRef<HTMLUListElement>) {
  const { hasSpan, items } = props;

  const [navLinks, setNavLinks] = useState<NavLinksApi["items"] | null>(null);

  const elements = useNavLinks(navLinks, hasSpan);

  useEffect(() => {
    setNavLinks(items || "NavLink");
  }, [navLinks]);

  return (
    <ul className={styles.element} ref={ref}>
      {elements}
    </ul>
  );
});

export { NavLinks, NavLinksApi };
