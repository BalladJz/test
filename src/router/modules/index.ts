import Layout from '@/layout/index.vue'
import { RouterOptions } from 'vue-router'

const mainRouter = [
    {
        path: '/',
        redirect: '/mapMain',
        component: Layout,
    },
    {
        path: '/',
        // name: 'Layout',
        component: Layout,
        children: [
            {
                path: '/welcome',
                name: 'Welcome',
                component: () => import('@/views/welcome/index.vue'),
                meta: {
                    name: '首页'
                }
            }
        ]
    },
    {
        path: '/',
        // name: 'Layout',
        component: Layout,
        children: [
            {
                path: '/directive',
                name: 'Directive',
                component: () => import('@/views/directive/index.vue'),
                meta: {
                    name: '指令'
                }
            }
        ]
    },
    {
        path: '/',
        // name: 'Layout',
        component: Layout,
        children: [
            {
                path: '/cssScoped',
                name: 'CssScoped',
                component: () => import('@/views/cssScoped/index.vue'),
                meta: {
                    name: '样式'
                }
            }
        ]
    },
    {
        path: '/',
        // name: 'Layout',
        component: Layout,
        children: [
            {
                path: '/mapMain',
                name: 'MapMain',
                component: () => import('@/views/mapMain/index.vue'),
                meta: {
                    name: '地图'
                }
            }
        ]
    },
]

export default mainRouter