import { Text } from "@/stories/Typography/Text/Text";
import { TextApi } from "@/stories/Typography/Text/Text.api";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const TEXT_CONTENT = `I began my journey into fullstack software engineering in 2010, when I was contracted to work for a local flower shop in
my city. This involved learning many technologies on the fly, including WordPress, Php (which runs WordPress), and
E-Commerce platforms like WooCommerce. JQuery proved a worthy shortcut at the time, though I would feel this later, as I
struggled with JavaScript fundamentals for some time into my career.`;

const TextArgs = {
  children: TEXT_CONTENT,
  element: "p",
  extraClassnames: "",
  //extraStyles: {},
  //italic: false,
  //size: "md",
  //uppercase: false,
  //weight: 400,
} as TextApi;

const TextArgTypes = {
  color: {
    control: {
      type: "color",
    },
  },
  element: {
    control: {
      type: "radio",
    },
    options: ["p", "span", "div"],
  },
  size: {
    control: {
      type: "radio",
    },
    options: ["sm", "md", "lg", "xl", "2xl"],
  },
  styles: {
    control: {
      type: "object",
    },
  },
  weight: {
    control: {
      type: "range",
    },
    min: 200,
    max: 900,
    step: 100,
  },
} as const;

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Typography/Text",
  args: TextArgs,
  argTypes: TextArgTypes,
};
export default meta;
type Story = StoryObj<typeof Text>;

// Default
export const Default: Story = {
  name: "Default",
  args: {
    children: "This is some text content.",
    size: "md",
  },
  render: (args: TextApi) => <Text {...args}>{args.children}</Text>,
};

// Italic
export const Italic: Story = {
  name: "Style - Italic",
  args: {
    children: "This is some text content.",
    italic: true,
    size: "md",
  },
  render: (args: TextApi) => <Text {...args}>{args.children}</Text>,
};

// Uppercase
export const Uppercase: Story = {
  name: "Transform - Uppercase",
  args: {
    children: "This is some text content.",
    extraClassnames: "tracking-wider",
    size: "md",
    uppercase: true,
    weight: 600,
  },
  render: (args: TextApi) => <Text {...args}>{args.children}</Text>,
};

// Small
export const Small: Story = {
  name: "Size - SM",
  render: (args: TextApi) => <Text size="sm">{args.children}</Text>,
};

// Medium
export const Medium: Story = {
  name: "Size - MD",
  render: (args: TextApi) => <Text size="md">{args.children}</Text>,
};

// Large
export const Large: Story = {
  name: "Size - LG",
  render: (args: TextApi) => <Text size="lg">{args.children}</Text>,
};

// Extra Large
export const ExtraLarge: Story = {
  name: "Size - XL",
  render: (args: TextApi) => <Text size="xl">{args.children}</Text>,
};

// 2x Large
export const Large2x: Story = {
  name: "Size - 2xl",
  render: (args: TextApi) => <Text size="2xl">{args.children}</Text>,
};

// All Sizes
export const TextSizes: Story = {
  name: "Sizes - All",
  render: (args: TextApi) => (
    <>
      <div className="mb-10">
        <Text size="sm" {...args}>
          {args.children}
        </Text>
      </div>
      <div className="mb-10">
        <Text size="md" {...args}>
          {args.children}
        </Text>
      </div>
      <div className="mb-10">
        <Text size="lg" {...args}>
          {args.children}
        </Text>
      </div>
      <div className="mb-10">
        <Text size="xl" {...args}>
          {args.children}
        </Text>
      </div>
      <div className="mb-10">
        <Text size="2xl" {...args}>
          {args.children}
        </Text>
      </div>
    </>
  ),
};

// All Weights
export const TextWeights: Story = {
  name: "Weight - All",
  args: {
    children: `Hello, and welcome this space I've cultivated for myself from the ground up here on the internet.`,
    size: "2xl",
  },
  render: (args: TextApi) => (
    <>
      <div className="mb-10">
        <Text weight={200} {...args}>
          {args.children}
        </Text>
      </div>
      <div className="mb-10">
        <Text weight={300} {...args}>
          {args.children}
        </Text>
      </div>
      <div className="mb-10">
        <Text weight={400} {...args}>
          {args.children}
        </Text>
      </div>
      <div className="mb-10">
        <Text weight={500} {...args}>
          {args.children}
        </Text>
      </div>
      <div className="mb-10">
        <Text weight={600} {...args}>
          {args.children}
        </Text>
      </div>
      <div className="mb-10">
        <Text weight={700} {...args}>
          {args.children}
        </Text>
      </div>
      <div className="mb-10">
        <Text weight={800} {...args}>
          {args.children}
        </Text>
      </div>
      <div className="mb-10">
        <Text weight={900} {...args}>
          {args.children}
        </Text>
      </div>
    </>
  ),
};
