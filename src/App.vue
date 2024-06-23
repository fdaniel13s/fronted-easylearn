<script setup>
import ToolbarComponent from "./public/toolbar-component.vue";
import PerfilAlumno from "./alumnos/components/perfil-alumno.vue";
import LoginPage from "./acces-management/pages/login-page.vue";
import RegisterPage from "./acces-management/pages/register-page.vue";
import EditUpdateCursosInstructor from "./instructores/components/edit-update-cursos-instructor.vue";
import PublicationListComponent from "./publicaciones/pages/publication-list.component.vue";
import CourseListComponent from "./cursos/pages/course-list.component.vue";
</script>

<template>
<router-view></router-view>

  <edit-update-cursos-instructor></edit-update-cursos-instructor>
</template>

<style scoped>

</style>
