import Layout from '@layout/index.vue'

const mapMainRouter = {
    path: '/',
    // name: 'Layout',
    component: Layout,
    children: [
        {
            path: '/mapMain',
            name: 'MapMain',
            component: () => import('@views/mapMain/index.vue'),
            meta: {
                name: '地图'
            }
        }
    ]
}

export default mapMainRouter