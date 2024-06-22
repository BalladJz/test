import Layout from '@/layout/index.vue'

const welcomeRouter = {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
        {
            path: '/welcome',
            name: 'Welcome',
            component: () => import('@/views/welcome/index.vue')
        }
    ]
}

export default welcomeRouter