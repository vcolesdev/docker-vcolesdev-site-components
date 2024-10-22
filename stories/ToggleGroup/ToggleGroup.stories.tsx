import { cn } from "@/src/utils/cn";
import { AnimatedIcon } from "@/stories/AnimatedIcon/AnimatedIcon";
import { TablerIcon } from "@/stories/TablerIcon/TablerIcon";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { ToggleButton, ToggleGroup } from "./ToggleGroup";

const TOGGLE_BUTTONS = {
  element: cn([
    "bg-transparent",
    "text-tree-bark",
    "shadow-sm",
    "hover:bg-transparent",
    "hover:text-melon",
    "focus:text-melon",
    "focus:ring-melon",
    "focus:ring-[2px]",
    "focus:ring-offset-1",
    "dark:focus:ring-[1.5px]",
    "dark:bg-transparent",
    "dark:hover:bg-transparent",
    "dark:hover:text-white",
    "dark:focus:bg-slate-800",
    "dark:focus:text-white",
    "dark:focus:ring-sky",
  ]),
  first: cn(["rounded-tr-none", "rounded-br-none"]),
  second: cn(["rounded-tr-none", "rounded-tl-none", "rounded-br-none", "rounded-bl-none"]),
  third: cn(["rounded-tl-none", "rounded-bl-none"]),
};

const meta: Meta<typeof ToggleGroup> = {
  component: ToggleGroup,
  title: "Components/ToggleGroup",
  args: {
    children: (
      <div className="inline-flex p-1 rounded-[0.5rem] bg-[#f4d1cb] dark:bg-dark--elevated">
        <ToggleButton className={`${TOGGLE_BUTTONS.element} ${TOGGLE_BUTTONS.first}`} value="light">
          <TablerIcon currentIcon="IconSun" size={20} stroke={2} />
        </ToggleButton>
        <ToggleButton className={`${TOGGLE_BUTTONS.element} ${TOGGLE_BUTTONS.second}`} value="dark">
          <TablerIcon currentIcon="IconMoon" size={20} stroke={2} />
        </ToggleButton>
        <ToggleButton className={`${TOGGLE_BUTTONS.element} ${TOGGLE_BUTTONS.third}`} value="system">
          <TablerIcon currentIcon="IconDevicesPc" size={20} stroke={2} />
        </ToggleButton>
      </div>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof ToggleGroup>;

// Default
export const Default: Story = {
  render: (args) => <ToggleGroup {...args}>{args.children}</ToggleGroup>,
};
