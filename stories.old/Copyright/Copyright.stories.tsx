import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Copyright } from "./Copyright";

const meta: Meta<typeof Copyright> = {
  component: Copyright,
  title: "Site/Copyright",
  args: {
    name: "Vanessa Coles",
  },
};
export default meta;

type Story = StoryObj<typeof Copyright>;

// Default
export const Default: Story = {
  render: (args) => <Copyright {...args} />,
};
