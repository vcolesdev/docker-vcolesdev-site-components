import { cn } from "@/src/utils/cn";
import { ForwardedRef, forwardRef } from "react";

interface StyledLinkApi {
  linkText: string;
  link: string;
}

const linkStyles = {
  element: cn([
    "group/styled-link",
    "inline-block",
    "border-b-[1.5px]",
    "border-melon",
    "text-melon",
    "transition-all",
    "ease-in-out-cubic",
    "delay-75",
    "duration-300",
    "hover:text-tree-bark",
    "hover:border-tree-bark",
    "dark:text-white",
    "dark:border-white",
    "dark:hover:text-rose",
    "dark:hover:border-rose",
  ]),
  text: cn(["group/styled-link", "font-semibold", "font-body"]),
};

const StyledLink = forwardRef(function StyledLink(
  { link, linkText, ...props }: StyledLinkApi,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  return (
    <a className={linkStyles.element} href={link || "/"} ref={ref}>
      <span className={linkStyles.text}>{linkText || "Link Text"}</span>
    </a>
  );
});

export { StyledLink, StyledLinkApi };
