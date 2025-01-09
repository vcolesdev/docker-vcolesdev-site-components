import { Category, CategoryApi, ProjectCategoriesList } from "@/stories/Components/Category/Category";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const CategoryArgs = {
  name: "Category",
  hasIcon: false,
  currentIcon: "IconChevronRight",
} as CategoryApi;

const CategoryArgTypes = {} as const;

const meta: Meta<typeof Category> = {
  title: "Components/Category",
  component: Category,
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
  args: CategoryArgs,
  argTypes: CategoryArgTypes,
  render: (args: CategoryApi) => <Category {...args} />,
};
export default meta;
type Story = StoryObj<typeof Category>;

// Default
export const Default: Story = {
  render: (args) => <Category {...args} />,
};

// Example - TypeScript
export const Example: Story = {
  name: "Example - TypeScript",
  args: {
    name: "TypeScript",
  },
  render: (args) => <Category {...args} />,
};

// Project Categories List
export const ProjectCategoriesListDefault: Story = {
  name: "Project Categories - Default",
  args: {
    hasIcon: false,
  },
  render: (args) => <ProjectCategoriesList {...args} />,
};

// Project Categories List - With Icon
export const ProjectCategories: Story = {
  name: "Project Categories - With Icon",
  args: {
    hasIcon: true,
    currentIcon: "IconChevronRight",
  },
  render: (args) => <ProjectCategoriesList {...args} />,
};
