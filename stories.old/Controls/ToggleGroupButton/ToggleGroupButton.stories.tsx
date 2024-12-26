import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { ToggleGroupButton } from "./ToggleGroupButton";

const meta: Meta<typeof ToggleGroupButton> = {
  component: ToggleGroupButton,
  title: "Controls/ToggleGroupButton",
  args: {
    children: "Toggle Button",
    value: "button",
  },
};

export default meta;

type Story = StoryObj<typeof ToggleGroupButton>;

// ToggleButton Default
export const Default: Story = {
  render: (args) => <ToggleGroupButton {...args}>Toggle</ToggleGroupButton>,
};

// ToggleGroupButton A
export const ToggleGroupButtonA: Story = {
  render: (args) => (
    <ToggleGroupButton {...args} pos="a">
      Left
    </ToggleGroupButton>
  ),
};

// ToggleGroupButton B
export const ToggleGroupButtonB: Story = {
  render: (args) => (
    <ToggleGroupButton {...args} pos="b">
      Center
    </ToggleGroupButton>
  ),
};

// ToggleGroupButton C
export const ToggleGroupButtonC: Story = {
  render: (args) => (
    <ToggleGroupButton {...args} pos="c">
      Right
    </ToggleGroupButton>
  ),
};
