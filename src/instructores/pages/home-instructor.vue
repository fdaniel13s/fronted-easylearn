<script>


import {InstructorApiService} from "../../alumnos/services/instructor-api.js";
import EditUpdateCursosInstructor from "../components/edit-update-cursos-instructor.vue";


export default {
  name: "home-instructor",
  components: {EditUpdateCursosInstructor},
  props: ['id'],
  data() {
    return {
      email: "",
      name: "",
      surname: "",
      telefono : "",
      cantidadCursos : 0
    };
  },
  methods: {
    async getProfile() {
      const instructorService = new InstructorApiService();
      const userData = await instructorService.getInstructorById(this.id);
      this.email = userData.data.correo;
      this.name = userData.data.nombre;
      this.surname = userData.data.apellido;
      this.telefono = userData.data.telefono;
      this.cantidadCursos = userData.data.cursos.length;
    }
  },
  created() {
    this.getProfile();
  }
}
</script>

<template>
  <pv-card class="card-home-instructor">
    <template #content>
      <div>
        <h2>Bienvenid@, {{ name }} {{ surname }}</h2>
        <p>Correo: {{ email }}</p>
        <p>Telefono: {{telefono}}</p>
        <p >Actualmente estás enseñando: {{cantidadCursos}} cursos</p>
      </div>
    </template>
    <template #footer>
      <router-link :to="{name: 'EditInstructor', params: {id: id}}">Editar Perfil</router-link>
    </template>
  </pv-card>

  <EditUpdateCursosInstructor :id="this.id" ></EditUpdateCursosInstructor>
</template>

<style scoped>
.card-home-instructor {
  display: grid;
  place-items: center;
  height: 45vh;
  width: 50%;
  background-color: var(--caribben);
  border-radius: 10px;
  padding: 5px;
  margin: 20px auto 5% auto;
}
</style>