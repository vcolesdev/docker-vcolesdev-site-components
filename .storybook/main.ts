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
  features: {
    previewMdx2: true, // 👈 MDX 2 enabled here
  },
};

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
  ...optionalConfig,
  async viteFinal(config: InlineConfig) {
    const { mergeConfig } = await import("vite");
    return mergeConfig(config, viteConfig);
  },
};

export default config;
