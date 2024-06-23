<script>
import {AlumnosApiService} from "../../alumnos/services/alumnos-api.js";
import {InstructorApiService} from "../../alumnos/services/instructor-api.js";

export default {
  name: "register-page",
  data() {
    return {
      email: "",
      password: "",
      name: "",
      surname: "",
      role: "student" // valor por defecto
    };
  },
  methods: {
    async register() {
      const alumnoService = new AlumnosApiService();
      const instructorService = new InstructorApiService();

      const userData = {
        correo: this.email,
        password: this.password,
        nombre: this.name,
        apellido: this.surname
      }

      console.log(userData);
      if(this.role === "student"){
        await alumnoService.createAlumno(userData);
      } else {
        await instructorService.createInstructor(userData);
      }
      alert("Registro Exitoso! Redirigiendo a login");
      this.$router.push({name: 'Login'});
      console.log("Registrando usuario con correo: ", this.email)
    }
  }
}
</script>

<template>
  <pv-card class="card-register">
    <template #content>
      <div>
        <h2>Registro</h2>
        <form @submit.prevent="register">
          <input type="text" v-model="name" placeholder="Nombre" required/>
          <input type="text" v-model="surname" placeholder="Apellido" required/>
          <input type="email" v-model="email" placeholder="Correo" required/>
          <input type="password" v-model="password" placeholder="Contraseña" required/>
          <p>Quiero registrame como :</p>
          <select v-model="role">
            <option value="student">Alumno</option>
            <option value="instructor">Instructor</option>
          </select>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </template>

    <template #footer>
      <p>¿Ya tienes una cuenta? <router-link to="/login">Inicia sesión</router-link></p>
    </template>
  </pv-card>
</template>

<style scoped>
.card-register {
  width: 50%;
  background-color: var(--jade);
  border-radius: 10px;
  padding: 5px;
}
</style>

