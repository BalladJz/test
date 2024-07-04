import Layout from '@layout/index.vue'

const directiveRouter = {
    path: '/',
    // name: 'Layout',
    component: Layout,
    children: [
        {
            path: '/directive',
            name: 'Directive',
            component: () => import('@views/directive/index.vue'),
            meta: {
                name: '指令'
            }
        }
    ]
}

export default directiveRouter