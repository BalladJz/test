import { createRouter, createWebHistory, createWebHashHistory, RouterOptions } from 'vue-router'
// import Layout from '@/layout/index.vue'

import mainRouter from './modules/index'
import welcome from './modules/welcome'
import directiveRouter from './modules/directive'
import cssScopedRouter from './modules/cssScoped'
import mapMain from './modules/mapMain'

export const routes = [mainRouter, welcome, directiveRouter, cssScopedRouter, mapMain] as any[]

const router = createRouter({
  // @ts-ignore  
  history: createWebHashHistory(import.meta.env.BASE_URL), // 模式 
  // @ts-ignore
  routes
})

export default router
