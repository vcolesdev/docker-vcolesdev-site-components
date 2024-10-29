import { swatches } from "@/src/swatches";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { ColorSwatch } from "./ColorSwatch";

const meta: Meta<typeof ColorSwatch> = {
  component: ColorSwatch,
  title: "Components/ColorSwatch",
  args: {
    color: swatches.site.melon,
    size: "lg",
  },
};

export default meta;

type Story = StoryObj<typeof ColorSwatch>;

// Default
export const Default: Story = {
  render: (args) => <ColorSwatch {...args} />,
};
