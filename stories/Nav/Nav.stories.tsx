import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Nav } from "./Nav";

const meta: Meta<typeof Nav> = {
  component: Nav,
  title: "Components/Nav",
  args: {
    ariaLabel: "Main",
    children: `Navlinks content here.`,
  },
  argTypes: {
    ariaLabel: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Nav>;

// Default
export const Default: Story = {
  render: (args) => <Nav {...args}>{args.children}</Nav>,
};
