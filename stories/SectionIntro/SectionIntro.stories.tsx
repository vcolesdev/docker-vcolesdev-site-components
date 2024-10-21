import { Spacer } from "@/stories/Spacer/Spacer";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import {
  SectionIntro,
  SectionIntroFull,
  SectionIntroFullEye,
  SectionIntroFullEyeIcon,
  SectionIntroWithCta,
  SectionIntroWithCtaEye,
  SectionIntroWithCtaEyeIcon,
  SectionIntroWithHeader,
  SectionIntroWithHeaderEye,
  SectionIntroWithHeaderEyeIcon,
} from "./SectionIntro";
import type { SectionIntroApi } from "./SectionIntro.api";

const description = (
  <>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
  </>
);

const meta: Meta<typeof SectionIntro> = {
  component: SectionIntro,
  title: "Components/SectionIntro",
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
  args: {
    textSize: "lg",
    titleSize: "lg",
  },
  argTypes: {
    ctaVariant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "outlined", "ghost"],
      },
    },
    textSize: {
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl"],
      },
    },
    titleSize: {
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl"],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SectionIntro>;

// Playground
export const Playground: Story = {
  render: (args) => <SectionIntro {...args}>{description}</SectionIntro>,
};

// Default - No Header or Footer
export const Default: Story = {
  render: (args) => <SectionIntro {...args}>{description}</SectionIntro>,
};

// Section Intro with Header
export const WithHeader: Story = {
  args: {
    titleContent: "Handpicked Favorites",
  },
  render: (args: Omit<SectionIntroApi, "ref">) => (
    <SectionIntroWithHeader {...args}>{description}</SectionIntroWithHeader>
  ),
};

// Section Intro with CTA
export const WithCta: Story = {
  args: {
    ctaText: "Learn More",
    ctaVariant: "primary",
  },
  render: (args: Omit<SectionIntroApi, "ref">) => <SectionIntroWithCta {...args}>{description}</SectionIntroWithCta>,
};

// Full Section Intro
export const Full: Story = {
  args: {
    ctaText: "Learn More",
    ctaVariant: "secondary",
    titleContent: "Handpicked Favorites",
  },
  render: (args: Omit<SectionIntroApi, "ref">) => <SectionIntroFull {...args}>{description}</SectionIntroFull>,
};

// Section Intro with Eyebrow and Header
export const WithEyebrowHeader: Story = {
  args: {
    eyebrowText: "Featured Content",
    titleContent: "Handpicked Favorites",
  },
  render: (args: Omit<SectionIntroApi, "ref">) => (
    <SectionIntroWithHeaderEye {...args}>{description}</SectionIntroWithHeaderEye>
  ),
};

// Section Intro with Eyebrow and CTA
export const WithEyebrowCta: Story = {
  args: {
    ctaText: "Learn More",
    ctaVariant: "outlined",
    eyebrowText: "Featured Content",
  },
  render: (args: Omit<SectionIntroApi, "ref">) => (
    <SectionIntroWithCtaEye {...args}>{description}</SectionIntroWithCtaEye>
  ),
};

// Section Intro with Eyebrow, Header, and CTA
export const WithEyebrowHeaderCta: Story = {
  args: {
    ctaText: "Learn More",
    ctaVariant: "ghost",
    eyebrowText: "Featured Content",
    titleContent: "Handpicked Favorites",
  },
  render: (args: Omit<SectionIntroApi, "ref">) => <SectionIntroFullEye {...args}>{description}</SectionIntroFullEye>,
};

// Section Intro with Header and Eyebrow Icon
export const WithEyebrowIconHeader: Story = {
  args: {
    eyebrowIconName: "IconActivity",
    eyebrowIconSize: 18,
    eyebrowText: "Featured Content",
    titleContent: "Handpicked Favorites",
  },
  render: (args: Omit<SectionIntroApi, "ref">) => (
    <>
      <SectionIntroWithHeaderEyeIcon eyebrowIconPos="start" {...args}>
        {description}
      </SectionIntroWithHeaderEyeIcon>
      <Spacer size="lg" />
      <SectionIntroWithHeaderEyeIcon eyebrowIconPos="end" {...args}>
        {description}
      </SectionIntroWithHeaderEyeIcon>
    </>
  ),
};

// Section Intro with CTA and Eyebrow Icon
export const WithEyebrowIconCta: Story = {
  args: {
    ctaText: "Learn More",
    ctaVariant: "outlined",
    eyebrowIconName: "IconActivity",
    eyebrowIconSize: 18,
    eyebrowText: "Featured Content",
  },
  render: (args: Omit<SectionIntroApi, "ref">) => (
    <>
      <SectionIntroWithCtaEyeIcon eyebrowIconPos="start" {...args}>
        {description}
      </SectionIntroWithCtaEyeIcon>
      <Spacer size="lg" />
      <SectionIntroWithCtaEyeIcon eyebrowIconPos="end" {...args}>
        {description}
      </SectionIntroWithCtaEyeIcon>
    </>
  ),
};

// Section Intro with Header, CTA, and Eyebrow Icon
export const WithEyebrowIconHeaderCta: Story = {
  args: {
    ctaText: "Learn More",
    ctaVariant: "ghost",
    eyebrowIconName: "IconActivity",
    eyebrowIconSize: 18,
    eyebrowText: "Featured Content",
    titleContent: "Handpicked Favorites",
  },
  render: (args: Omit<SectionIntroApi, "ref">) => (
    <>
      <SectionIntroFullEyeIcon eyebrowIconPos="start" {...args}>
        {description}
      </SectionIntroFullEyeIcon>
      <Spacer size="lg" />
      <SectionIntroFullEyeIcon eyebrowIconPos="end" {...args}>
        {description}
      </SectionIntroFullEyeIcon>
    </>
  ),
};
