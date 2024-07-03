import Layout from '@/layout/index.vue'

const welcomeRouter = {
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
}

export default welcomeRouter