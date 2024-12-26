import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { StyledLink } from "./StyledLink";

const meta: Meta<typeof StyledLink> = {
  component: StyledLink,
  title: "Text/StyledLink",
};

export default meta;

type Story = StoryObj<typeof StyledLink>;

// Playground
export const Playground: Story = {
  render: () => <StyledLink link="/" linkText="Styled Link" />,
};

// Example Link
export const ExampleLink: Story = {
  render: () => <StyledLink link="/" linkText="Example Link" />,
};
