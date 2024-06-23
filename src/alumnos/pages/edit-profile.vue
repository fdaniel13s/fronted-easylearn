<script>
import { AlumnosApiService } from "../services/alumnos-api.js";

export default {
  name: "edit-profile",
  props: ['id'],
  data() {
    return {
      email: "",
      password: "",
      name: "",
      surname: ""
    };
  },
  methods: {
    async updateProfile() {
      const alumnoService = new AlumnosApiService();

      const userData = {
        correo: this.email,
        password: this.password,
        nombre: this.name,
        apellido: this.surname
      }

      await alumnoService.update(this.id, userData);
      alert("Perfil actualizado exitosamente!");
      console.log("Actualizando perfil del usuario con correo: ", this.email);

      this.$router.push({name: 'HomeAlumnos', params:{id: this.id}});
    },
    async deleteProfile(){
      const confirmation = confirm("¿Estás seguro de que deseas eliminar tu perfil?");
      if(confirmation){
        const alumnoService = new AlumnosApiService();
        await alumnoService.deleteAlumno(this.id);
        alert("Lamentamos tu partida, regresa pronto!");
        console.log("Eliminando perfil del usuario con correo: ", this.email);
        this.$router.push({name: 'Login'});
    }
  }
  },
}
</script>

<template>
  <pv-card class="card-edit-profile">
    <template #content>
      <div>
        <h2>Editar Perfil</h2>
        <form @submit.prevent="updateProfile">
          <input type="text" v-model="name" placeholder="Nombre" required/>
          <input type="text" v-model="surname" placeholder="Apellido" required/>
          <input type="email" v-model="email" placeholder="Correo" required/>
          <input type="password" v-model="password" placeholder="Contraseña" required/>
          <button type="submit">Actualizar Perfil</button>
        </form>
        <button @click="deleteProfile" class="delete">Eliminar Perfil</button>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.card-edit-profile {
  display: grid;
  place-items: center;
  height: 50vh;
  width: 50%;
  background-color: var(--caribben);
  border-radius: 10px;
  padding: 5px;
  margin: 0 auto;
}

.delete{
  background-color: #e86767;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin-top: 10px;
  cursor: pointer;
}
</style>