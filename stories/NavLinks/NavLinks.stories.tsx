import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { NavLinks } from "./NavLinks";

const meta: Meta<typeof NavLinks> = {
  component: NavLinks,
  title: "Navigation/NavLinks",
  args: {
    hasSpan: false,
    items: ["NavLink", "NavLink", "NavLink"],
  },
  argTypes: {
    hasSpan: {
      control: {
        type: "boolean",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof NavLinks>;

// Playground
export const Playground: Story = {
  render: (args) => <NavLinks {...args} />,
};

// NavLink with span
export const NavLinksWithSpan: Story = {
  args: {
    hasSpan: true,
  },
  render: (args) => <NavLinks {...args} />,
};

// NavLink with array
export const NavLinksWithArray: Story = {
  args: {
    items: ["Home", "About", "Projects", "Contact"],
  },
  render: (args) => <NavLinks {...args} />,
};

// NavLink with string
export const NavLinksWithString: Story = {
  args: {
    items: "NavLink",
  },
  render: (args) => <NavLinks {...args} />,
};
