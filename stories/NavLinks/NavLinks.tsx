import { cn } from "@/src/utils/cn";
import { NavLink } from "@/stories/NavLink/NavLink";
import * as React from "react";
import { ForwardedRef, forwardRef, useEffect, useState } from "react";

interface NavLinksApi {
  hasSpan?: boolean;
  items: string[] | string;
}

const NAV_LINKS_STYLES = {
  element: cn(["flex"]),
};

const NavLinks = forwardRef(function NavLinks({ ...props }: NavLinksApi, ref: ForwardedRef<HTMLUListElement>) {
  const { hasSpan, items } = props;

  const [navLinks, setNavLinks] = useState<NavLinksApi["items"] | null>(null);

  useEffect(() => {
    setNavLinks(items || "NavLink");
  }, [navLinks]);

  function output() {
    if (!navLinks) return;
    // Check if navLinks is an array
    return Array.isArray(navLinks) ? (
      navLinks.map((item, index) => (
        <NavLink
          key={`item-${index}`}
          hasSpan={hasSpan}
          href={item}
          itemId={`navItem${item}`}
          itemLabel={`Nav Item ${item}`}
        >
          {item}
        </NavLink>
      ))
    ) : (
      <NavLink hasSpan={hasSpan} href={navLinks} itemId={`navItem${navLinks}`} itemLabel={`Nav Item ${navLinks}`}>
        {navLinks}
      </NavLink>
    );
  }

  const elements = output();

  return (
    <ul className={`nav-links ${NAV_LINKS_STYLES["element"]}`} ref={ref}>
      {elements}
    </ul>
  );
});

export { NavLinks, NavLinksApi };
