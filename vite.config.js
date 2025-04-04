import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "src/main.js",
      name: "Greeter",
      fileName: "greeter-component",
      formats: ["umd", "iife"], // Universal compatibility
    },
    rollupOptions: {
      external: ["vue"], // Prevent bundling Vue
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  test: {
    environment: "jsdom", // ✅ Ensures a browser-like environment
    globals: true,        // ✅ Enables describe, it, expect globally
  },
})
