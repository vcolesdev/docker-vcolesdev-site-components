import * as React from "react";

import { NavLink } from "../NavLink/NavLink";
import { NavLinksApi } from "./NavLinks";

/**
 * @hook useNavLinks
 * @param navLinks - The navLinks array
 * @param hasSpan - Whether the navLinks have a span
 */
export function useNavLinks(navLinks: NavLinksApi["items"], hasSpan: NavLinksApi["hasSpan"]) {
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
