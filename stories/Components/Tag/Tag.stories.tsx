import { ProjectTagsList, Tag } from "@/stories/Components/Tag/Tag";
import type { TagApi } from "@/stories/Components/Tag/Tag";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const TagArgs = {
  size: "md",
  tagContent: "Tag",
} as TagApi;

const TagArgTypes = {
  size: {
    control: {
      type: "radio",
      options: ["sm", "md", "lg", "xl"],
    },
  },
} as const;

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: "Components/Tag",
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
  args: TagArgs,
  argTypes: TagArgTypes,
};
export default meta;
type Story = StoryObj<typeof Tag>;

// Playground
export const Playground: Story = {
  name: "Tag - Playground",
  render: (args) => <Tag {...args} />,
};

// Default
export const Default: Story = {
  name: "Tag - Default",
  render: (args) => <Tag {...args} />,
};

// Small
export const Small: Story = {
  name: "Tag - Small",
  args: {
    size: "sm",
  },
  render: (args) => <Tag {...args} />,
};

// Large
export const Large: Story = {
  name: "Tag - Large",
  args: {
    size: "lg",
  },
  render: (args) => <Tag {...args} />,
};

// Extra Large
export const ExtraLarge: Story = {
  name: "Tag - Extra Large",
  args: {
    size: "xl",
  },
  render: (args) => <Tag {...args} />,
};

// A list of Tags
export const TagsListSizes: Story = {
  name: "Tag - Sizes",
  render: () => (
    <div className="flex flex-wrap gap-4 items-start">
      <Tag size="sm" />
      <Tag size="md" />
      <Tag size="lg" />
      <Tag size="xl" />
    </div>
  ),
};

// Small Tags List
export const TagsListSmall: Story = {
  name: "Tag - Small - Tags List",
  render: () => (
    <div className="flex flex-wrap gap-4 items-start">
      <Tag size="sm" />
      <Tag size="sm" />
      <Tag size="sm" />
      <Tag size="sm" />
    </div>
  ),
};

// Large Tags List
export const TagsListLarge: Story = {
  name: "Tag - Large - Tags List",
  render: () => (
    <div className="flex flex-wrap gap-4 items-start">
      <Tag size="lg" />
      <Tag size="lg" />
      <Tag size="lg" />
      <Tag size="lg" />
    </div>
  ),
};

// Extra Large Tags List
export const TagsListExtraLarge: Story = {
  name: "Tag - Extra Large - Tags List",
  render: () => (
    <div className="flex flex-wrap gap-4 items-start">
      <Tag size="xl" />
      <Tag size="xl" />
      <Tag size="xl" />
      <Tag size="xl" />
    </div>
  ),
};

// Project Tags List
export const ProjectTags: Story = {
  name: "Project Tags - Default",
  args: {
    size: "md",
  },
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-start">
      <ProjectTagsList {...args} />
    </div>
  ),
};

// Project Tags List - Small
export const ProjectTagsSmall: Story = {
  name: "Project Tags - Small",
  args: {
    size: "sm",
  },
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-start">
      <ProjectTagsList {...args} />
    </div>
  ),
};

// Project Tags List - Large
export const ProjectTagsLarge: Story = {
  name: "Project Tags - Large",
  args: {
    size: "lg",
  },
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-start">
      <ProjectTagsList {...args} />
    </div>
  ),
};

// Project Tags List - Extra Large
export const ProjectTagsExtraLarge: Story = {
  name: "Project Tags - Extra Large",
  args: {
    size: "xl",
  },
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-start">
      <ProjectTagsList {...args} />
    </div>
  ),
};
