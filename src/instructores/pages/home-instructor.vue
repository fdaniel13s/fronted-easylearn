<script>


import {InstructorApiService} from "../../alumnos/services/instructor-api.js";

export default {
  name: "home-instructor",
  props: ['id'],
  data() {
    return {
      email: "",
      name: "",
      surname: ""
    };
  },
  methods: {
    async getProfile() {
      const instructorService = new InstructorApiService();
      const userData = await instructorService.getInstructorById(this.id);
      this.email = userData.data.correo;
      this.name = userData.data.nombre;
      this.surname = userData.data.apellido;
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
        <h2>Bienvenido, {{ name }} {{ surname }}</h2>
        <p>Correo: {{ email }}</p>
      </div>
    </template>
    <template #footer>
      <router-link :to="{name: 'EditInstructor', params: {id: id}}">Editar Perfil</router-link>
    </template>
  </pv-card>
</template>

<style scoped>
.card-home-instructor {
  width: 50%;
  background-color: var(--jade);
  border-radius: 10px;
  padding: 5px;
}
</style>