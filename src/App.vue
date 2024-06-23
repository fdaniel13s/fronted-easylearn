<script setup>
import ToolbarComponent from "./public/toolbar-component.vue";
import PerfilAlumno from "./alumnos/components/perfil-alumno.vue";
import PublicationListComponent from "./publicaciones/pages/publication-list.component.vue";
import CourseListComponent from "./cursos/pages/course-list.component.vue";
</script>

<template>
<ToolbarComponent></ToolbarComponent><router-view></router-view>
</template>

<style scoped>

</style>
