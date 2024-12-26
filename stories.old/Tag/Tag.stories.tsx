import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: "Components/Tag",
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
  args: {
    size: "md",
    tagContent: "Tag",
  },
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["sm", "md", "lg", "xl"],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

// Playground
export const Playground: Story = {
  render: (args) => <Tag {...args} />,
};

// Default
export const Default: Story = {
  render: (args) => <Tag {...args} />,
};

// Small
export const Small: Story = {
  args: {
    size: "sm",
  },
  render: (args) => <Tag {...args} />,
};

// Large
export const Large: Story = {
  args: {
    size: "lg",
  },
  render: (args) => <Tag {...args} />,
};

// Extra Large
export const ExtraLarge: Story = {
  args: {
    size: "xl",
  },
  render: (args) => <Tag {...args} />,
};

// A list of Tags
export const TagsListSizes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tag size="sm" />
      <Tag size="md" />
      <Tag size="lg" />
      <Tag size="xl" />
    </div>
  ),
};

// Small Tags List
export const TagsListSmall: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tag size="sm" />
      <Tag size="sm" />
      <Tag size="sm" />
      <Tag size="sm" />
    </div>
  ),
};

// Large Tags List
export const TagsListLarge: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tag size="lg" />
      <Tag size="lg" />
      <Tag size="lg" />
      <Tag size="lg" />
    </div>
  ),
};

// Extra Large Tags List
export const TagsListExtraLarge: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tag size="xl" />
      <Tag size="xl" />
      <Tag size="xl" />
      <Tag size="xl" />
    </div>
  ),
};
