import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { IconButton, IconButtonApi } from "./IconButton";

const IconButtonArgs = {
  children: "View Projects",
  iconPos: "start",
  iconName: "IconActivity",
} as IconButtonApi;

const IconButtonArgTypes = {
  variant: {
    control: {
      type: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
  },
} as const;

const meta: Meta<typeof IconButton> = {
  title: "Controls/IconButton",
  component: IconButton,
  args: IconButtonArgs,
  argTypes: IconButtonArgTypes,
  render: (args: IconButtonApi) => <IconButton {...args} />,
};
export default meta;
type Story = StoryObj<typeof IconButton>;

// Default
export const Default: Story = {
  args: IconButtonArgs,
};

// Variants
export const Variants: Story = {
  render: (args) => (
    <div className="flex space-x-4">
      <IconButton variant="default" {...args}>
        Primary
      </IconButton>
      <IconButton variant="secondary" {...args}>
        Secondary
      </IconButton>
      <IconButton variant="destructive" {...args}>
        Destructive
      </IconButton>
      <IconButton variant="outline" {...args}>
        Outline
      </IconButton>
      <IconButton variant="ghost" {...args}>
        Ghost
      </IconButton>
      <IconButton variant="link" {...args}>
        Link
      </IconButton>
    </div>
  ),
};

// Destructive
export const Destructive: Story = {
  args: {
    ...IconButtonArgs,
    variant: "destructive",
  },
};

// Outline
export const Outline: Story = {
  args: {
    ...IconButtonArgs,
    variant: "outline",
  },
};

// Secondary
export const Secondary: Story = {
  args: {
    ...IconButtonArgs,
    variant: "secondary",
  },
};

// Ghost
export const Ghost: Story = {
  args: {
    ...IconButtonArgs,
    variant: "ghost",
  },
};

// Link
export const Link: Story = {
  args: {
    ...IconButtonArgs,
    variant: "link",
  },
};

// Small
export const Small: Story = {
  args: {
    ...IconButtonArgs,
    size: "sm",
  },
};

// Large
export const Large: Story = {
  args: {
    ...IconButtonArgs,
    size: "lg",
  },
};
