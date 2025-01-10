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
  mobileMenuSrOnly?: string;
}

/**
 * @const classnames
 */
const classnames = {
  root: cn(["flex", "justify-between", "items-center"]),
  nav: cn(["hidden", "lg:inline-block", "mx-4"]),
  navLinks: cn(["flex", "space-x-8"]),
  mobileMenuButton: {
    iconContainer: cn(["flex", "items-center"]),
    srOnly: cn(["sr-only"]),
  },
  slots: {
    content: cn(["flex", "space-x-6", "items-center"]),
    mobileIcon: cn(["inline-block", "lg:hidden"]),
  },
};

/**
 * @hook useNavbarMobileMenuButton
 */
const useNavbarMobileMenuButton = () => {
  const defaultProps = {
    id: "btnToggleMobileMenu",
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log(e);
    },
    srOnlyText: "Mobile Menu",
  };

  return {
    defaultProps,
  };
};

/**
 * NavbarLogo
 */
const NavbarLogo = () => {
  return (
    <a id="navbarSiteLogo" href="/">
      <Logo size="md" />
    </a>
  );
};

/**
 * NavbarNav
 */
const NavbarNav = (props: { id: NavbarApi["id"]; navLinks: React.ReactNode }) => {
  return (
    <nav className={classnames.nav} id={props.id}>
      <div className={classnames.navLinks}>{props.navLinks}</div>
    </nav>
  );
};

const NavbarMobileMenuButton = (props: {
  id?: string;
  onClick?: React.MouseEvent<HTMLButtonElement>;
  srOnlyText?: string;
}) => {
  const { defaultProps } = useNavbarMobileMenuButton();

  return (
    <div className={classnames.slots.mobileIcon}>
      <button
        id={props.id || defaultProps.id}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => props.onClick || defaultProps.onClick(e)}
      >
        <span className={classnames.mobileMenuButton.iconContainer}>
          <TablerIcon color="currentColor" currentIcon="IconMenu" size={28} stroke={2} />
        </span>
        <span className={classnames.mobileMenuButton.srOnly}>{props.srOnlyText}</span>
      </button>
    </div>
  );
};

/**
 * NavbarContent
 */
const NavbarContent = (props: { children: React.ReactNode }) => {
  return <div className={classnames.slots.content}>{props.children}</div>;
};

/**
 * Navbar
 */
export function Navbar(props: NavbarApi) {
  const { navLinksWithIcon } = useNavLinks();
  const { defaultProps } = useNavbarMobileMenuButton();

  return (
    <div className={classnames.root}>
      <NavbarLogo />
      <NavbarNav id={props.id} navLinks={navLinksWithIcon} />
      <NavbarContent>
        <ThemeChanger />
        <NavbarMobileMenuButton srOnlyText={props.mobileMenuSrOnly || defaultProps.srOnlyText} />
      </NavbarContent>
    </div>
  );
}
