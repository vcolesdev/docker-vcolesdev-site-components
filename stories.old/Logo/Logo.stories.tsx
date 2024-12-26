import type { Meta, StoryObj } from "@storybook/react";

import { Logo } from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "Components/Logo",
  component: Logo,
  args: {
    size: "md",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

// Default
export const Default: Story = {
  render: (args) => <Logo {...args} />,
};

// Small
export const Small: Story = {
  args: {
    size: "sm",
  },
  render: (args) => <Logo {...args} />,
};

// Large
export const Large: Story = {
  args: {
    size: "lg",
  },
  render: (args) => <Logo {...args} />,
};
