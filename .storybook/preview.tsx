import { Preview } from "@storybook/react";

import "../src/tailwind.css";
import decorators from "./app/decorators";
import parameters from "./app/parameters";
import "./index.css";

/**
 * Preview Config for Storybook
 * @link https://storybook.js.org/docs/react/configure/preview
 */
let preview: Preview = {
  decorators: decorators,
  parameters: parameters,
  tags: ["autodocs"],
};

export default preview;
