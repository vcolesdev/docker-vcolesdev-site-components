import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { StyledIcon } from "./StyledIcon";

const meta: Meta<typeof StyledIcon> = {
  component: StyledIcon,
  title: "Components/StyledIcon",
  argTypes: {
    color: {
      control: {
        type: "color",
      },
    },
    currentIcon: {
      control: {
        type: "text",
      },
    },
    size: {
      control: {
        type: "number",
      },
    },
    stroke: {
      control: {
        type: "number",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof StyledIcon>;

// Playground
export const Playground: Story = {
  args: {
    currentIcon: "IconBrandGithub",
  },
  render: (args) => <StyledIcon {...args} />,
};

// Default
export const Default: Story = {
  args: {
    currentIcon: "IconBrandGithub",
  },
  render: (args) => <StyledIcon {...args} />,
};

// Site Icons
export const SiteIcons: Story = {
  render: (args) => (
    <div className="flex">
      <span className="me-4">
        <StyledIcon srOnlyText="Github" currentIcon="IconBrandGithub" {...args} />
      </span>
      <span className="me-4">
        <StyledIcon srOnlyText="LinkedIn" currentIcon="IconBrandLinkedin" {...args} />
      </span>
      <span>
        <StyledIcon srOnlyText="Email Me" currentIcon="IconMessage2" {...args} />
      </span>
    </div>
  ),
};
