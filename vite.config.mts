import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
