import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import MapContainer from '@/views/MapContainer.vue'

const router = createRouter({
  // @ts-ignore
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/map',
      name: 'home',
      component: MapContainer
    },

  ]
})

export default router
