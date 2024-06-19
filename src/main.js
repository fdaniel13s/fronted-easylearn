import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";
import router from './router/router'

createApp(App)
    .use(PrimeVue, {ripple: true})
    .use(router)
    .mount('#app')
