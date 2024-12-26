import { cn } from "@/src/utils/cn";
import { ForwardedRef, forwardRef } from "react";
import * as React from "react";

/**
 * @constant styles
 */
const styles = {
  link: cn([
    "font-body",
    "font-semibold",
    "text-tree-bark",
    "transition-all",
    "duration-300",
    "delay-75",
    "ease-in-out-cubic",
    "hover:text-melon",
    "dark:text-white",
    "dark:hover:text-baby-blue",
  ]),
  separator: cn(["inline-block", "mx-2"]),
  wrapper: cn(["block", "gap-x-3", "my-4"]),
};

/**
 * @interface BreadcrumbsApi
 */
interface BreadcrumbsApi {
  // Extra classes to apply to the element.
  extraClasses?: string;

  // The items to display in the breadcrumbs represented by an array.  An item contains a label and a href.
  items: { label: string; href: string }[];

  // The separator to display between breadcrumbs.  Defaults to " / ".
  separator?: string | React.ReactNode | JSX.Element | null;
}

/**
 * BreadcrumbsItem
 * @param label - The label to display for the breadcrumb.
 * @param href - The href to navigate to when the breadcrumb is clicked.
 */
const BreadcrumbsItem = ({ label, href }: { label: string; href: string }) => (
  <a className={styles.link} href={href}>
    {label}
  </a>
);

/**
 * Breadcrumbs
 * @param {BreadcrumbsApi} props - The properties to pass to the component.
 */
const Breadcrumbs = forwardRef(function Breadcrumbs(props: BreadcrumbsApi, ref: ForwardedRef<HTMLDivElement>) {
  const { extraClasses, items } = props;

  const output = items.map(({ label, href }, index) => (
    <span key={index}>
      <BreadcrumbsItem label={label} href={href} />
      {index < items.length - 1 && <span className={styles.separator}>{props.separator || " / "}</span>}
    </span>
  ));

  return (
    <div className={`${styles.wrapper} ${extraClasses}`} role="presentation" ref={ref}>
      {output}
    </div>
  );
});

export { Breadcrumbs, BreadcrumbsApi };
