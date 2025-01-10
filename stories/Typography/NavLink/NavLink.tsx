import { cn } from "@/src/utils/cn";
import type { TablerIconName } from "@/stories/Components/TablerIcon/TablerIcon";
import { classnames } from "@/stories/Typography/NavLink/NavLink.classes";
import { useNavLinkApi } from "@/stories/Typography/NavLink/use-nav-link-api";
import * as React from "react";

/**
 * @interface NavLinkApi
 */
export interface NavLinkApi {
  children: React.ReactNode | React.ReactNode[] | string;
  hasIcon?: boolean;
  href?: string;
  iconName?: TablerIconName;
  id?: string;
  isActive?: boolean;
  ref?: React.Ref<HTMLAnchorElement>;
}

/**
 * NavLink Component
 * @param props
 */
export function NavLink(props: NavLinkApi) {
  const { children, href, id } = props;
  const { icon, fn, state } = useNavLinkApi(props);

  const linkClasses = cn([classnames.anchor]);
  const activeClasses = cn({
    [classnames.states.active]: state.isNavLinkActive,
    [classnames.states.inactive]: !state.isNavLinkActive,
  });

  return (
    <div className={classnames.base} id={id}>
      <a
        data-role="navLink"
        className={`${linkClasses} ${state.isNavLinkActive ? classnames.states.active : classnames.states.inactive}`}
        href={href || "/"}
        onClick={(e) => fn.handleLinkClick(e)}
      >
        {icon}
        <span className={classnames.span}>{children}</span>
      </a>
    </div>
  );
}
