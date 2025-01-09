import { useNavLinks } from "@/src/hooks/use-nav-links";
import { cn } from "@/src/utils/cn";
import { Logo } from "@/stories/Components/Logo/Logo";
import { TablerIcon } from "@/stories/Components/TablerIcon/TablerIcon";
import { ThemeChanger } from "@/stories/Controls/ThemeChanger/ThemeChanger";
import * as React from "react";

/**
 * @interface NavbarApi
 */
export interface NavbarApi {
  id?: string;
}

/**
 * @const classnames
 */
const classnames = {
  root: cn(["flex", "justify-between", "items-center"]),
  nav: cn(["hidden", "lg:inline-block", "mx-4"]),
  navLinks: cn(["flex", "space-x-8"]),
  slots: {
    content: cn(["flex", "space-x-6", "items-center"]),
    mobileIcon: cn(["inline-block", "lg:hidden"]),
  },
};

/**
 * Navbar
 */
export function Navbar(props: NavbarApi) {
  const { navLinksWithIcon } = useNavLinks();

  return (
    <div className={classnames.root}>
      <a href="/">
        <Logo size="md" />
      </a>
      <nav className={classnames.nav} id={props.id}>
        <div className={classnames.navLinks}>{navLinksWithIcon}</div>
      </nav>
      <div className={classnames.slots.content}>
        <div>
          <ThemeChanger />
        </div>
        <div className={classnames.slots.mobileIcon}>
          <a href="/">
            <div className="inline-block">
              <TablerIcon color="currentColor" currentIcon="IconMenu" size={28} stroke={2} />
            </div>
            <span className="sr-only">Mobile Menu</span>
          </a>
        </div>
      </div>
    </div>
  );
}
