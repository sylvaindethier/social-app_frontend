import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import path from "node:path";

export default defineConfig({
  plugins: [solid()],

  // resolve alias
  resolve: {
    alias: {
      // "@": path.resolve(__dirname, "./src"),
      "#": path.resolve(__dirname, "./src"),
      "#components": path.resolve(__dirname, "./src/components"),
    },
  },
});
