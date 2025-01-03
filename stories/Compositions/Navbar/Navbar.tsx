import { NavLink } from "@/stories/Typography/NavLink/NavLink";
import * as React from "react";

export interface NavbarApi {
  id: string;
}

/**
 * @hook useNavLinks
 */
export function useNavLinks() {
  return (
    <>
      <NavLink hasIcon iconName="IconHome" href="/">
        Home
      </NavLink>
      <NavLink hasIcon iconName="IconUserHexagon" href="/">
        About
      </NavLink>
      <NavLink hasIcon iconName="IconUser" href="/">
        Services
      </NavLink>
      <NavLink hasIcon iconName="IconCode" href="/">
        Projects
      </NavLink>
      <NavLink hasIcon iconName="IconBook2" href="/">
        Writings
      </NavLink>
      <NavLink hasIcon iconName="IconPhoto" href="/">
        Photos
      </NavLink>
      <NavLink hasIcon iconName="IconSend" href="/">
        Contact
      </NavLink>
    </>
  );
}

const defaultNavLinkText = ["Home", "About", "Services", "Projects", "Writings", "Photos", "Contact"];

const defaultNavLinkHrefs = ["/", "/", "/", "/", "/", "/", "/"];

const defaultNavLinkIcons = [
  "IconHome",
  "IconUserHexagon",
  "IconUser",
  "IconCode",
  "IconBook2",
  "IconPhoto",
  "IconSend",
];

/**
 * Navbar
 */
export function Navbar(props: NavbarApi) {
  return (
    <nav id={props.id}>
      <div className="flex space-x-10">
        <NavLink hasIcon iconName="IconHome" href="/">
          Home
        </NavLink>
        <NavLink hasIcon iconName="IconUserHexagon" href="/">
          About
        </NavLink>
        <NavLink hasIcon iconName="IconUser" href="/">
          Services
        </NavLink>
        <NavLink hasIcon iconName="IconCode" href="/">
          Projects
        </NavLink>
        <NavLink hasIcon iconName="IconBook2" href="/">
          Writings
        </NavLink>
        <NavLink hasIcon iconName="IconPhoto" href="/">
          Photos
        </NavLink>
        <NavLink hasIcon iconName="IconSend" href="/">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
