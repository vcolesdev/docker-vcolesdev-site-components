import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { TablerIcon } from "./TablerIcon";

const meta: Meta<typeof TablerIcon> = {
  component: TablerIcon,
  title: "Components/TablerIcon",
  args: {
    currentIcon: "IconAlien",
    color: "currentColor",
    size: 24,
    stroke: 2,
    title: "",
    //viewBox: `0 0 24 24`,
  },
  argTypes: {
    color: {
      control: {
        type: "color",
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
    title: {
      control: {
        type: "text",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof TablerIcon>;

// Default
export const Default: Story = {
  render: (args) => <TablerIcon {...args} />,
};

// Small
export const Small: Story = {
  args: {
    size: 16,
  },
  render: (args) => <TablerIcon {...args} />,
};

// Medium
export const Medium: Story = {
  args: {
    size: 24,
  },
  render: (args) => <TablerIcon {...args} />,
};

// Large
export const Large: Story = {
  args: {
    size: 32,
    stroke: 1.5,
  },
  render: (args) => <TablerIcon {...args} />,
};

// Extra Large
export const ExtraLarge: Story = {
  args: {
    size: 48,
    stroke: 1.5,
  },
  render: (args) => <TablerIcon {...args} />,
};

// 2X Large
export const TwoXLarge: Story = {
  args: {
    size: 64,
    stroke: 1,
  },
  render: (args) => <TablerIcon {...args} />,
};

// Icon - Chevron Left
export const ChevronLeft: Story = {
  args: {
    currentIcon: "IconChevronLeft",
  },
  render: (args) => <TablerIcon {...args} />,
};

// Icon - Chevron Right
export const ChevronRight: Story = {
  args: {
    currentIcon: "IconChevronRight",
  },
  render: (args) => <TablerIcon {...args} />,
};

// Icon - Menu
export const Menu: Story = {
  args: {
    currentIcon: "IconMenu",
  },
  render: (args) => <TablerIcon {...args} />,
};

// Brand - GitHub
export const BrandGitHub: Story = {
  args: {
    currentIcon: "IconBrandGithub",
  },
  render: (args) => <TablerIcon {...args} />,
};

// Brand - JavaScript
export const BrandJavaScript: Story = {
  args: {
    currentIcon: "IconBrandJavascript",
  },
  render: (args) => <TablerIcon {...args} />,
};

// Brand - Next.js
export const BrandNextJS: Story = {
  args: {
    currentIcon: "IconBrandNextjs",
  },
  render: (args) => <TablerIcon {...args} />,
};

// Brand - Python
export const BrandPython: Story = {
  args: {
    currentIcon: "IconBrandPython",
  },
  render: (args) => <TablerIcon {...args} />,
};

// Brand - React
export const BrandReact: Story = {
  args: {
    currentIcon: "IconBrandReact",
  },
  render: (args) => <TablerIcon {...args} />,
};

// Brand - Storybook
export const BrandStorybook: Story = {
  args: {
    currentIcon: "IconBrandStorybook",
  },
  render: (args) => <TablerIcon {...args} />,
};

// Brand - TypeScript
export const BrandTypeScript: Story = {
  args: {
    currentIcon: "IconBrandTypescript",
  },
  render: (args) => <TablerIcon {...args} />,
};
