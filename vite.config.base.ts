import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

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

export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
    ],
    resolve: {
        alias
    },
    // 环境变量文件中 vite 默认需要设置以 VITE_ 开头的变量，envPrefix属性值 是开发者可以自定义 前缀
    envPrefix: 'ENV_'
})