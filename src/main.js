import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import router from './router' // Import router

createApp(App)
    .use(router) // Use router
    .mount('#app')