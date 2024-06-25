import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}

/** 设置别名 */
const alias: Record<string, string> = {
  '/@': pathResolve('src'),
  '@build': pathResolve('build'),
  '@': fileURLToPath(new URL('./src', import.meta.url))
}

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias
  },
  server: {
    host: '0.0.0.0',
  }
})