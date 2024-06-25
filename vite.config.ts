import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'
// import { resolve } from 'path'
// import { fileURLToPath } from 'url'

import viteConfigBase from './vite.config.base'
import viteConfigServe from './vite.config.serve'
import viteConfigProd from './vite.config.prod'

/** 策略模式 */
const envResolver = {
  'serve': () => {
    // console.log('envResolver， 开发配置');
    return Object.assign({}, viteConfigBase, viteConfigServe)
  },
  'build': () => {
    // console.log('envResolver, 生产配置');
    return { ...viteConfigBase, ...viteConfigProd }
  }
}

export default defineConfig(({ command, mode }) => {
  // 是build 还是serve 主要取决于我们敲的命令是 开发环境 还是生产环境
  // console.log('command', command); // "build" | "serve"
  // console.log('mode', mode); // 'development' | 'staging' | ''production'
  return envResolver[command]()
})


// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// /** 路径查找 */
// const pathResolve = (dir: string): string => {
//   return resolve(__dirname, '.', dir)
// }

// /** 设置别名 */
// const alias: Record<string, string> = {
//   '/@': pathResolve('src'),
//   '@build': pathResolve('build'),
//   '@': fileURLToPath(new URL('./src', import.meta.url))
// }

// // https://vitejs.dev/config/
// export default defineConfig(({ command, mode }) => {


//   return {
//     // 默认是 /， 配置相对路径 ./
//     base: './',
//     plugins: [
//       vue(),
//       vueJsx(),
//     ],
//     resolve: {
//       alias
//     },
//     optimizeDeps: {
//       // 
//     },
//     envPrefix: 'ENV_',
//     server: {
//       port: 8899,
//       host: '0.0.0.0',
//     }
//   }
// })

