import { InlineConfig } from "vite";
import stories from "./config/stories";
import addons from "./config/addons";
import viteConfig from "./config/viteconfig";

/**
 * Required Storybook config
 */
const requiredConfig = {
  framework: "@storybook/react-vite",
  stories: stories,
};

/**
 * TypeScript config for Storybook
 */
/*
const typescriptConfig = {
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      tsconfigPath: "../tsconfig.json",
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => (prop.parent ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) : true),
    },
  },
};
 */

/**
 * Optional Storybook config
 */
const optionalConfig = {
  addons: addons,
  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true, // 👈 Disables telemetry
  },
  staticDirs: ["../public"],
};

/**
 * Main Config for Storybook
 * @link https://storybook.js.org/docs/react/configure/overview
 */
const config = {
  ...requiredConfig,
  //...typescriptConfig,
  ...optionalConfig,
  async viteFinal(config: InlineConfig) {
    const { mergeConfig } = await import("vite");
    return mergeConfig(config, viteConfig);
  },
};

export default config;
