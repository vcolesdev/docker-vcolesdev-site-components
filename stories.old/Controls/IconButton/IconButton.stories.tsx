import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

// import { Spacer } from "@/stories/Spacer/Spacer";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: "Controls/IconButton",
  args: {
    children: "Scroll to Projects",
    iconName: "IconChevronRight",
    iconPos: "end",
    iconSize: 20,
    size: "md",
    variant: "primary",
  },
  argTypes: {
    iconPos: {
      control: { type: "select" },
      options: ["start", "end"],
    },
    iconSize: {
      control: { type: "range", min: 10, max: 40, step: 5 },
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "ghost", "outlined"],
    },
  },
  render: (args) => <IconButton {...args} />,
};

export default meta;

type Story = StoryObj<typeof IconButton>;

/**
 * Playground
 */
export const Playground: Story = {
  args: {
    children: "Scroll to Projects",
    iconName: "IconChevronRight",
    iconPos: "end",
    iconSize: 20,
    size: "md",
    variant: "outlined",
  },
};

/**
 * Icon Left
 */
export const IconLeft: Story = {
  args: {
    children: "Scroll to Projects",
    iconName: "IconActivity",
    iconPos: "start",
    iconSize: 20,
    size: "md",
    variant: "primary",
  },
};

/**
 * Icon Right
 */
export const IconRight: Story = {
  args: {
    children: "Scroll to Projects",
    iconName: "IconActivity",
    iconPos: "end",
    iconSize: 20,
    size: "md",
    variant: "ghost",
  },
};
