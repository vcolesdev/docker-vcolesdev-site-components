import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Heading as DemoHeading } from "../Heading/Heading";
import { TextContent as DemoTextContent } from "../TextContent/TextContent";
import { Spacer } from "./Spacer";

const meta: Meta<typeof Spacer> = {
  component: Spacer,
  title: "Layout/Spacer",
  subcomponents: { DemoHeading, DemoTextContent },
  args: {
    hasDemoBackground: true,
    hasDemoBorder: true,
    size: "md",
  },
  argTypes: {
    hasDemoBackground: {
      control: {
        type: "boolean",
      },
    },
    hasDemoBorder: {
      control: {
        type: "boolean",
      },
    },
    size: {
      control: {
        type: "select",
      },
      options: ["xs", "sm", "md", "lg", "xl", "2x", "3x", "4x", "5x"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Spacer>;

// Playground
export const Playground: Story = {
  args: {},
  render: (args) => (
    <>
      <DemoHeading>This is an Attention Grabbing Title</DemoHeading>
      <Spacer {...args} />
      <DemoTextContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </DemoTextContent>
      <Spacer {...args} />
      <DemoHeading>This is an Attention Grabbing Title</DemoHeading>
      <Spacer {...args} />
      <DemoTextContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </DemoTextContent>
      <Spacer {...args} />
      <DemoHeading>This is an Attention Grabbing Title</DemoHeading>
      <Spacer {...args} />
      <DemoTextContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </DemoTextContent>
    </>
  ),
};

// Default
export const Default: Story = {
  args: {},
  render: (args) => <Spacer {...args} />,
};

// XS
export const SizeXS: Story = {
  args: {
    size: "xs",
  },
  render: (args) => <Spacer {...args} />,
};

// SM
export const SizeSM: Story = {
  args: {
    size: "sm",
  },
  render: (args) => <Spacer {...args} />,
};

// MD
export const SizeMD: Story = {
  args: {
    size: "md",
  },
  render: (args) => <Spacer {...args} />,
};

// LG
export const SizeLG: Story = {
  args: {
    size: "lg",
  },
  render: (args) => <Spacer {...args} />,
};

// XL

export const SizeXL: Story = {
  args: {
    size: "xl",
  },
  render: (args) => <Spacer {...args} />,
};

// 2X
export const Size2X: Story = {
  args: {
    size: "2x",
  },
  render: (args) => <Spacer {...args} />,
};

// 3X
export const Size3X: Story = {
  args: {
    size: "3x",
  },
  render: (args) => <Spacer {...args} />,
};

// 4X
export const Size4X: Story = {
  args: {
    size: "4x",
  },
  render: (args) => <Spacer {...args} />,
};

// 5X
export const Size5X: Story = {
  args: {
    size: "5x",
  },
  render: (args) => <Spacer {...args} />,
};
