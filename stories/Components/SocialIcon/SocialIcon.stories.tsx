import type { SocialIconApi } from "@/stories/Components/SocialIcon/SocialIcon";
import { SocialIcon } from "@/stories/Components/SocialIcon/SocialIcon";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const SocialIconArgs = {} as SocialIconApi;

const SocialIconArgTypes = {} as const;

const meta: Meta<typeof SocialIcon> = {
  title: "Stories/SocialIcon",
  component: SocialIcon,
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
  args: SocialIconArgs,
  argTypes: SocialIconArgTypes,
  render: (args: SocialIconApi) => <SocialIcon {...args} />,
};
export default meta;
type Story = StoryObj<typeof SocialIcon>;

// Default
export const Default: Story = {
  render: (args) => <SocialIcon {...args} />,
};
