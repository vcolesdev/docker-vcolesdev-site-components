import { iconPaths as paths } from "@/src/anim/iconPaths";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { AnimatedIcon } from "./AnimatedIcon";

const meta: Meta<typeof AnimatedIcon> = {
  component: AnimatedIcon,
  title: "Components/AnimatedIcon",
  args: {
    iconName: "brand-github",
    paths: paths.github,
    size: 32,
  },
  argTypes: {
    size: {
      control: {
        type: "number",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof AnimatedIcon>;

/**
 * Default
 */
export const Default: Story = {
  render: (args) => <AnimatedIcon {...args} />,
};

/**
 * Github
 */
export const Github: Story = {
  args: {
    iconName: "brand-github",
    paths: paths.github,
  },
  render: (args) => <AnimatedIcon {...args} />,
};

/**
 * LinkedIn
 */
export const LinkedIn: Story = {
  args: {
    iconName: "brand-linkedin",
    paths: paths.linkedin,
  },
  render: (args) => <AnimatedIcon {...args} />,
};

/**
 * Message
 */
export const Message: Story = {
  args: {
    iconName: "message-share",
    paths: paths.message,
  },
  render: (args) => <AnimatedIcon {...args} />,
};

/**
 * JavaScript
 */
export const JavaScript: Story = {
  args: {
    iconName: "brand-javascript",
    paths: paths.javascript,
  },
  render: (args) => <AnimatedIcon {...args} />,
};

/**
 * Brand - NextJS
 */
export const NextJS: Story = {
  args: {
    iconName: "brand-nextjs",
    paths: paths.nextJs,
  },
  render: (args) => <AnimatedIcon {...args} />,
};

/**
 * Brand - Python
 */
export const Python: Story = {
  args: {
    iconName: "brand-python",
    paths: paths.python,
  },
  render: (args) => <AnimatedIcon {...args} />,
};

/**
 * Brand - ReactJS
 */
export const ReactJS: Story = {
  args: {
    iconName: "brand-react",
    paths: paths.react,
  },
  render: (args) => <AnimatedIcon {...args} />,
};

/**
 * Brand - Storybook
 */
export const Storybook: Story = {
  args: {
    iconName: "brand-storybook",
    paths: paths.storybook,
  },
  render: (args) => <AnimatedIcon {...args} />,
};

/**
 * Brand - TailwindCSS
 */
export const TailwindCSS: Story = {
  args: {
    iconName: "brand-tailwindcss",
    paths: paths.tailwindcss,
  },
  render: (args) => <AnimatedIcon {...args} />,
};

/**
 * Brand - TypeScript
 */
export const Typescript: Story = {
  args: {
    iconName: "brand-typescript",
    paths: paths.typescript,
  },
  render: (args) => <AnimatedIcon {...args} />,
};
