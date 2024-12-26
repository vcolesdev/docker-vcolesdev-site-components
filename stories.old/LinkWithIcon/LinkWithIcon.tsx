import { cn } from "@/src/utils/cn";
import * as React from "react";
import { CSSProperties, ForwardedRef, forwardRef, useEffect, useState } from "react";

import { TablerIcon, TablerIconName } from "../TablerIcon/TablerIcon";

type LinkWithIconEl = "a" | "button" | "div";

interface LinkWithIconApi {
  element?: LinkWithIconEl;
  extraClasses?: string;
  hasIcon?: boolean;
  href: string;
  iconName?: TablerIconName;
  iconSize?: number;
  linkText: string;
  styles?: React.CSSProperties;
}

const linkStyles = {
  element: cn([
    "group/project-link",
    "relative",
    "inline-flex",
    "items-center",
    "font-body",
    "font-semibold",
    "text-body-color",
    "transition-all",
    "delay-75",
    "duration-300",
    "ease-in-out-cubic",
    "hover:text-melon",
    "dark:text-freshwater-blue",
    "dark:hover:text-rose",
  ]),
  iconContainer: cn([
    "group/project-link",
    "relative",
    "top-0",
    "translate-x-0",
    "transition-all",
    "duration-300",
    "delay-75",
    "ease-in-out-cubic",
    "group-hover/project-link:translate-x-[4px]",
  ]),
};

const LinkWithIcon = forwardRef(function LinkWithIcon(
  { ...props }: LinkWithIconApi,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { element, extraClasses, hasIcon, href, iconName, iconSize, linkText, styles } = props;

  const [customStyles, setCustomStyles] = useState<CSSProperties>({});
  const [html, setHtml] = useState<LinkWithIconEl | "a">("a");
  const [linkExtraClasses, setLinkExtraClasses] = useState<string | null>(null);
  const [linkIconName, setLinkIconName] = useState<TablerIconName | null>(null);
  const [linkIconSize, setLinkIconSize] = useState<number | 18>(18);

  useEffect(() => {
    setCustomStyles(styles);
    setHtml(element);
    setLinkExtraClasses(extraClasses);
    setLinkIconName(iconName);
    setLinkIconSize(iconSize);
  }, [customStyles, linkExtraClasses, html, linkIconName, linkIconSize]);

  const content = (
    <>
      <span className="inline-block mr-1">{linkText}</span>
      {hasIcon && (
        <div className={linkStyles.iconContainer}>
          <TablerIcon currentIcon={linkIconName} size={linkIconSize} />
        </div>
      )}
    </>
  );

  return React.createElement(
    html,
    {
      className: `${linkStyles.element} ${linkExtraClasses}`,
      href: href,
      style: customStyles,
    },
    content
  );
});

export { LinkWithIcon };
