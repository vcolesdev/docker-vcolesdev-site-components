import { Heading } from "@/stories/Typography/Heading/Heading";
import { HeadingApi } from "@/stories/Typography/Heading/Heading.api";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const HEADING_CONTENT = `Check Out My Recent Posts`;

const HeadingArgs = {
  children: HEADING_CONTENT,
  extraClassnames: "",
  italic: false,
  level: 2,
  size: "lg",
} as HeadingApi;

const HeadingArgTypes = {
  size: {
    control: {
      type: "radio",
    },
    options: ["xs", "sm", "md", "lg", "xl"],
  },
  level: {
    control: {
      type: "range",
    },
    min: 1,
    max: 6,
    step: 1,
  },
} as const;

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: "Typography/Heading",
  args: HeadingArgs,
  argTypes: HeadingArgTypes,
  render: (args: HeadingApi) => {
    return <Heading {...args} />;
  },
};
export default meta;
type Story = StoryObj<typeof Heading>;

// Default
export const Default: Story = {
  name: "Default",
  args: {
    children: HEADING_CONTENT,
    size: "lg",
    level: 2,
  },
};

// H1
export const Heading1: Story = {
  name: "Heading 1",
  args: {
    children: HEADING_CONTENT,
    size: "xl",
    level: 1,
  },
};

// H2
export const Heading2: Story = {
  name: "Heading 2",
  args: {
    children: HEADING_CONTENT,
    size: "lg",
    level: 2,
  },
};

// H3
export const Heading3: Story = {
  name: "Heading 3",
  args: {
    children: HEADING_CONTENT,
    size: "md",
    level: 3,
  },
};

// H4
export const Heading4: Story = {
  name: "Heading 4",
  args: {
    children: HEADING_CONTENT,
    size: "sm",
    level: 4,
  },
};

// H5
export const Heading5: Story = {
  name: "Heading 5",
  args: {
    children: HEADING_CONTENT,
    size: "xs",
    level: 5,
  },
};

// H6
export const Heading6: Story = {
  name: "Heading 6",
  args: {
    children: HEADING_CONTENT,
    size: "xs",
    level: 6,
  },
};

export const Headings: Story = {
  name: "Headings - All",
  args: {
    children: HEADING_CONTENT,
  },
  render: (args) => (
    <>
      <div className="mb-10">
        <Heading level={1} size="xl">
          {args.children}
        </Heading>
      </div>
      <div className="mb-10">
        <Heading level={2} size="lg">
          {args.children}
        </Heading>
      </div>
      <div className="mb-10">
        <Heading level={3} size="md">
          {args.children}
        </Heading>
      </div>
      <div className="mb-10">
        <Heading level={4} size="sm">
          {args.children}
        </Heading>
      </div>
      <div className="mb-10">
        <Heading level={5} size="xs">
          {args.children}
        </Heading>
      </div>
      <div className="mb-10">
        <Heading level={6} size="xs">
          {args.children}
        </Heading>
      </div>
    </>
  ),
};

export const ItalicHeadings: Story = {
  name: "Italic Headings - All",
  render: (args) => (
    <>
      <div className="mb-10">
        <Heading italic level={1} size="xl">
          {args.children}
        </Heading>
      </div>
      <div className="mb-10">
        <Heading italic level={2} size="lg">
          {args.children}
        </Heading>
      </div>
      <div className="mb-10">
        <Heading italic level={3} size="md">
          {args.children}
        </Heading>
      </div>
      <div className="mb-10">
        <Heading italic level={4} size="sm">
          {args.children}
        </Heading>
      </div>
      <div className="mb-10">
        <Heading italic level={5} size="xs">
          {args.children}
        </Heading>
      </div>
      <div className="mb-10">
        <Heading italic level={6} size="xs">
          {args.children}
        </Heading>
      </div>
    </>
  ),
};
