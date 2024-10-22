import { cn } from "@/src/utils/cn";
import * as React from "react";
import { ForwardedRef, forwardRef, useEffect, useState } from "react";

interface NavLinkApi {
  children: React.ReactNode | React.ReactNode[] | string;
  hasSpan?: boolean;
  href: string;
  isActiveLink?: boolean;
  itemId?: string;
  itemLabel?: string;
  linkId?: string;
}

const NAV_ITEM_STYLES = {
  element: cn([
    "group/nav-link",
    "flex",
    "items-center",
    "justify-center",
    "list-none",
    "mx-3",
    "lg:mx4",
    "xl:mx-5",
    "transition",
    "duration-300",
    "ease-in-out-cubic",
  ]),
};

const NAV_ITEM_SPAN_STYLES = {
  element: cn(["block"]),
};

const NAV_LINK_STYLES = {
  element: cn(["block", "font-body", "font-semibold", "transition", "delay-50", "duration-300", "ease-in-out-cubic"]),
  inactive: cn(["text-body-color", "dark:text-body-color--dark"]),
  active: cn(["text-melon", "dark:text-rose"]),
};

const NavLink = forwardRef(function NavLink({ ...props }: NavLinkApi, ref: ForwardedRef<HTMLAnchorElement>) {
  const { children, hasSpan, href, isActiveLink, itemId, itemLabel, linkId } = props;

  const [hasSpanEl, setHasSpanEl] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const Link = () => (
    <a
      className={`nav-link ${NAV_LINK_STYLES["element"]} ${isMouseOver ? NAV_LINK_STYLES["active"] : NAV_LINK_STYLES["inactive"]}`}
      href={href}
      id={linkId}
    >
      {children}
    </a>
  );

  const output = hasSpanEl ? (
    <span className={`nav-item-span ${NAV_ITEM_SPAN_STYLES["element"]}`}>
      <Link />
    </span>
  ) : (
    <Link />
  );

  useEffect(() => {
    setHasSpanEl(hasSpan);
    setIsActive(isActiveLink);
  }, [hasSpanEl, isActive, isMouseOver]);

  return (
    <li
      aria-label={itemLabel}
      className={`nav-item ${NAV_ITEM_STYLES["element"]}`}
      id={itemId}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      style={{
        transform: isMouseOver ? "scale(1.1)" : "scale(1)",
      }}
    >
      {output}
    </li>
  );
});

export { NavLink, NavLinkApi };
