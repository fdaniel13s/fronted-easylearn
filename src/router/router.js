import {createRouter, createWebHistory} from "vue-router";
import CourseListComponent from "..//cursos/pages/course-list.component.vue";
import PublicationListComponent from "..//publicaciones/pages/publication-list.component.vue";
// ... other imports ...

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // ... other routes ...
        { path: '/courses', component: CourseListComponent, meta: { title: 'Courses' } },
        { path: '/publications', component: PublicationListComponent, meta: { title: 'Publications' } },
        // ... other routes ...
    ]
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'EasyLearn';
    document.title = `${ baseTitle } | ${to.meta["title"]}`;
    next();
});

export default router;