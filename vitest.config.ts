import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [],
  resolve: {
    alias: [
      { find: "@src", replacement: "/src" },
      { find: "@tests", replacement: "/tests" },
    ],
  },
  test: {
    clearMocks: true,
    globals: true,
    environment: "jsdom",
    setupFiles: "tests/unit/setup.ts",
    exclude: ["node_modules", "**/*.spec.(ts|tsx|js|jsx)"],
    coverage: {
      reporter: ["text", "html", "json"],
      exclude: ["node_modules/", "tests/"],
    },
  },
});
