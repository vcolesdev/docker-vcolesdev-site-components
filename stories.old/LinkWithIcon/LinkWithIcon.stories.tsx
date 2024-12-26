import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { LinkWithIcon } from "./LinkWithIcon";

const meta: Meta<typeof LinkWithIcon> = {
  component: LinkWithIcon,
  title: "Text/LinkWithIcon",
  args: {
    element: "a",
    hasIcon: true,
    href: "#",
    iconName: "IconChevronRight",
    iconSize: 18,
    linkText: "View Project",
    styles: {},
  },
  argTypes: {
    element: {
      control: {
        type: "select",
        options: ["a", "button", "div"],
      },
    },
    hasIcon: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof LinkWithIcon>;

// Default
export const Default: Story = {
  render: (args) => <LinkWithIcon {...args} />,
};

// Uppercase
export const Uppercase: Story = {
  args: {
    extraClasses: "uppercase",
    linkText: "View All Posts",
    styles: {
      fontSize: "15px",
      fontWeight: 700,
      letterSpacing: "0.3px",
    },
  },
  render: (args) => <LinkWithIcon {...args} />,
};
