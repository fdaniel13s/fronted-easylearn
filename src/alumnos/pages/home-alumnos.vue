<script>
import PerfilAlumno from "../components/perfil-alumno.vue";

export default {
  name: "home-alumnos",
  components: {PerfilAlumno},
  data() {
    return{

    };
  }
};
</script>

<template>
  <div class="left">
    <PerfilAlumno></PerfilAlumno>
  </div>
  <div class="right">
    <h1>Estos son los cursos que tienes disponibles</h1>

  </div>
</template>

<style scoped>

</style>