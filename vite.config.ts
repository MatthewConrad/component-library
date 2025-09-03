import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react({ jsxImportSource: "@emotion/react" })],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/tests/setup.ts"],

    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,tsx,js,jsx}"],
      exclude: [
        "src/index.ts",
        "src/ts/**/*.ts",
        "src/**/*.presenter.{ts,tsx,js,jsx}",
        "src/**/*.color.{ts,tsx,js,jsx}",
        "src/**/*.colors.{ts,tsx,js,jsx}",
        "src/**/*.stories.{ts,tsx,js,jsx}",
        "src/**/*.mdx",
      ],
    },
  },
});
