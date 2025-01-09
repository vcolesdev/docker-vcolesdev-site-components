import type { NavbarApi } from "@/stories/Compositions/Navbar/Navbar";
import { Navbar } from "@/stories/Compositions/Navbar/Navbar";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const NavbarArgs = {} as NavbarApi;

const NavbarArgTypes = {} as const;

const meta: Meta<typeof Navbar> = {
  title: "Compositions/Navbar",
  component: Navbar,
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
  args: NavbarArgs,
  argTypes: NavbarArgTypes,
  render: (args: NavbarApi) => <Navbar {...args} />,
};
export default meta;
type Story = StoryObj<typeof Navbar>;

// Default
export const Default: Story = {
  render: (args) => <Navbar {...args} />,
};
