import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";
import router from './router/router'
import Card from "primevue/card";

createApp(App)
    .use(PrimeVue, {ripple: true})
    .component('pv-card',Card)
    .use(router)
    .mount('#app')
