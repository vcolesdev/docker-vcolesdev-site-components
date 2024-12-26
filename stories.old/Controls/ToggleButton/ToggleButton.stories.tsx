import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { TablerIcon } from "../../TablerIcon/TablerIcon";
import { ToggleButton } from "./ToggleButton";

const meta: Meta<typeof ToggleButton> = {
  title: "Controls/ToggleButton",
  component: ToggleButton,
  parameters: {
    controls: {
      exclude: ["id", "isSelected", "onChange", "onClick", "value"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleButton>;

// Playground
export const Playground: Story = {
  args: {
    ariaLabel: "Toggle Button",
    content: {
      selected: "Selected",
      unselected: "Unselected",
    },
    disabled: false,
    label: "Toggle Button",
  },
  render: (args) => <ToggleButton {...args} />,
};

// Menu Button
export const MenuButton: Story = {
  args: {
    ariaLabel: "Menu Button",
    content: {
      selected: <TablerIcon currentIcon="IconMenu" size={24} />,
      unselected: <TablerIcon currentIcon="IconMenu" size={24} />,
    },
    disabled: false,
    label: "Menu Button",
  },
  render: (args) => <ToggleButton {...args} />,
};

// Toggled On
export const ToggledOn: Story = {
  args: {
    ariaLabel: "Toggled On",
    content: {
      selected: "Menu",
      unselected: "Menu",
    },
    isSelected: true,
    label: "Toggled On",
  },
  render: (args) => <ToggleButton {...args} />,
};

// Toggled Off
export const ToggledOff: Story = {
  args: {
    ariaLabel: "Toggled Off",
    content: {
      selected: "Menu",
      unselected: "Menu",
    },
    isSelected: false,
    label: "Toggled Off",
  },
  render: (args) => <ToggleButton {...args} />,
};
