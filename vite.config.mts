import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

/**
 * @link https://dev.to/onticdani/how-to-load-and-render-markdown-files-into-your-vite-react-app-using-typescript-26jm
const exampleMDLoader = {
  name: "markdown-loader",
  transform(src: any, id: string) {
    if (id.slice(-3) === ".md" || id.slice(-4) === ".mdx") {
      // For .md files, get the raw content
      return `export default ${JSON.stringify(src)}`;
    }
  },
};
 */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/docs": path.resolve(__dirname, "./stories/__docs__"),
      "@/sbconfig": path.resolve(__dirname, "./.storybook"),
      "@/src": path.resolve(__dirname, "./src"),
      "@/stories": path.resolve(__dirname, "./stories"),
    },
  },
});
