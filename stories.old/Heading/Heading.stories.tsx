import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Spacer } from "../Spacer/Spacer";
import { SizeMD } from "../Spacer/Spacer.stories";
import { Heading } from "./Heading";

const headingContent = `Check Out My Recent Posts`;

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: "Text/Heading",
  subcomponents: { Spacer },
  args: {
    children: headingContent,
    size: "md",
    el: "h2",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg", "xl"],
    },
    el: {
      control: {
        type: "select",
      },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Heading>;

// Default
export const Playground: Story = {
  args: {
    el: "h2",
    size: "md",
  },
  render: (args) => (
    <>
      <Heading {...args}>{headingContent}</Heading>
      <Spacer size="md" {...SizeMD.args} />
    </>
  ),
};

// H1
export const Heading1: Story = {
  args: {
    el: "h1",
    size: "xl",
  },
  render: (args) => (
    <>
      <Heading {...args}>{headingContent}</Heading>
      <Spacer size="md" {...SizeMD.args} />
    </>
  ),
};

// H2
export const Heading2: Story = {
  args: {
    el: "h2",
    size: "lg",
  },
  render: (args) => (
    <>
      <Heading {...args}>{headingContent}</Heading>
      <Spacer size="md" {...SizeMD.args} />
    </>
  ),
};

// H3
export const Heading3: Story = {
  args: {
    el: "h3",
    size: "md",
  },
  render: (args) => (
    <>
      <Heading {...args}>{headingContent}</Heading>
      <Spacer size="md" {...SizeMD.args} />
    </>
  ),
};

// H4
export const Heading4: Story = {
  args: {
    el: "h4",
    size: "sm",
  },
  render: (args) => (
    <>
      <Heading {...args}>{headingContent}</Heading>
      <Spacer size="md" {...SizeMD.args} />
    </>
  ),
};

// H5
export const Heading5: Story = {
  args: {
    el: "h5",
    size: "xs",
  },
  render: (args) => (
    <>
      <Heading {...args}>{headingContent}</Heading>
      <Spacer size="md" {...SizeMD.args} />
    </>
  ),
};
