import { iconPaths as paths } from "@/src/anim/iconPaths";
import { cn } from "@/src/utils/cn";
import { ForwardedRef, forwardRef, useEffect, useState } from "react";

import { AnimatedIcon } from "../AnimatedIcon/AnimatedIcon";
import { Copyright } from "../Copyright/Copyright";

interface SimpleFooterApi {
  name: string;
}

const footerClasses = {
  root: cn(["flex", "justify-between", "items-center", "py-4"]),
  icons: cn(["inline-flex"]),
  icon: cn(["block"]),
  link: cn(["inline-block", "ml-6"]),
};

const DEFAULT_LINK = "#";

const SimpleFooter = forwardRef(function SimpleFooter(
  { ...props }: SimpleFooterApi,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { name } = props;
  const [iconSize, setIconSize] = useState<number | null>(null);

  useEffect(() => {
    setIconSize(28);
  }, [iconSize]);

  return (
    <footer className={footerClasses.root} ref={ref}>
      <Copyright name={name} />
      <aside className={footerClasses.icons}>
        <a className={footerClasses.link} href={DEFAULT_LINK}>
          <div className={footerClasses.icon}>
            <AnimatedIcon iconName="brand-github" paths={paths.github} size={iconSize} />
          </div>
        </a>
        <a className={footerClasses.link} href={DEFAULT_LINK}>
          <div className={footerClasses.icon}>
            <AnimatedIcon iconName="brand-linkedin" paths={paths.linkedin} size={iconSize} />
          </div>
        </a>
        <a className={footerClasses.link} href={DEFAULT_LINK}>
          <div className={footerClasses.icon}>
            <AnimatedIcon iconName="message-share" paths={paths.message} size={iconSize} />
          </div>
        </a>
      </aside>
    </footer>
  );
});

export { SimpleFooter };
export type { SimpleFooterApi };
