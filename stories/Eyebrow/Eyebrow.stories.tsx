import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Eyebrow, EyebrowApi, EyebrowIconEnd, EyebrowIconOnly, EyebrowIconStart } from "./Eyebrow";

const meta: Meta<typeof Eyebrow> = {
  component: Eyebrow,
  title: "Text/Eyebrow",
  args: {
    content: "Check Out My Recent Posts",
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Eyebrow>;

// Playground
export const Playground: Story = {
  render: (args) => (
    <>
      <Eyebrow {...args} />
    </>
  ),
};

// Default
export const Default: Story = {
  render: (args) => (
    <>
      <Eyebrow {...args} />
    </>
  ),
};

// Icon Start
export const IconStart: Story = {
  args: {
    eyeIconName: "IconActivity",
    eyeIconSize: 18,
  },
  render: (args: Omit<EyebrowApi, "ref">) => (
    <>
      <EyebrowIconStart {...args} />
    </>
  ),
};

// Icon End
export const IconEnd: Story = {
  args: {
    eyeIconName: "IconActivity",
    eyeIconSize: 18,
  },
  render: (args: Omit<EyebrowApi, "ref">) => (
    <>
      <EyebrowIconEnd {...args} />
    </>
  ),
};

// Icon Only
export const IconOnly: Story = {
  args: {
    eyeIconName: "IconActivity",
    eyeIconSize: 32,
  },
  render: (args: Omit<EyebrowApi, "ref">) => (
    <>
      <EyebrowIconOnly {...args} />
    </>
  ),
};
