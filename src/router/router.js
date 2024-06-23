import { createRouter, createWebHistory } from 'vue-router'
import HomeAlumnos from '../alumnos/pages/home-alumnos.vue'
import RegisterPage from "../acces-management/pages/register-page.vue";
import LoginPage from "../acces-management/pages/login-page.vue";
import HomeInstructor from "../instructores/pages/home-instructor.vue";
import EditProfile from "../alumnos/pages/edit-profile.vue";
import EditInstructor from "../instructores/components/edit-instructor.vue";

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/register',
        name: 'Register',
        component: RegisterPage
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/home-instructor/:id',
        name: 'HomeInstructor',
        component: HomeInstructor,
        props: true
    },
    {
        path: '/home-alumno/:id',
        name: 'HomeAlumnos',
        component: HomeAlumnos,
        props: true
    },
    {
        path: '/edit-profile/:id',
        name: 'EditProfile',
        component: EditProfile,
        props: true
    },
    {
        path: '/edit-instructor/:id',
        name: 'EditInstructor',
        component:EditInstructor,
        props: true
    }
    // Agrega más rutas aquí
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router