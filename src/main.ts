import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'

import App from './App.vue'
import router from './router'
// import echarts from './plugins/echarts/index'
// import '@/imageLoader'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
