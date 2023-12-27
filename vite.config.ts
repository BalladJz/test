import vue from "@vitejs/plugin-vue";
import { defineConfig, loadEnv } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";

/** 当前执行node命令时文件夹的地址（工作目录） */
const root: string = process.cwd();
/** 跨域代理重写 */
const regExps = (value: string, reg: string): string => {
  return value.replace(new RegExp(`^${reg}`, "g"), "");
};

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
export default defineConfig(({ mode }) => {
  const {
    VITE_PORT,
    VITE_PUBLIC_PATH,
    VITE_PROXY_DOMAIN_REAL,
    VITE_PROXY_DOMAIN,
  } = loadEnv(mode, root) as unknown as ViteEnv;

  return {
    base: VITE_PUBLIC_PATH,
    plugins: [vue(),],
    resolve: {
      alias
      // path: {
      //   "@": resolve(__dirname, './src')
      // }
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
