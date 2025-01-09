import { TablerIcon } from "@/stories/Components/TablerIcon/TablerIcon";
import { NavLinkApi } from "@/stories/Typography/NavLink/NavLink";
import { classnames } from "@/stories/Typography/NavLink/NavLink.classes";
import * as React from "react";

/**
 * @hook useNavLinkIcon
 * @param hasIcon
 * @param iconName
 */
export const useNavLinkIcon = (hasIcon: NavLinkApi["hasIcon"], iconName: NavLinkApi["iconName"]) => {
  const icon =
    (hasIcon && iconName && (
      <span className={classnames.icon}>
        <TablerIcon color="currentColor" currentIcon={iconName} size={18} stroke={2} />
      </span>
    )) ||
    null;

  return icon;
};
