// import { fileURLToPath, URL } from 'node:url'

// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'

// // https://vitejs.dev/config/
// export default defineConfig({

//   plugins: [
//     vue(),
//     vueJsx(),
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })

import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

/** 当前执行node命令时文件夹的地址（工作目录） */
const root: string = process.cwd();
/** 跨域代理重写 */
const regExps = (value: string, reg: string): string => {
  return value.replace(new RegExp(`^${reg}`, "g"), "");
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const {
    VITE_PORT,
    VITE_PUBLIC_PATH,
    VITE_PROXY_DOMAIN_REAL,
    VITE_PROXY_DOMAIN,
  } = loadEnv(mode, root) as unknown as ViteEnv;

  return {
    base: VITE_PUBLIC_PATH,
    plugins: [vue(), ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      host: true,
      strictPort: true,
      port: VITE_PORT,
      // 本地跨域代理
      proxy:
        VITE_PROXY_DOMAIN_REAL?.length > 0
          ? {
            [VITE_PROXY_DOMAIN]: {
              target: VITE_PROXY_DOMAIN_REAL,
              // ws: true,
              changeOrigin: true,
              rewrite: (path: string) => regExps(path, VITE_PROXY_DOMAIN),
            },
          }
          : undefined,
    },
  };
});
