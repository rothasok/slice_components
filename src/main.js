import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes/index.js'

// import pinia from './pinia.js'
import i18n from '@/Pages/i18n'



const app = createApp(App)
// app.use(pinia)
app.use(i18n)
app.use(router)
app.mount('#app')
