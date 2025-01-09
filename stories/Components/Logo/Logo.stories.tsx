import type { LogoApi } from "@/stories/Components/Logo/Logo";
import { Logo } from "@/stories/Components/Logo/Logo";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const LogoArgs = {
  size: "md",
} as LogoApi;

const LogoArgTypes = {
  size: {
    control: {
      type: "select",
      options: ["sm", "md", "lg"],
    },
  },
} as const;

const meta: Meta<typeof Logo> = {
  title: "Components/Logo",
  component: Logo,
  args: LogoArgs,
  argTypes: LogoArgTypes,
};
export default meta;
type Story = StoryObj<typeof Logo>;

// Default
export const Default: Story = {
  render: (args) => <Logo {...args} />,
};

// Small
export const Small: Story = {
  args: {
    size: "sm",
  },
  render: (args) => <Logo {...args} />,
};

// Large
export const Large: Story = {
  args: {
    size: "lg",
  },
  render: (args) => <Logo {...args} />,
};
