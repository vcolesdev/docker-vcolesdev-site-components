import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { NavLink } from "./NavLink";

const meta: Meta<typeof NavLink> = {
  component: NavLink,
  title: "Navigation/NavLink",
  args: {
    children: `NavLink`,
    href: "#",
    hasSpan: false,
  },
  argTypes: {
    hasSpan: {
      control: {
        type: "boolean",
      },
    },
    isActiveLink: {
      control: {
        type: "boolean",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof NavLink>;

// Playground

export const Playground: Story = {
  render: (args) => <NavLink {...args}>{args.children}</NavLink>,
};

// Inactive Link
export const InactiveLink: Story = {
  args: {
    isActiveLink: false,
  },
  render: (args) => <NavLink {...args}>{args.children}</NavLink>,
};

// Active Link
export const ActiveLink: Story = {
  args: {
    isActiveLink: true,
  },
  render: (args) => <NavLink {...args}>{args.children}</NavLink>,
};
