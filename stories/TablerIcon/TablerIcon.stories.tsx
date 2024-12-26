import { TablerIcon, TablerIconApi } from "@/stories/TablerIcon/TablerIcon";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const TablerIconArgs = {
  currentIcon: "IconAlien" as TablerIconApi["currentIcon"],
  color: "currentColor",
  size: 24,
  stroke: 2,
  title: "",
  //viewBox: `0 0 24 24`,
} as TablerIconApi;

const TablerIconArgTypes = {
  color: {
    control: {
      type: "color",
    },
  },
  currentIcon: {
    control: {
      type: "select",
    },
    options: [
      "IconAlien",
      "IconChevronLeft",
      "IconChevronRight",
      "IconMenu",
      "IconBrandGithub",
      "IconBrandJavascript",
      "IconBrandNextjs",
      "IconBrandPython",
      "IconBrandReact",
      "IconBrandStorybook",
      "IconBrandTypescript",
    ],
    defaultValue: "IconAlien",
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
} as const;

const meta: Meta<typeof TablerIcon> = {
  component: TablerIcon,
  title: "Components/TablerIcon",
  args: TablerIconArgs,
  argTypes: TablerIconArgTypes,
};
export default meta;
type Story = StoryObj<typeof TablerIcon>;

// Default
export const Default: Story = {
  name: "TablerIcon",
  render: (args) => <TablerIcon {...args} />,
};

// Small
export const Small: Story = {
  name: "Icon - Small",
  args: {
    size: 16,
  },
  render: (args) => <TablerIcon {...args} />,
};

// Medium
export const Medium: Story = {
  name: "Icon - Medium",
  args: {
    size: 24,
  },
  render: (args) => <TablerIcon {...args} />,
};

// Large
export const Large: Story = {
  name: "Icon - Large",
  args: {
    size: 32,
    stroke: 1.5,
  },
  render: (args) => <TablerIcon {...args} />,
};

// Extra Large
export const ExtraLarge: Story = {
  name: "Icon - Extra Large",
  args: {
    size: 48,
    stroke: 1.5,
  },
  render: (args) => <TablerIcon {...args} />,
};

// 2X Large
export const TwoXLarge: Story = {
  name: "Icon - 2X Large",
  args: {
    size: 64,
    stroke: 1,
  },
  render: (args) => <TablerIcon {...args} />,
};

// Icon - Chevron Left
export const ChevronLeft: Story = {
  name: "Icon - Chevron Left",
  args: {
    currentIcon: "IconChevronLeft",
  },
  render: (args) => <TablerIcon {...args} />,
};

// Icon - Chevron Right
export const ChevronRight: Story = {
  name: "Icon - Chevron Right",
  args: {
    currentIcon: "IconChevronRight",
  },
  render: (args) => <TablerIcon {...args} />,
};

// Icon - Menu
export const Menu: Story = {
  name: "Icon - Menu",
  args: {
    currentIcon: "IconMenu",
  },
  render: (args) => <TablerIcon {...args} />,
};

// Brand - GitHub
export const BrandGitHub: Story = {
  name: "Icon - GitHub",
  args: {
    currentIcon: "IconBrandGithub",
  },
  render: (args) => <TablerIcon {...args} />,
};

// Brand - JavaScript
export const BrandJavaScript: Story = {
  name: "Icon - JavaScript",
  args: {
    currentIcon: "IconBrandJavascript",
  },
  render: (args) => <TablerIcon {...args} />,
};

// Brand - Next.js
export const BrandNextJS: Story = {
  name: "Icon - NextJS",
  args: {
    currentIcon: "IconBrandNextjs",
  },
  render: (args) => <TablerIcon {...args} />,
};

// Brand - Python
export const BrandPython: Story = {
  name: "Icon - Python",
  args: {
    currentIcon: "IconBrandPython",
  },
  render: (args) => <TablerIcon {...args} />,
};

// Brand - React
export const BrandReact: Story = {
  name: "Icon - React",
  args: {
    currentIcon: "IconBrandReact",
  },
  render: (args) => <TablerIcon {...args} />,
};

// Brand - Storybook
export const BrandStorybook: Story = {
  name: "Icon - Storybook",
  args: {
    currentIcon: "IconBrandStorybook",
  },
  render: (args) => <TablerIcon {...args} />,
};

// Brand - TypeScript
export const BrandTypeScript: Story = {
  name: "Icon - TypeScript",
  args: {
    currentIcon: "IconBrandTypescript",
  },
  render: (args) => <TablerIcon {...args} />,
};
