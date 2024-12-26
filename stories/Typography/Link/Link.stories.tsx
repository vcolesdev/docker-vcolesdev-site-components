import { Link } from "@/stories/Typography/Link/Link";
import type { LinkApi } from "@/stories/Typography/Link/Link";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const DEFAULT_LONG_TEXT = "https://www.radix-ui.com/themes/docs/theme/typography";

const LinkArgs = {
  children: "View Code on Github",
  iconName: "IconExternalLink",
} as LinkApi;

const LinkArgTypes = {
  hasBorder: {
    control: {
      type: "boolean",
    },
  },
  hasIcon: {
    control: {
      type: "boolean",
    },
  },
} as const;

const meta: Meta = {
  title: "Typography/Link",
  component: Link,
  args: LinkArgs,
  argTypes: LinkArgTypes,
};
export default meta;
type Story = StoryObj<typeof Link>;

// Default
export const Default: Story = {
  name: "Default",
  render: (args) => (
    <Link hasBorder {...args}>
      {args.children}
    </Link>
  ),
};

// Long
export const Long: Story = {
  name: "Link - Long",
  render: () => <Link hasBorder>{DEFAULT_LONG_TEXT}</Link>,
};

// With Icon - Before
export const WithIconBefore: Story = {
  name: "With Icon - Before",
  render: (args) => (
    <Link hasBorder hasIcon iconName="IconExternalLink" iconPos="before">
      {args.children}
    </Link>
  ),
};

// With Icon - After
export const WithIconAfter: Story = {
  name: "With Icon - After",
  render: (args) => (
    <Link hasBorder hasIcon iconName="IconExternalLink" iconPos="after">
      {args.children}
    </Link>
  ),
};

// With Icon - Before - Longer Link
export const WithIconBeforeLong: Story = {
  name: "With Icon - Before - Long",
  render: () => (
    <Link hasBorder hasIcon iconName="IconExternalLink" iconPos="before">
      {DEFAULT_LONG_TEXT}
    </Link>
  ),
};

// With Icon - After - Long
export const WithIconAfterLong: Story = {
  name: "With Icon - After - Long",
  render: () => (
    <Link hasBorder hasIcon iconName="IconExternalLink" iconPos="after">
      {DEFAULT_LONG_TEXT}
    </Link>
  ),
};

// Default - No Border
export const DefaultNoBorder: Story = {
  name: "Default - No Border",
  render: (args) => <Link>{args.children}</Link>,
};

// Long - No Border
export const LongNoBorder: Story = {
  name: "Link - Long - No Border",
  render: () => <Link>{DEFAULT_LONG_TEXT}</Link>,
};

// With Icon - Before - No Border
export const WithIconBeforeNoBorder: Story = {
  name: "With Icon - Before - No Border",
  render: (args) => (
    <Link hasIcon iconName="IconExternalLink" iconPos="before">
      {args.children}
    </Link>
  ),
};

// With Icon - Before - Long - No Border
export const WithIconBeforeLongNoBorder: Story = {
  name: "With Icon - Before - Long - No Border",
  render: () => (
    <Link hasIcon iconName="IconExternalLink" iconPos="before">
      {DEFAULT_LONG_TEXT}
    </Link>
  ),
};

// With Icon - After - No Border
export const WithIconAfterNoBorder: Story = {
  name: "With Icon - After - No Border",
  render: (args) => (
    <Link hasIcon iconName="IconExternalLink" iconPos="after">
      {args.children}
    </Link>
  ),
};

// With Icon - After - Long - No Border
export const WithIconAfterLongNoBorder: Story = {
  name: "With Icon - After - Long - No Border",
  render: () => (
    <Link hasIcon iconName="IconExternalLink" iconPos="after">
      {DEFAULT_LONG_TEXT}
    </Link>
  ),
};
