import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { SimpleFooter } from "./SimpleFooter";

const meta: Meta<typeof SimpleFooter> = {
  component: SimpleFooter,
  title: "Site/SimpleFooter",
  args: {
    name: "Vanessa Coles",
  },
  argTypes: {
    name: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SimpleFooter>;

// Default
export const Default: Story = {
  render: (args) => <SimpleFooter {...args} />,
};
