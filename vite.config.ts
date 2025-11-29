// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // CORRECT base path for GitHub Pages
  base: "/portfolio/", 
  server: {
    host: "::",
    port: 8080,
  },
  // BUILD property is REMOVED
  
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));