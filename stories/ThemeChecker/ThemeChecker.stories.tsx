import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { ThemeChecker } from "./ThemeChecker";

const meta: Meta<typeof ThemeChecker> = {
  title: "Development/ThemeChecker",
  component: ThemeChecker,
};

export default meta;

type Story = StoryObj<typeof ThemeChecker>;

// Default
export const Default: Story = {
  render: () => <ThemeChecker />,
};
