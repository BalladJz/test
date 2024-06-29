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

// /** @type import("vite").UserConfig  */
// const viteConfig = { }

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['lodash-es'] // 当遇到 lodash-es 这个依赖的时候，不进行 依赖与构建 
  },
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias
  },
  server: {
    host: '0.0.0.0',
  },
  // 环境变量文件中 vite 默认需要设置以 VITE_ 开头的变量，envPrefix属性值 是开发者可以自定义 前缀
  envPrefix: 'ENV_',
  /** 对 css 的行为进行配置 */
  css: {
    // 对 css 的模块化的默认行为进行覆盖，最终会传给 postcss module
    modules: {
      // css类名规则 中划线 还是 小驼峰
      localsConvention: 'camelCase', // camelCase | camelCaseOnly | dashes | dashesOnly

      // 配置当前的行为是模块化，还是全局化，默认值是 local，有hash 就是开启了模块化，因为他可以保证产生不同hash值的来控制我们的样式类名不被覆盖
      scopeBehaviour: 'local', // global | 'local'

      // 生成类名规则
      // generateScopedName: "[name]_[local]_[hash:5]", // https://github.com/webpack/loader-utils#interpolatename
      generateScopedName: (name: string, filename: string, css: string) => { // 三个参数
        // name css文件中的样式类名
        // filename css文件的绝对路径
        // css 定义的样式
        return '123'
      },

      // 生成hash会根据你的类名 +一些其他的字符串(文件名 + 他内部随机生成一个字符串)去进行生成，如果你想要你生成hash更加的复杂一点，你可以配置hashPrefix，你配置的这个字符串会参与到最终的hash生成
      hashPrefix: 'Ballad',

      // 表示不想参与css模块化的文件路径
      // globalModulePaths: []
    }
  }
})

