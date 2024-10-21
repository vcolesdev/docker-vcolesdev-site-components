import { cn } from "@/src/utils/cn";
import { TablerIcon, TablerIconName } from "@/stories/TablerIcon/TablerIcon";
import * as React from "react";
import { CSSProperties, ForwardedRef, forwardRef, useEffect, useState } from "react";

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

const LINK_WITH_ICON_STYLES = {
  element: cn([
    "group/project-link",
    "relative",
    "inline-flex",
    "items-center",
    "font-body",
    "font-semibold",
    "text-body-color",
    "transition",
    "duration-200",
    "ease-in-out-cubic",
    "hover:text-melon",
    "dark:text-freshwater-blue",
    "dark:hover:text-rose",
  ]),
  iconContainer: cn([
    "relative",
    "top-0",
    "translate-x-0",
    "transition",
    "duration-200",
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
        <div className={LINK_WITH_ICON_STYLES["iconContainer"]}>
          <TablerIcon currentIcon={linkIconName} size={linkIconSize} />
        </div>
      )}
    </>
  );

  return React.createElement(
    html,
    {
      className: `${LINK_WITH_ICON_STYLES.element} ${linkExtraClasses}`,
      href: href,
      style: customStyles,
    },
    content
  );
});

export { LinkWithIcon };
