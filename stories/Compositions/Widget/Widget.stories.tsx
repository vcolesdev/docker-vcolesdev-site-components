import { ProjectCategoriesList } from "@/stories/Components/Category/Category";
import { ProjectTagsList } from "@/stories/Components/Tag/Tag";
import type { WidgetApi } from "@/stories/Compositions/Widget/Widget";
import { Widget } from "@/stories/Compositions/Widget/Widget";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const WidgetArgs = {
  hasExampleTextContent: false,
  hasTitleIcon: false,
  currentIcon: "IconLayoutSidebar",
  title: "Example Widget",
} as WidgetApi;

const WidgetArgTypes = {} as const;

const meta: Meta<typeof Widget> = {
  title: "Compositions/Widget",
  component: Widget,
  parameters: {
    deepControls: { enabled: true },
  },
  decorators: [
    (Story) => (
      <div className="bg-light-elevated dark:bg-dark-elevated">
        <div className="p-8">
          <Story />
        </div>
      </div>
    ),
  ],
  args: WidgetArgs,
  argTypes: WidgetArgTypes,
  render: (args: WidgetApi) => <Widget {...args} />,
};
export default meta;
type Story = StoryObj<typeof Widget>;

// Default Example
export const Default: Story = {
  args: {
    hasExampleTextContent: true,
    title: "Example Widget",
  },
  render: (args) => <Widget {...args} />,
};

// Default Example - With Icon
export const WithIcon: Story = {
  args: {
    currentIcon: "IconPencil",
    hasExampleTextContent: true,
    hasTitleIcon: true,
    title: "Example Widget",
  },
  render: (args) => <Widget {...args} />,
};

// Default Example - With Description
export const WithDescription: Story = {
  args: {
    description: "This is a description for the widget.",
    hasExampleTextContent: true,
    title: "Example Widget",
  },
  render: (args) => <Widget {...args} />,
};

// Default Example - With Icon and Description
export const WithIconAndDescription: Story = {
  args: {
    currentIcon: "IconPencil",
    description: "This is a description for the widget.",
    hasExampleTextContent: true,
    hasTitleIcon: true,
    title: "Example Widget",
  },
  render: (args) => <Widget {...args} />,
};

// Widget - Project Categories
export const WidgetProjectCategories: Story = {
  name: "Widget - Project Categories",
  args: {
    currentIcon: "IconLayoutSidebar",
    hasTitleIcon: true,
    id: "widgetProjectCategories",
    title: "Categories",
  },
  render: (args) => (
    <Widget title="Categories" {...args}>
      <ProjectCategoriesList hasIcon />
    </Widget>
  ),
};

// Widget - Project Tags
export const WidgetProjectTags: Story = {
  name: "Widget - Project Tags",
  args: {
    currentIcon: "IconTag",
    hasTitleIcon: true,
    id: "widgetProjectTags",
    title: "Project Tags",
  },
  render: (args) => (
    <Widget title="Project Tags" {...args}>
      <div className="flex flex-wrap gap-2 items-start">
        <ProjectTagsList size="md" />
      </div>
    </Widget>
  ),
};

// Widgets Group
export const WidgetsGroup: Story = {
  name: "Widgets Group",
  render: () => (
    <div className="grid grid-cols-1 gap-10">
      <Widget hasTitleIcon hasExampleTextContent currentIcon="IconPencil" />
      <Widget hasTitleIcon currentIcon="IconLayoutSidebar" title="Categories">
        <ProjectCategoriesList hasIcon />
      </Widget>
      <Widget hasTitleIcon currentIcon="IconTag" title="Project Tags">
        <div className="flex flex-wrap gap-2 items-start">
          <ProjectTagsList size="md" />
        </div>
      </Widget>
    </div>
  ),
};

// Widgets Group - With Description
export const WidgetsGroupWithDescription: Story = {
  name: "Widgets Group - With Description",
  render: () => (
    <div className="grid grid-cols-1 gap-10">
      <Widget
        hasTitleIcon
        hasExampleTextContent
        currentIcon="IconPencil"
        description="This is a description for the widget."
        id="widgetText"
      />
      <Widget
        hasTitleIcon
        currentIcon="IconLayoutSidebar"
        description="This is a description for the widget."
        id="widgetCategories"
        title="Categories"
      >
        <ProjectCategoriesList hasIcon />
      </Widget>
      <Widget
        hasTitleIcon
        currentIcon="IconTag"
        description="This is a description for the widget."
        id="widgetTags"
        title="Project Tags"
      >
        <div className="flex flex-wrap gap-2 items-start">
          <ProjectTagsList size="md" />
        </div>
      </Widget>
    </div>
  ),
};
