import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { TextContent } from "../TextContent/TextContent";
import { FancyCard, FancyCardFull, FancyCardWithFooter, FancyCardWithHeader } from "./FancyCard";
import type { FancyCardApi } from "./FancyCard.api";

const textContentShort = (
  <TextContent size="md">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
  </TextContent>
);

const textContent = (
  <TextContent size="md">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
    voluptatem sequi nesciunt.
  </TextContent>
);
const titleText = `Text Content Header`;
const footerContent = <TextContent size="sm">Text Content Footer</TextContent>;

const meta: Meta<typeof FancyCard> = {
  component: FancyCard,
  title: "Components/FancyCard",
  decorators: (story) => <div className="p-10">{story()}</div>,
  args: {
    extraClasses: "",
    styles: {},
  },
};
export default meta;

type Story = StoryObj<typeof FancyCard>;

const Template = (args: FancyCardApi) => <FancyCard {...args}>{textContent}</FancyCard>;

// Playground
export const Playground: Story = {
  render: (args) => <FancyCard {...args}>{textContent}</FancyCard>,
};

// Default - No Header or Footer
export const Default: Story = {
  render: (args) => <FancyCard {...args}>{textContent}</FancyCard>,
};

// Card With Title
export const CardWithTitle: Story = {
  args: {
    titleText: titleText,
  },
  render: (args) => <FancyCardWithHeader {...args}>{textContent}</FancyCardWithHeader>,
};

// Card with Footer
export const CardWithFooter: Story = {
  args: {
    footerContent: footerContent,
  },
  render: (args) => <FancyCardWithFooter {...args}>{textContent}</FancyCardWithFooter>,
};

// Card with Header and Footer
export const CardWithHeaderAndFooter: Story = {
  args: {
    footerContent: footerContent,
    titleText: titleText,
  },
  render: (args) => <FancyCardFull {...args}>{textContent}</FancyCardFull>,
};

// Card Grid (2x2)
export const CardGrid2x2: Story = {
  args: {
    footerContent: footerContent,
    titleText: titleText,
  },
  render: (args) => {
    return (
      <div className="grid grid-cols-1 gap-12 p-10 md:grid-cols-2 lg:gap-10">
        <div>
          <FancyCardFull {...args}>{textContent}</FancyCardFull>
        </div>
        <div>
          <FancyCardFull {...args}>{textContent}</FancyCardFull>
        </div>
        <div>
          <FancyCardFull {...args}>{textContent}</FancyCardFull>
        </div>
        <div>
          <FancyCardFull {...args}>{textContent}</FancyCardFull>
        </div>
      </div>
    );
  },
};

// Card Grid (3x3)
export const CardGrid3x3: Story = {
  args: {
    footerContent: footerContent,
    titleText: titleText,
  },
  render: (args) => {
    return (
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10 p-10">
        <div>
          <FancyCardFull {...args}>{textContentShort}</FancyCardFull>
        </div>
        <div>
          <FancyCardFull {...args}>{textContentShort}</FancyCardFull>
        </div>
        <div>
          <FancyCardFull {...args}>{textContentShort}</FancyCardFull>
        </div>
        <div>
          <FancyCardFull {...args}>{textContentShort}</FancyCardFull>
        </div>
        <div>
          <FancyCardFull {...args}>{textContentShort}</FancyCardFull>
        </div>
        <div>
          <FancyCardFull {...args}>{textContentShort}</FancyCardFull>
        </div>
      </div>
    );
  },
};
