<script>
import { AlumnosApiService } from "../services/alumnos-api.js";
import Card from "primevue/card";
import Button from "primevue/button";

export default {
  name: "perfil-alumno",
  props: ['id'],
  components: {
    Card,
    Button
  },
  data() {
    return {
      alumno: null,
      suscripciones: 0
    };
  },
  created() {
    const api = new AlumnosApiService();
    api.getAlumnoById(this.id) // Reemplaza 1 con el ID del alumno que deseas obtener
        .then(response => {
          this.alumno = response.data;
          console.log("Datos del alumno: ", this.alumno)
        })
        .catch(error => {
          console.error("Hubo un error al obtener los datos del alumno: ", error);
        });
  },
}
</script>

<template>
  <Card class="card-profile">
    <template #header>
      <h2>Bienvenido {{alumno?.nombre}}  {{alumno?.apellido}}</h2>
    </template>
    <template #content>
      <div class="perfil-alumno">
        <span>{{alumno?.nombre}}  {{alumno?.apellido}}</span>
        <p>{{alumno?.descripcion}}</p>
        <p>Estas aprendiendo actualmente con la maravillosa cantidad de <b>{{alumno?.suscripciones.length}} cursos</b></p>
      </div>
    </template>

    <template #footer>
      <Button label="Editar perfil" @click="$router.push({ name: 'EditProfile', params: { id: alumno.id } })" />    </template>
  </Card>


</template>

<style scoped>
.card-profile{
  width: 50%;
  background-color: var(--jade);
  border-radius: 10px;
  padding: 5px;
}

</style>