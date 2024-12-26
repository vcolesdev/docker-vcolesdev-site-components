import { PolymorphicComponent } from "@mui/base";
import { InputTypeMap } from "@mui/base/Input";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { FormInput } from "./FormInput";

const meta: Meta<PolymorphicComponent<InputTypeMap>> = {
  title: "Controls/FormInput",
  component: FormInput,
  args: {},
};

export default meta;

type Story = StoryObj<PolymorphicComponent<InputTypeMap>>;

// Default
export const Default: Story = {
  render: (args) => <FormInput {...args} />,
};
