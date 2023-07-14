import { resolve } from "path"
import { defineConfig } from "vite"
import dns from "dns"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/server-options.html#server-host
dns.setDefaultResultOrder("verbatim")

export default defineConfig({
  css: {
    postcss: {
      modules: true,
      extract: true,
    },
  },
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
    vanillaExtractPlugin(),
    dts(),
  ],
  build: {
    lib: {
      name: "design-system",
      entry: resolve(__dirname, "src/index.ts"),
    },
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
})
