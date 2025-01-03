import { FancyCard } from "@/stories/Compositions/FancyCard/FancyCard";
import type { FancyCardApi } from "@/stories/Compositions/FancyCard/FancyCard.api";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const FancyCardArgs = {
  content: "Personal site for Vanessa Coles (myself). Built with Remix, TypeScript, TailwindCSS, Markdocs, and more.",
  hasIcon: false,
  hasThumbnail: true,
  linkText: "View Project",
  title: "Example Project Title",
} as FancyCardApi;

const FancyCardArgTypes = {} as const;

const meta: Meta<typeof FancyCard> = {
  title: "Compositions/FancyCard",
  component: FancyCard,
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
  args: FancyCardArgs,
  argTypes: FancyCardArgTypes,
  render: (args: FancyCardApi) => <FancyCard {...args} />,
};
export default meta;
type Story = StoryObj<typeof FancyCard>;

// Default
export const Default: Story = {
  render: (args) => <FancyCard {...args} />,
};

// Example - 2 x 2 Grid with Thumbnails
export const Example2x2: Story = {
  name: "Example - 2x2 Grid with Thumbnails",
  args: {
    hasThumbnail: true,
    linkText: "View Project",
    title: "Example Project Title",
  },
  render: (args) => (
    <div className="grid grid-cols-2 gap-6">
      <FancyCard aria-label="Item One" {...args} />
      <FancyCard aria-label="Item Two" {...args} />
      <FancyCard aria-label="Item Three" {...args} />
      <FancyCard aria-label="Item Four" {...args} />
    </div>
  ),
};

// Example - 3 x 3 Grid with Thumbnails
export const Example: Story = {
  name: "Example - 3x3 Grid with Thumbnails",
  args: {
    hasThumbnail: true,
    linkText: "View Project",
    title: "Example Project Title",
  },
  render: (args) => (
    <div className="grid grid-cols-3 gap-6">
      <FancyCard aria-label="Item One" {...args} />
      <FancyCard aria-label="Item Two" {...args} />
      <FancyCard aria-label="Item Three" {...args} />
      <FancyCard aria-label="Item Four" {...args} />
      <FancyCard aria-label="Item Five" {...args} />
      <FancyCard aria-label="Item Six" {...args} />
      <FancyCard aria-label="Item Seven" {...args} />
      <FancyCard aria-label="Item Eight" {...args} />
      <FancyCard aria-label="Item Nine" {...args} />
    </div>
  ),
};

// Example - Grid 1 x 4 with Thumbnails
export const Example1x4: Story = {
  name: "Example - 1x4 Grid with Thumbnails",
  args: {
    hasThumbnail: true,
    linkText: "View Project",
    title: "Example Project Title",
  },
  render: (args) => (
    <div className="grid grid-cols-1 gap-6">
      <FancyCard aria-label="Item One" {...args} />
      <FancyCard aria-label="Item Two" {...args} />
      <FancyCard aria-label="Item Three" {...args} />
      <FancyCard aria-label="Item Four" {...args} />
    </div>
  ),
};

// Example - Grid 2x2 No Thumbnails
export const Example2x2NoThumbnails: Story = {
  name: "Example - 2x2 Grid No Thumbnails",
  args: {
    hasThumbnail: false,
    linkText: "View Project",
    title: "Example Project Title",
  },
  render: (args) => (
    <div className="grid grid-cols-2 gap-6">
      <FancyCard aria-label="Item One" {...args} />
      <FancyCard aria-label="Item Two" {...args} />
      <FancyCard aria-label="Item Three" {...args} />
      <FancyCard aria-label="Item Four" {...args} />
    </div>
  ),
};

// Example - Grid 3x3 No Thumbnails
export const Example3x3NoThumbnails: Story = {
  name: "Example - 3x3 Grid No Thumbnails",
  args: {
    hasThumbnail: false,
    linkText: "View Project",
    title: "Example Project Title",
  },
  render: (args) => (
    <div className="grid grid-cols-3 gap-6">
      <FancyCard aria-label="Item One" {...args} />
      <FancyCard aria-label="Item Two" {...args} />
      <FancyCard aria-label="Item Three" {...args} />
      <FancyCard aria-label="Item Four" {...args} />
      <FancyCard aria-label="Item Five" {...args} />
      <FancyCard aria-label="Item Six" {...args} />
      <FancyCard aria-label="Item Seven" {...args} />
      <FancyCard aria-label="Item Eight" {...args} />
      <FancyCard aria-label="Item Nine" {...args} />
    </div>
  ),
};

// Example - Grid 1x4 No Thumbnails
export const Example1x4NoThumbnails: Story = {
  name: "Example - 1x4 Grid No Thumbnails",
  args: {
    hasThumbnail: false,
    linkText: "View Project",
    title: "Example Project Title",
  },
  render: (args) => (
    <div className="grid grid-cols-1 gap-6">
      <FancyCard aria-label="Item One" {...args} />
      <FancyCard aria-label="Item Two" {...args} />
      <FancyCard aria-label="Item Three" {...args} />
      <FancyCard aria-label="Item Four" {...args} />
    </div>
  ),
};

// Example - 2x2 Grid No Thumbnails With Icon
export const Example2x2NoThumbnailsWithIcon: Story = {
  name: "Example - 2x2 Grid No Thumbnails With Icon",
  args: {
    hasThumbnail: false,
    hasIcon: true,
    linkText: "View Project",
    title: "Example Project Title",
  },
  render: (args) => (
    <div className="grid grid-cols-2 gap-6">
      <FancyCard aria-label="Item One" {...args} />
      <FancyCard aria-label="Item Two" {...args} />
      <FancyCard aria-label="Item Three" {...args} />
      <FancyCard aria-label="Item Four" {...args} />
    </div>
  ),
};

// Example - 3x3 Grid No Thumbnails With Icon
export const Example3x3NoThumbnailsWithIcon: Story = {
  name: "Example - 3x3 Grid No Thumbnails With Icon",
  args: {
    hasThumbnail: false,
    hasIcon: true,
    linkText: "View Project",
    title: "Example Project Title",
  },
  render: (args) => (
    <div className="grid grid-cols-3 gap-6">
      <FancyCard aria-label="Item One" {...args} />
      <FancyCard aria-label="Item Two" {...args} />
      <FancyCard aria-label="Item Three" {...args} />
      <FancyCard aria-label="Item Four" {...args} />
      <FancyCard aria-label="Item Five" {...args} />
      <FancyCard aria-label="Item Six" {...args} />
      <FancyCard aria-label="Item Seven" {...args} />
      <FancyCard aria-label="Item Eight" {...args} />
      <FancyCard aria-label="Item Nine" {...args} />
    </div>
  ),
};
