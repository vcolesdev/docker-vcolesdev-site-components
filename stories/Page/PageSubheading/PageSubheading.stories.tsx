import type { Meta, StoryObj } from "@storybook/react";

import { PageSubheading } from "./PageSubheading";

const meta: Meta<typeof PageSubheading> = {
  component: PageSubheading,
  title: "Text/PageSubheading",
  args: {
    children: "This is a Page Subheading",
  },
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PageSubheading>;

// Default
export const Default: Story = {
  render: (args) => <PageSubheading {...args}>{args.children}</PageSubheading>,
};
