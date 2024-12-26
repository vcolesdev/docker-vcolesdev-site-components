import { Heading as DemoHeading } from "@/stories/Typography/Heading/Heading";
import { Spacer } from "@/stories/Typography/Spacer/Spacer";
import type { SpacerApi } from "@/stories/Typography/Spacer/Spacer";
import { Text as DemoTextContent } from "@/stories/Typography/Text/Text";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const SpacerArgs = {
  hasDemoBackground: true,
  hasDemoBorder: true,
  size: "md",
} as SpacerApi;

const SpacerArgTypes = {
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
} as const;

const meta: Meta<typeof Spacer> = {
  component: Spacer,
  title: "Layout/Spacer",
  subcomponents: { DemoHeading, DemoTextContent },
  args: SpacerArgs,
  argTypes: SpacerArgTypes,
};
export default meta;
type Story = StoryObj<typeof Spacer>;

// Playground
export const Playground: Story = {
  name: "Layout - Spacer",
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
  name: "Layout - Spacer",
  args: {},
  render: (args) => <Spacer {...args} />,
};

// XS
export const SizeXS: Story = {
  name: "Spacer - XS",
  args: {
    size: "xs",
  },
  render: (args) => <Spacer {...args} />,
};

// SM
export const SizeSM: Story = {
  name: "Spacer - SM",
  args: {
    size: "sm",
  },
  render: (args) => <Spacer {...args} />,
};

// MD
export const SizeMD: Story = {
  name: "Spacer - MD",
  args: {
    size: "md",
  },
  render: (args) => <Spacer {...args} />,
};

// LG
export const SizeLG: Story = {
  name: "Spacer - LG",
  args: {
    size: "lg",
  },
  render: (args) => <Spacer {...args} />,
};

// XL

export const SizeXL: Story = {
  name: "Spacer - XL",
  args: {
    size: "xl",
  },
  render: (args) => <Spacer {...args} />,
};

// 2X
export const Size2X: Story = {
  name: "Spacer - 2X",
  args: {
    size: "2x",
  },
  render: (args) => <Spacer {...args} />,
};

// 3X
export const Size3X: Story = {
  name: "Spacer - 3X",
  args: {
    size: "3x",
  },
  render: (args) => <Spacer {...args} />,
};

// 4X
export const Size4X: Story = {
  name: "Spacer - 4X",
  args: {
    size: "4x",
  },
  render: (args) => <Spacer {...args} />,
};

// 5X
export const Size5X: Story = {
  name: "Spacer - 5X",
  args: {
    size: "5x",
  },
  render: (args) => <Spacer {...args} />,
};
