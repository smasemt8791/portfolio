import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  // MUST MATCH the repo name for GitHub Pages
  base: "/portfolio/",

  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // FORCE build output to docs/
  build: {
    outDir: "docs",
  },
});
