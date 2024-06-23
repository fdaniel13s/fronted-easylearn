<script>
import PerfilAlumno from "../components/perfil-alumno.vue";

export default {
  name: "home-alumnos",
  components: {PerfilAlumno},
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
  <div class="left">
    <PerfilAlumno :id="id"></PerfilAlumno>

  </div>
  <div class="right">
    <h1>Estos son los cursos que tienes disponibles</h1>

  </div>
</template>

<style scoped>

</style>