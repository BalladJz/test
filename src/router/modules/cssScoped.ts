import Layout from '@/layout/index.vue'

const cssScopedRouter = {
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
}

export default cssScopedRouter