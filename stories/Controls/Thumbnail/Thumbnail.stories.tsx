import type { ThumbnailApi } from "@/stories/Controls/Thumbnail/Thumbnail";
import { Thumbnail } from "@/stories/Controls/Thumbnail/Thumbnail";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const ThumbnailArgs = {} as ThumbnailApi;

const ThumbnailArgTypes = {} as const;

const meta: Meta<typeof Thumbnail> = {
  title: "Controls/Thumbnail",
  component: Thumbnail,
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
  args: ThumbnailArgs,
  argTypes: ThumbnailArgTypes,
  render: () => <Thumbnail />,
};
export default meta;
type Story = StoryObj<typeof Thumbnail>;

// Default
export const Default: Story = {};
