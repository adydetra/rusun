import { defineConfig } from "vite";
import * as path from "node:path";
import react from "@vitejs/plugin-react";

const isCodeSandbox =
  "SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env;

const dev = defineConfig({
  plugins: [react()],
  root: "example/",
  publicDir: "../public/",
  base: "./",
  server: {
    host: true,
    open: !isCodeSandbox, // Open if it's not a CodeSandbox
  },
});

const build = defineConfig({
  publicDir: "../public/",
  build: {
    outDir: "dist", // Output directory
    minify: false,
    sourcemap: true,
    target: "es2018",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "example/index.html"),
        // Add any other entry points here if needed
      },
      output: {
        sourcemapExcludeSources: true,
      },
    },
  },
});

export default process.argv[2] ? build : dev;
