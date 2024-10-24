import { coverageConfigDefaults, defineConfig } from "vitest/config";

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
      include: ['src/**/*'],
      exclude: ['**/*{.,-}{test,spec,stories,bench,benchmark}?(-d).?(c|m)[jt]s?(x)', ...coverageConfigDefaults.exclude],
    },
  },
});
