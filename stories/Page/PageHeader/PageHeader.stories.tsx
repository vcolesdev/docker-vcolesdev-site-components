import type { Meta, StoryObj } from "@storybook/react";

import { PageHeader } from "./PageHeader";

const meta: Meta<typeof PageHeader> = {
  component: PageHeader,
  title: "Text/PageHeader",
  args: {
    hasSubheading: true,
    subheading: "This is a Page Subheading",
    title: "Page Header",
  },
};

export default meta;

type Story = StoryObj<typeof PageHeader>;

// Default
export const Default: Story = {
  render: (args) => <PageHeader {...args} />,
};

// No Subheading
export const NoSubheading: Story = {
  args: {
    hasSubheading: false,
  },
  render: (args) => <PageHeader {...args} />,
};
