import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import mainRouter from './modules/index'

// const routes = [welcomeRouter]
export const routes = [...mainRouter]

const router = createRouter({
  // @ts-ignore  
  history: createWebHashHistory(import.meta.env.BASE_URL), // 模式 
  // @ts-ignore
  routes
})

export default router
