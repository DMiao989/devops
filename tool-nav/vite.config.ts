import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path"
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


// https://vite.dev/config/
export default defineConfig({
  base: "/devops-page/", //配置github pages的访问地址
  resolve: {
    // 支持alias别名@
    alias: {
      '@': path.resolve(__dirname, "src")
    }
  },
  plugins: [
    // 配置element-plus自动导入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    vue(),]
})
