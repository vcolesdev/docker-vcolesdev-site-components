import testImage from "@/assets/spotlight-img-min.jpg";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Thumbnail } from "./Thumbnail";

const meta: Meta<typeof Thumbnail> = {
  component: Thumbnail,
  title: "Components/Thumbnail",
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
  args: {
    altText: "A picture of some clothes and books on a desk",
    hasOverlay: true,
    overlayContent: "This is an image caption",
    src: testImage,
  },
};

export default meta;

type Story = StoryObj<typeof Thumbnail>;

// Default
export const Default: Story = {
  render: (args) => <Thumbnail {...args} />,
};

// Without Overlay
export const WithoutOverlay: Story = {
  args: {
    hasOverlay: false,
  },
  render: (args) => <Thumbnail {...args} />,
};

// With Button Content

// Grid 3 x 3
export const ThumbnailGallery3x3: Story = {
  args: {
    altText: "A picture of some clothes and books on a desk",
    src: testImage,
  },
  render: (args) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Thumbnail {...args} />
        <Thumbnail {...args} />
        <Thumbnail {...args} />
        <Thumbnail {...args} />
        <Thumbnail {...args} />
        <Thumbnail {...args} />
        <Thumbnail {...args} />
        <Thumbnail {...args} />
        <Thumbnail {...args} />
      </div>
    );
  },
};
