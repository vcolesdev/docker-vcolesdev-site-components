import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { TextContent } from "./TextContent";

const textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const meta: Meta<typeof TextContent> = {
  component: TextContent,
  title: "Text/TextContent",
  args: {
    children: `Text Content`,
    size: "md",
    element: "p",
  },
  argTypes: {
    element: {
      control: {
        type: "select",
      },
      options: ["p", "span", "div"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg", "xl", "2xl"],
    },
    styles: {
      control: {
        type: "object",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof TextContent>;

// Default
export const Default: Story = {
  args: {
    size: "md",
  },
  render: (args) => <TextContent {...args}>{textContent}</TextContent>,
};

// Small
export const Small: Story = {
  args: {
    size: "sm",
  },
  render: (args) => <TextContent {...args}>{textContent}</TextContent>,
};

// Large
export const Large: Story = {
  args: {
    size: "lg",
  },
  render: (args) => <TextContent {...args}>{textContent}</TextContent>,
};

// Extra Large
export const ExtraLarge: Story = {
  args: {
    size: "xl",
  },
  render: (args) => <TextContent {...args}>{textContent}</TextContent>,
};

// 2X Large
export const TwoXLarge: Story = {
  args: {
    size: "2xl",
  },
  render: (args) => <TextContent {...args}>{textContent}</TextContent>,
};
