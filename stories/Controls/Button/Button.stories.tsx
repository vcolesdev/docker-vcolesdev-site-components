import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Spacer } from "@/stories/Spacer/Spacer";
import { Button } from "./index";

const SIZE_OPTS = ["sm", "md", "lg", "xl"] as const;
const VARIANT_OPTS = ["default", "primary", "secondary", "ghost", "outlined"] as const;

/**
 * Get the default args for the story
 * @function getDefaultArgs
 */
const getDefaultArgs = () =>
  ({
    children: "Button",
    size: "md",
    variant: "default",
  }) as const;

/**
 * Get the arg types for the story
 * @function getArgTypes
 */
const getArgTypes = () =>
  ({
    size: {
      control: { type: "select" },
      options: SIZE_OPTS,
    },
    variant: {
      control: { type: "select" },
      options: VARIANT_OPTS,
    },
  }) as const;

/**
 * Button Story Definitions
 */
const meta: Meta<typeof Button> = {
  component: Button,
  title: "Controls/Button",
  args: getDefaultArgs(),
  argTypes: getArgTypes(),
  render: (args) => <Button {...args} />,
};

export default meta;

type Story = StoryObj<typeof Button>;

/**
 * Default
 */
export const Default: Story = {
  args: {
    variant: "primary",
    size: "md",
  },
};

/**
 * Primary
 */
export const Primary: Story = {
  args: {
    children: "View Projects",
    size: "md",
    type: "button",
    variant: "primary",
  },
};

/**
 * Secondary
 */
export const Secondary: Story = {
  args: {
    children: "View Resume",
    variant: "secondary",
  },
};

/**
 * Ghost
 */
export const Ghost: Story = {
  args: {
    children: "View Projects",
    size: "md",
    variant: "ghost",
  },
};

/**
 * Outlined
 */
export const Outlined: Story = {
  args: {
    children: "Some Action",
    size: "md",
    variant: "outlined",
  },
};

/**
 * Small
 */
export const Small: Story = {
  args: {
    children: "Small Button",
    size: "sm",
    variant: "primary",
  },
};

/**
 * Medium
 */
export const Medium: Story = {
  args: {
    children: "Medium Button",
    size: "md",
    variant: "primary",
  },
};

/**
 * Large
 */
export const Large: Story = {
  args: {
    children: "Large Button",
    size: "lg",
    variant: "primary",
  },
};

/**
 * Extra Large
 */
export const ExtraLarge: Story = {
  args: {
    children: "Featured Story",
    size: "xl",
    variant: "primary",
  },
};

export const FullWidthSizes: Story = {
  render: () => {
    return (
      <>
        <div className="flex flex-col space-y-6">
          {SIZE_OPTS.map((size) => (
            <div className="inline-block" key={size}>
              <Button size={size} variant="primary">
                Featured Post
              </Button>
            </div>
          ))}
        </div>
        <Spacer size="lg" />
        <div className="flex flex-col space-y-6">
          {SIZE_OPTS.map((size) => (
            <Button key={size} size={size} variant="primary">
              Featured Post
            </Button>
          ))}
        </div>
      </>
    );
  },
};
