<script>
import PerfilAlumno from "../components/perfil-alumno.vue";
import CourseListComponent from "../../cursos/pages/course-list.component.vue";

export default {
  name: "home-alumnos",
  components: {CourseListComponent, PerfilAlumno},
  props: ['id'],
  data() {
    return{

    };
  },
  created() {
    console.log(this.id);
  }
};
</script>

<template>
  <div class="options">
    <Button @click="$router.push({name: 'GruposEstudio', params: {id: id}})">Grupos de Estudio</Button>
    <Button @click="$router.push({name: 'Publicaciones', params: {id: id}})">Ver Publicaciones</Button>
  </div>
  <div class="left">
    <PerfilAlumno :id="this.id"></PerfilAlumno>

  </div>
  <div class="right">
    <h2>Estos son los cursos que tienes disponibles</h2>
    <CourseListComponent :student-id="this.id" ></CourseListComponent>
  </div>
</template>

<style scoped>
.left {
  margin-top: 100px;
}
.options {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}
Button{
  background-color: var(--richblack);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
}

</style>