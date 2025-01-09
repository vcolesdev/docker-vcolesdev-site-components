import { TablerIconName } from "@/stories/Components/TablerIcon/TablerIcon";
import { ButtonApi } from "@/stories/Controls/Button/Button";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { FeaturedSectionIntro, FeaturedSectionIntroApi, FeaturedSectionIntroCtaApi } from "./FeaturedSectionIntro";

const FeaturedSectionIntroArgs = {
  ctaIcon: "IconBook",
  ctaIconPos: "end",
  ctaSize: "default",
  ctaText: "View All Projects",
  ctaVariant: "default",
  eyebrowIcon: "IconDevicesPc",
  eyebrowIconPos: "start",
  eyebrowText: "About Me",
  hasCta: true,
  hasCtaIcon: false,
  hasDescription: true,
  hasEyebrow: true,
  hasEyebrowIcon: true,
  title: "Featured Section Title",
} as FeaturedSectionIntroApi;

const FeaturedSectionIntroArgTypes = {} as const;

const meta: Meta<typeof FeaturedSectionIntro> = {
  title: "Compositions/FeaturedSectionIntro",
  component: FeaturedSectionIntro,
  parameters: {
    deepControls: { enabled: true },
  },
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
  args: FeaturedSectionIntroArgs,
  argTypes: FeaturedSectionIntroArgTypes,
  render: (args: FeaturedSectionIntroApi) => <FeaturedSectionIntro {...args} />,
};
export default meta;
type Story = StoryObj<typeof FeaturedSectionIntro>;

// Default
export const Default: Story = {
  args: {
    description: "This is a description of the featured section.",
    title: "Featured Section Title",
  },
  render: (args) => <FeaturedSectionIntro {...args} />,
};

// Example - Handpicked Projects
export const Example: Story = {
  name: "Example - Handpicked Projects",
  args: {
    hasCtaIcon: true,
    ctaIcon: "IconBook",
    ctaIconPos: "end",
    ctaText: "View All Projects",
    eyebrowText: "Featured Projects",
    title: "Handpicked Favorites",
    description:
      "Below are some of my favorite hobby projects I've worked on, including this site's code. Click on a project to be taken to its individual page to learn more.",
  },
  render: (args) => <FeaturedSectionIntro {...args} />,
};

// Example - No CTA
export const ExampleWithoutCta: Story = {
  name: "Example - No CTA",
  args: {
    hasCta: false,
    eyebrowText: "Featured Projects",
    title: "Handpicked Favorites",
    description:
      "Below are some of my favorite hobby projects I've worked on, including this site's code. Click on a project to be taken to its individual page to learn more.",
  },
  render: (args) => <FeaturedSectionIntro {...args} />,
};

// Example - No Eyebrow
export const ExampleWithoutEyebrow: Story = {
  name: "Example - No Eyebrow",
  args: {
    hasEyebrow: false,
    hasEyebrowIcon: false,
    hasCtaIcon: true,
    ctaIcon: "IconBook",
    ctaIconPos: "end",
    ctaText: "View All Projects",
    title: "Handpicked Favorites",
    description:
      "Below are some of my favorite hobby projects I've worked on, including this site's code. Click on a project to be taken to its individual page to learn more.",
  },
  render: (args) => <FeaturedSectionIntro {...args} />,
};

// Example - No Eyebrow, No CTA
export const ExampleWithoutEyebrowCta: Story = {
  name: "Example - No Eyebrow / No CTA",
  args: {
    hasEyebrow: false,
    hasEyebrowIcon: false,
    hasCta: false,
    title: "Handpicked Favorites",
    description:
      "Below are some of my favorite hobby projects I've worked on, including this site's code. Click on a project to be taken to its individual page to learn more.",
  },
  render: (args) => <FeaturedSectionIntro {...args} />,
};

// Example - No Description
export const ExampleWithoutDescription: Story = {
  name: "Example - No Description",
  args: {
    hasCtaIcon: true,
    hasDescription: false,
    ctaIcon: "IconBook",
    ctaIconPos: "end",
    ctaText: "View All Projects",
    eyebrowText: "Featured Projects",
    title: "Handpicked Favorites",
  },
  render: (args) => <FeaturedSectionIntro {...args} />,
};
