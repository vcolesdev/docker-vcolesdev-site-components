import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Eyebrow } from "./Eyebrow";
import type { EyebrowApi } from "./Eyebrow.api";

const EyebrowArgs = {
  children: "Featured Stories",
} as EyebrowApi;

const meta: Meta<typeof Eyebrow> = {
  component: Eyebrow,
  title: "Typography/Eyebrow",
  args: EyebrowArgs,
};
export default meta;
type Story = StoryObj<typeof Eyebrow>;

// Default
export const Default: Story = {
  name: "Eyebrow - Default",
  render: (args) => <Eyebrow {...args} />,
};
