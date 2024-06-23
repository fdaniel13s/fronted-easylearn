<script>
import { AlumnosApiService } from "../../alumnos/services/alumnos-api.js";
import { InstructorApiService } from "../../alumnos/services/instructor-api.js"; // Asegúrate de usar la ruta correcta a tu servicio de instructores
export default {
  name: "login-page",
  data() {
    return {
      email: "",
      password: "",
      role: "student" // valor por defecto
    };
  },
  methods: {
    async login() {
      const alumnoService = new AlumnosApiService();
      const instructorService = new InstructorApiService();

      const userData = {
        correo: this.email,
        password: this.password
      };

      let response;
      if (this.role === 'student') {
        response = await alumnoService.login(userData);
        this.$router.push({name: 'HomeAlumnos', params:{id: response.data._id}});
      } else {
        response = await instructorService.login(userData);
        this.$router.push({name: 'HomeInstructor', params:{id: response.data._id}});
      }

      console.log(response.data._id);
    }
  }
}
</script>

<template>
  <pv-card class="card-login">
    <template #content>
        <h2>Iniciar sesión</h2>
        <form @submit.prevent="login">
          <input type="email" v-model="email" placeholder="Correo" required/>
          <input type="password" v-model="password" placeholder="Contraseña" required/>
          <select v-model="role">
            <option value="student">Alumno</option>
            <option value="instructor">Instructor</option>
          </select>
          <button type="submit">Iniciar sesión</button>
        </form>
    </template>

    <template #footer>
      <p >¿No tienes cuenta? <router-link class="link" to="/register">Regístrate</router-link></p>
    </template>
  </pv-card>
</template>

<style scoped>


.card-login {
  display: grid;
  place-items: center;
  height: 50vh;
  width: 50%;
  background-color: var(--jade);
  border-radius: 10px;
  padding: 5px;
  margin: 0 auto;
}

.link{
  color:white;
}

.link:hover{
  color: black;
}


</style>