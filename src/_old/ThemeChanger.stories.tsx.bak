import type { ThemeChangerApi } from "@/stories/Controls/ThemeChanger/ThemeChanger";
import { ThemeChanger } from "@/stories/Controls/ThemeChanger/ThemeChanger";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const ThemeChangerArgs = {} as ThemeChangerApi;

const ThemeChangerArgTypes = {} as const;

const meta: Meta<typeof ThemeChanger> = {
  title: "Controls/ThemeChanger",
  component: ThemeChanger,
  parameters: {
    deepControls: { enabled: true },
  },
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
  args: ThemeChangerArgs,
  argTypes: ThemeChangerArgTypes,
  render: () => <ThemeChanger />,
};
export default meta;
type Story = StoryObj<typeof ThemeChanger>;

// Default
export const Default: Story = {};
