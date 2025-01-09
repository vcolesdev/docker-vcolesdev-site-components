import { api } from "@/convex/_generated/api";
import { TablerIconName } from "@/stories/Components/TablerIcon/TablerIcon";
import { NavLink } from "@/stories/Typography/NavLink/NavLink";
import { useQuery } from "convex/react";

/**
 * @hook useNavLinks
 */
export function useNavLinks() {
  const navLinks = useQuery(api.navLinks.get);

  const NavLinkElements = (
    <>
      {navLinks?.map((navLink) => (
        <NavLink key={navLink._id} href={navLink.href}>
          {navLink.name}
        </NavLink>
      ))}
    </>
  );

  const NavLinkElementsWithIcon = (
    <>
      {navLinks?.map((navLink) => (
        <NavLink hasIcon iconName={navLink.icon as TablerIconName} key={navLink._id} href={navLink.href}>
          {navLink.name}
        </NavLink>
      ))}
    </>
  );

  return {
    navLinks: NavLinkElements,
    navLinksWithIcon: NavLinkElementsWithIcon,
  };
}
