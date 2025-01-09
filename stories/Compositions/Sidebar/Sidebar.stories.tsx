import { ProjectCategoriesList } from "@/stories/Components/Category/Category";
import { ProjectTagsList } from "@/stories/Components/Tag/Tag";
import type { SidebarApi } from "@/stories/Compositions/Sidebar/Sidebar";
import { Sidebar } from "@/stories/Compositions/Sidebar/Sidebar";
import { Widget } from "@/stories/Compositions/Widget/Widget";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const exampleDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`;

const SidebarArgs = {} as SidebarApi;

const SidebarArgTypes = {} as const;

const meta: Meta<typeof Sidebar> = {
  title: "Compositions/Sidebar",
  component: Sidebar,
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
  args: SidebarArgs,
  argTypes: SidebarArgTypes,
  render: (args: SidebarApi) => <Sidebar {...args} />,
};
export default meta;
type Story = StoryObj<typeof Sidebar>;

// Default
export const Default: Story = {
  args: {
    title: "Blog Sidebar",
  },
  render: (args) => <Sidebar {...args} />,
};

// Example - With Text Widget
export const Example: Story = {
  name: "Example - With Text Widget",
  args: {
    title: "Blog Sidebar",
  },
  render: (args) => (
    <Sidebar {...args}>
      <div className="grid grid-cols-1 gap-10">
        <Widget hasTitleIcon hasExampleTextContent currentIcon="IconPencil" />
      </div>
    </Sidebar>
  ),
};

// Example - With Categories Widget
export const ExampleCategories: Story = {
  name: "Example - With Categories Widget",
  args: {
    title: "Blog Sidebar",
  },
  render: (args) => (
    <Sidebar {...args}>
      <div className="grid grid-cols-1 gap-10">
        <Widget hasTitleIcon currentIcon="IconLayoutSidebar" title="Categories">
          <ProjectCategoriesList hasIcon />
        </Widget>
      </div>
    </Sidebar>
  ),
};

// Example - With Tags Widget
export const ExampleTags: Story = {
  name: "Example - With Tags Widget",
  args: {
    title: "Blog Sidebar",
  },
  render: (args) => (
    <Sidebar {...args}>
      <div className="grid grid-cols-1 gap-10">
        <Widget hasTitleIcon currentIcon="IconTag" title="Project Tags">
          <div className="flex flex-wrap gap-2 items-start">
            <ProjectTagsList size="md" />
          </div>
        </Widget>
      </div>
    </Sidebar>
  ),
};

// Example - With Widgets Group
export const ExampleWidgetsGroup: Story = {
  name: "Example - With Widgets Group",
  args: {
    title: "Blog Sidebar",
  },
  render: (args) => (
    <Sidebar {...args}>
      <div className="grid grid-cols-1 gap-10">
        <Widget hasTitleIcon hasExampleTextContent currentIcon="IconPencil" description={exampleDescription} />
        <Widget hasTitleIcon currentIcon="IconLayoutSidebar" description={exampleDescription} title="Categories">
          <ProjectCategoriesList hasIcon />
        </Widget>
        <Widget hasTitleIcon currentIcon="IconTag" description={exampleDescription} title="Project Tags">
          <div className="flex flex-wrap gap-2 items-start">
            <ProjectTagsList size="md" />
          </div>
        </Widget>
      </div>
    </Sidebar>
  ),
};
