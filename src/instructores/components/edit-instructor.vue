<script>
import { InstructorApiService } from "../../alumnos/services/instructor-api.js";

export default {
  name: "edit-instructor",
  props: ['id'],
  data() {
    return {
      email: "",
      name: "",
      surname: "",
      password: ""
    };
  },
  methods: {
    async getProfile() {
      const instructorService = new InstructorApiService();
      const userData = await instructorService.getInstructorById(this.id);
      this.email = userData.data.correo;
      this.name = userData.data.nombre;
      this.surname = userData.data.apellido;
    },
    async updateProfile() {
      const instructorService = new InstructorApiService();

      const userData = {
        correo: this.email,
        password: this.password,
        nombre: this.name,
        apellido: this.surname
      }

      await instructorService.updateInstructor(this.id, userData);
      alert("Perfil actualizado exitosamente!");
      this.$router.push({name: 'HomeInstructor', params: {id: this.id}});
    },
    async deleteProfile() {
      const confirmation = confirm("¿Estás seguro de que quieres eliminar tu perfil?");
      if (confirmation) {
        const instructorService = new InstructorApiService();
        await instructorService.deleteInstructor(this.id);
        alert("Perfil eliminado exitosamente!");
        this.$router.push({name: 'Home'});
      }
    }
  },
  created() {
    this.getProfile();
  }
}
</script>

<template>
  <pv-card class="card-edit-instructor">
    <template #content>
      <div>
        <h2>Editar Perfil</h2>
        <form @submit.prevent="updateProfile">
          <input type="text" v-model="name" placeholder="Nombre" required/>
          <input type="text" v-model="surname" placeholder="Apellido"/>
          <input type="email" v-model="email" placeholder="Correo" required/>
          <input type="password" v-model="password" placeholder="Contraseña" required/>
          <button type="submit">Actualizar Perfil</button>
        </form>
        <button @click="deleteProfile" style="background-color: red; color: white;">Eliminar Perfil</button>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.card-edit-instructor {
  width: 50%;
  background-color: var(--jade);
  border-radius: 10px;
  padding: 5px;
}
</style>