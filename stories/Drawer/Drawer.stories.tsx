import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Drawer } from "./Drawer";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  title: "Components/Drawer",
  args: {
    children: "Drawer",
    id: "drawer",
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

// Drawer Default

export const Default: Story = {
  render: (args) => <Drawer {...args}>Drawer</Drawer>,
};
