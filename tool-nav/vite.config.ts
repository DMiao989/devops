import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path"

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    // 支持alias别名@
    alias: {
      '@': path.resolve(__dirname, "src")
    }
  },
  plugins: [vue()],
})
