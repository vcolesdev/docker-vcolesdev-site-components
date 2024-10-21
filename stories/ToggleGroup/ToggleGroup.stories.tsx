import { TablerIcon } from "@/stories/TablerIcon/TablerIcon";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { ToggleButton, ToggleGroup } from "./ToggleGroup";

const meta: Meta<typeof ToggleGroup> = {
  component: ToggleGroup,
  title: "Components/ToggleGroup",
  args: {
    children: (
      <>
        <ToggleButton value="light">
          <TablerIcon currentIcon="IconSun" />
        </ToggleButton>
        <ToggleButton value="dark">
          <TablerIcon currentIcon="IconMoon" />
        </ToggleButton>
        <ToggleButton value="system">
          <TablerIcon currentIcon="IconDevicesPc" />
        </ToggleButton>
      </>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof ToggleGroup>;

// Default
export const Default: Story = {
  render: (args) => <ToggleGroup {...args} />,
};
