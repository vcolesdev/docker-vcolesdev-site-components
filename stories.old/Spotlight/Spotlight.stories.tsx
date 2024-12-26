import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Spotlight } from "./Spotlight";

const meta: Meta<typeof Spotlight> = {
  component: Spotlight,
  title: "Site/Spotlight",
  args: {
    children:
      "But you can call me Van. 👋🏼 I'm a Full-Stack Engineer based in sunny San Diego, CA. I have over a decade of industry experience and have worked with various languages and stacks, currently enjoying working with React, Node, Python, and MongoDB.",
    eyebrowText: "Thank You for Stopping By",
    headingText: "Hi, I'm Vanessa",
    imageDesc: "A fox jumping over a dog",
  },
};

export default meta;

type Story = StoryObj<typeof Spotlight>;

// Default
export const Default: Story = {
  render: (args) => <Spotlight {...args}>{args.children}</Spotlight>,
};
