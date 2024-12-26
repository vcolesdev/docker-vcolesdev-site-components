import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Button, ButtonApi } from "./Button";

const ButtonArgs = {
  children: "View Projects",
} as ButtonApi;

const ButtonArgTypes = {
  variant: {
    control: {
      type: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
  },
} as const;

const meta: Meta<typeof Button> = {
  title: "Controls/Button",
  component: Button,
  args: ButtonArgs,
  argTypes: ButtonArgTypes,
  render: (args: ButtonApi) => <Button {...args} />,
};
export default meta;
type Story = StoryObj<typeof Button>;

// Default
export const Default: Story = {
  args: ButtonArgs,
};

// Variants
export const Variants: Story = {
  render: (args) => (
    <div className="flex space-x-4">
      <Button variant="default" {...args}>
        Primary
      </Button>
      <Button variant="secondary" {...args}>
        Secondary
      </Button>
      <Button variant="destructive" {...args}>
        Destructive
      </Button>
      <Button variant="outline" {...args}>
        Outline
      </Button>
      <Button variant="ghost" {...args}>
        Ghost
      </Button>
      <Button variant="link" {...args}>
        Link
      </Button>
    </div>
  ),
};

// Destructive
export const Destructive: Story = {
  args: {
    ...ButtonArgs,
    variant: "destructive",
  },
};

// Outline
export const Outline: Story = {
  args: {
    ...ButtonArgs,
    variant: "outline",
  },
};

// Secondary
export const Secondary: Story = {
  args: {
    ...ButtonArgs,
    variant: "secondary",
  },
};

// Ghost
export const Ghost: Story = {
  args: {
    ...ButtonArgs,
    variant: "ghost",
  },
};

// Link
export const Link: Story = {
  args: {
    ...ButtonArgs,
    variant: "link",
  },
};

// Small
export const Small: Story = {
  args: {
    ...ButtonArgs,
    size: "sm",
  },
};

// Large
export const Large: Story = {
  args: {
    ...ButtonArgs,
    size: "lg",
  },
};
