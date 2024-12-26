import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Breadcrumbs } from "./Breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: "Navigation/Breadcrumbs",
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/" },
      { label: "Storybook Components", href: "/" },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

/**
 * Default
 */
export const Default: Story = {
  render: (args) => <Breadcrumbs {...args} />,
};
