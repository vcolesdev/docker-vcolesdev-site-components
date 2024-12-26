import { NavLink } from "@/stories/Typography/NavLink/NavLink";
import type { NavLinkApi } from "@/stories/Typography/NavLink/NavLink";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const linksArr = ["Home", "About", "Services", "Projects", "Writings", "Photos", "Contact"];

const NavArgs = {
  children: `Home`,
  href: "#",
  isActive: false,
} as NavLinkApi;

const NavArgTypes = {} as const;

const meta: Meta<typeof NavLink> = {
  component: NavLink,
  title: "Typography/NavLink",
  args: NavArgs,
  argTypes: NavArgTypes,
};
export default meta;
type Story = StoryObj<typeof NavLink>;

// Default
export const Default: Story = {
  render: (args) => <NavLink {...args}>{args.children}</NavLink>,
};

// Default - With Icon
export const DefaultWithIcon: Story = {
  args: {
    hasIcon: true,
    iconName: "IconHome",
  },
  render: (args) => <NavLink {...args}>{args.children}</NavLink>,
};

// Links
export const Links: Story = {
  name: "Links",
  render: (args) => {
    return (
      <div className="flex space-x-14">
        {linksArr.map((link) => (
          <NavLink {...args}>{link}</NavLink>
        ))}
      </div>
    );
  },
};

// Links - With Icons
export const LinksWithIcon: Story = {
  name: "Links - With Icons",
  render: (args) => {
    return (
      <div className="flex space-x-10">
        <NavLink hasIcon iconName="IconHome" {...args}>
          Home
        </NavLink>
        <NavLink hasIcon iconName="IconUserHexagon" {...args}>
          About
        </NavLink>
        <NavLink hasIcon iconName="IconUser" {...args}>
          Services
        </NavLink>
        <NavLink hasIcon iconName="IconCode" {...args}>
          Projects
        </NavLink>
        <NavLink hasIcon iconName="IconBook2" {...args}>
          Writings
        </NavLink>
        <NavLink hasIcon iconName="IconPhoto" {...args}>
          Photos
        </NavLink>
        <NavLink hasIcon iconName="IconSend" {...args}>
          Contact
        </NavLink>
      </div>
    );
  },
};
