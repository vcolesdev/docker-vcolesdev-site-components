import type { Meta, StoryObj } from "@storybook/react";

import HelloWorld from "./HelloWorld";

/**
 * The Meta for our component.  This function declares the component
 * and its story args, decorators, and other configuration.
 */
const meta: Meta<typeof HelloWorld> = {
  component: HelloWorld,
};
export default meta;

/**
 * The Story type for our component.
 */
type Story = StoryObj<typeof HelloWorld>;

/**
 * The stories for our component.
 */
// Default
export const Default: Story = {};

// Primary
export const Primary: Story = {
  args: {
    primary: true,
  },
};
