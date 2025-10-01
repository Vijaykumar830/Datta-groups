import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "./",  // 👈 important for Render/static hosting
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      "datta-groups.onrender.com", // allow Render domain
      "localhost"                  // allow local dev
    ],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
