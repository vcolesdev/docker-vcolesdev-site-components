import * as React from "react";
import { useEffect, useState } from "react";
import { useNavLinkIcon } from "@/stories/Typography/NavLink/use-nav-link-icon";
import { NavLinkApi } from "@/stories/Typography/NavLink/NavLink";

/**
 * @hook useNavLinkApi
 * @param props
 */
export function useNavLinkApi(props: NavLinkApi) {
  const { hasIcon, iconName } = props;

  const icon = useNavLinkIcon(hasIcon, iconName);

  const [isNavLinkActive, setIsNavLinkActive] = useState(false);

  /**
   * Handle the link click event for the nav link.
   * @function handleLinkClick
   */
  function handleLinkClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setIsNavLinkActive(!isNavLinkActive);
  }

  useEffect(() => {}, [props, isNavLinkActive]);

  return {
    actions: {
      setIsNavLinkActive,
    },
    fn: { handleLinkClick },
    icon,
    state: {
      isNavLinkActive,
    },
  };
}
