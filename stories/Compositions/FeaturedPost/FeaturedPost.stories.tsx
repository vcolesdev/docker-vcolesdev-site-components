import defaultImage from "@/src/assets/spotlight-img-min.jpg";
import { FeaturedPost, FeaturedPostApi } from "@/stories/Compositions/FeaturedPost/FeaturedPost";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const FeaturedPostArgs = {
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  contentLength: 100,
  hasThumbnail: false,
  imageAlt: "Featured Post Image",
  imageSrc: defaultImage,
  title: "Featured Post Title",
} as FeaturedPostApi;

const FeaturedPostArgTypes = {
  contentLength: {
    control: {
      type: "range",
      min: 50,
      max: 300,
      step: 10,
    },
  },
} as const;

const meta: Meta<typeof FeaturedPost> = {
  title: "Compositions/FeaturedPost",
  component: FeaturedPost,
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
  args: FeaturedPostArgs,
  argTypes: FeaturedPostArgTypes,
  render: (args: FeaturedPostApi) => <FeaturedPost {...args} />,
};
export default meta;
type Story = StoryObj<typeof FeaturedPost>;

// Default
export const Default: Story = {
  render: (args) => <FeaturedPost {...args} />,
};

// Example - 2x2 Grid
export const Example2x2: Story = {
  name: "Example - 2x2 Grid",
  args: {
    title: "Example Post Title",
  },
  render: (args) => (
    <div className="grid grid-cols-2 gap-12">
      <FeaturedPost {...args} />
      <FeaturedPost {...args} />
      <FeaturedPost {...args} />
      <FeaturedPost {...args} />
    </div>
  ),
};

// Example - With Thumbnail
export const ExampleWithThumbnail: Story = {
  name: "Example - With Thumbnail",
  args: {
    title: "Example Post Title",
    hasThumbnail: true,
    imageAlt: "Example Post Image",
  },
  render: (args) => <FeaturedPost {...args} />,
};

// Example - 2x2 Grid With Thumbnail
export const Example2x2WithThumbnail: Story = {
  name: "Example - 2x2 Grid With Thumbnail",
  args: {
    title: "Example Post Title",
    hasThumbnail: true,
    imageAlt: "Example Post Image",
  },
  render: (args) => (
    <div className="grid grid-cols-2 gap-12">
      <FeaturedPost {...args} />
      <FeaturedPost {...args} />
      <FeaturedPost {...args} />
      <FeaturedPost {...args} />
    </div>
  ),
};
