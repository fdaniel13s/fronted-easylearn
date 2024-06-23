import {createRouter, createWebHistory} from "vue-router";
import CourseListComponent from "..//cursos/pages/course-list.component.vue";
import PublicationListComponent from "..//publicaciones/pages/publication-list.component.vue";
// ... other imports ...

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
    },
    // ... other routes ...
    { path: '/courses', component: CourseListComponent, meta: { title: 'Courses' } },
    { path: '/publications', component: PublicationListComponent, meta: { title: 'Publications' } },
    // Agrega más rutas aquí
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    let baseTitle = 'EasyLearn';
    document.title = `${ baseTitle } | ${to.meta["title"]}`;
    next();
});

export default router;