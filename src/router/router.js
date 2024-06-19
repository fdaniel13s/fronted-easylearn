import { createRouter, createWebHistory } from 'vue-router'
import HomeAlumnos from '../alumnos/pages/home-alumnos.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeAlumnos
    }
    // Agrega más rutas aquí
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router