/// <reference types="vite/client" />

interface ImportMetaEnv extends ViteEnv {
    __: unknown;
}

declare interface ViteEnv {
    VITE_PORT: number
    VITE_PUBLIC_PATH: string
    VITE_PROXY_DOMAIN: string
    VITE_PROXY_DOMAIN_REAL: string
    VITE_ROUTER_BASE: string
}