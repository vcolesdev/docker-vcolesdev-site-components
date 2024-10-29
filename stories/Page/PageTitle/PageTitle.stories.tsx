import { PageTitle } from "@/stories/Page/PageTitle/PageTitle";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PageTitle> = {
  component: PageTitle,
  title: "Page/PageTitle",
  args: {
    children: "Page Title",
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

type Story = StoryObj<typeof PageTitle>;

// Default
export const Default: Story = {
  render: (args) => <PageTitle {...args}>{args.children}</PageTitle>,
};
