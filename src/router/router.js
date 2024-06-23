import {createRouter, createWebHistory} from "vue-router";
import RegisterPage from "../acces-management/pages/register-page.vue";
import LoginPage from "../acces-management/pages/login-page.vue";
import HomeInstructor from "../instructores/pages/home-instructor.vue";
import HomeAlumnos from "../alumnos/pages/home-alumnos.vue";
import EditProfile from "../alumnos/pages/edit-profile.vue";
import EditInstructor from "../instructores/components/edit-instructor.vue";
import PublicationListComponent from "../publicaciones/pages/publication-list.component.vue";
import CourseListComponent from "../cursos/pages/course-list.component.vue";
import StudygroupListComponent from "../grupos-estudio/pages/studygroup-list.component.vue";
import PageNotFound from "../public/page-not-found.vue";

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
    { path: '/courses', component: CourseListComponent, meta: { title: 'Courses' } },
    { path: '/publications',
        name: 'Publications',
        component: PublicationListComponent,
        meta: { title: 'Publications' }
    },
    {
        path: '/grupos-estudio/:id',
        name: 'GruposEstudio',
        component: StudygroupListComponent
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: PageNotFound
    }
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