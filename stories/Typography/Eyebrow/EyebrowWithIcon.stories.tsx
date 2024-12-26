import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { EyebrowWithIcon } from "./Eyebrow";
import type { EyebrowWithIconApi } from "./Eyebrow.api";

const EyebrowWithIconArgs = {
  children: "Featured Stories",
  iconColor: "currentColor",
  iconName: "IconAlignLeft2",
  iconPos: "start",
  iconSize: 18,
  iconStroke: 2,
} as EyebrowWithIconApi;

const EyebrowWithIconArgTypes = {
  children: {
    control: {
      type: "text",
    },
  },
  iconColor: {
    control: {
      type: "color",
    },
  },
  iconName: {
    control: {
      type: "select",
    },
    defaultValue: "IconBaselineDensityMedium",
    options: [
      "IconActivity",
      "IconAlertCircle",
      "IconAlignLeft2",
      "IconArrowDown",
      "IconArrowLeft",
      "IconArrowRight",
      "IconArrowUp",
      "IconBaselineDensityMedium",
      "IconBell",
      "IconBookmark",
      "IconCalendar",
      "IconCheck",
      "IconChevronDown",
      "IconChevronLeft",
      "IconChevronRight",
      "IconChevronUp",
      "IconClock",
      "IconClose",
      "IconCloud",
      "IconCopy",
      "IconDownload",
      "IconEdit",
      "IconExternalLink",
      "IconEye",
      "IconFilter",
      "IconFlag",
      "IconFolder",
      "IconGrid",
      "IconHeart",
      "IconHome",
      "IconImage",
      "IconInfo",
      "IconLink",
      "IconList",
      "IconLock",
      "IconMail",
      "IconMenu",
      "IconMinus",
      "IconMore",
      "IconPause",
      "IconPhone",
      "IconPlay",
      "IconPlus",
      "IconPrint",
      "IconSearch",
      "IconSettings",
      "IconShare",
      "IconStar",
      "IconTag",
      "IconTrash",
      "IconUpload",
      "IconUser",
    ],
  },
  iconPos: {
    control: {
      type: "radio",
    },
    options: ["start", "end"],
  },
  iconSize: {
    control: {
      type: "range",
    },
    min: 16,
    max: 32,
    step: 1,
  },
  iconStroke: {
    control: {
      type: "range",
    },
    min: 0.5,
    max: 3,
    step: 0.5,
  },
} as const;

const meta: Meta<typeof EyebrowWithIcon> = {
  component: EyebrowWithIcon,
  title: "Typography/Eyebrow - WithIcon",
  args: EyebrowWithIconArgs,
  argTypes: EyebrowWithIconArgTypes,
};
export default meta;
type Story = StoryObj<typeof EyebrowWithIcon>;

// Default
export const Default: Story = {
  name: "Eyebrow - WithIcon",
  render: (args) => <EyebrowWithIcon {...args} />,
};
