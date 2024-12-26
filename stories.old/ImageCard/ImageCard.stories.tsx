import testImage from "@/assets/spotlight-img-min.jpg";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { ImageCard } from "./ImageCard";

const meta: Meta<typeof ImageCard> = {
  component: ImageCard,
  title: "Components/ImageCard",
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
  args: {
    alt: "Image card",
    src: testImage,
  },
};

export default meta;

type Story = StoryObj<typeof ImageCard>;

// Default
export const Default: Story = {
  render: (args) => <ImageCard {...args} />,
};

// With caption
export const WithCaption: Story = {
  args: {
    hasCaption: true,
    caption: "A window sill with a woven blanket and some books",
  },
  render: (args) => <ImageCard {...args} />,
};
