import { ListItems } from "@/stories/Typography/ListItems/ListItems";
import type { ListItemsApi } from "@/stories/Typography/ListItems/ListItems.api";
import { DEFAULT_LIST_ITEMS } from "@/stories/Typography/ListItems/ListItems.const";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const ListItemsArgs = {
  hasCustomIcon: false,
  items: [
    "This is a basic list item.",
    "This is another list item.",
    "This is a third, longer list item.",
    "The last list item.",
  ],
} as ListItemsApi;

const ListItemsArgTypes = {
  el: {
    control: {
      type: "radio",
    },
    options: ["ol", "ul"],
  },
  iconName: {
    control: {
      type: "select",
    },
    defaultValue: "IconCheck",
    options: ["IconCheck", "IconCircle", "IconSquare", "IconHeart"],
  },
} as const;

const meta: Meta<typeof ListItems> = {
  component: ListItems,
  title: "Typography/ListItems",
  args: ListItemsArgs,
  argTypes: ListItemsArgTypes,
};
export default meta;
type Story = StoryObj<typeof ListItems>;

// Default
export const Default: Story = {
  name: "Default",
  render: (args: ListItemsApi) => {
    return <ListItems {...args} />;
  },
};

// Unordered List
export const UnorderedList: Story = {
  name: "List - Unordered",
  render: (args: ListItemsApi) => {
    return <ListItems el="ul" {...args} />;
  },
};

// Ordered List
export const OrderedList: Story = {
  name: "List - Ordered",
  render: (args: ListItemsApi) => {
    return <ListItems el="ol" {...args} />;
  },
};

// Default List - Long Items
export const DefaultLong: Story = {
  name: "List - Default - Long",
  render: (args: ListItemsApi) => {
    return <ListItems items={DEFAULT_LIST_ITEMS} />;
  },
};

// Unordered List - Long Items
export const UnorderedListLong: Story = {
  name: "List - Unordered - Long",
  render: (args: ListItemsApi) => {
    return <ListItems el="ul" items={DEFAULT_LIST_ITEMS} />;
  },
};

// Ordered List - Long Items
export const OrderedListLong: Story = {
  name: "List - Ordered - Long",
  render: (args: ListItemsApi) => {
    return <ListItems el="ol" items={DEFAULT_LIST_ITEMS} />;
  },
};

// Custom Icon
export const CustomIcon: Story = {
  name: "List - Custom Icon",
  render: (args: ListItemsApi) => {
    return <ListItems hasCustomIcon={true} iconName="IconHeart" items={args.items} />;
  },
};

// Sizes - Small - Custom Icon
export const Small: Story = {
  name: "List - Small - Custom Icon",
  render: (args: ListItemsApi) => {
    return <ListItems hasCustomIcon={true} size="sm" items={args.items} />;
  },
};

// Sizes - Large - Custom Icon
export const Large: Story = {
  name: "List - Large - Custom Icon",
  render: (args: ListItemsApi) => {
    return <ListItems hasCustomIcon={true} size="lg" items={args.items} />;
  },
};
