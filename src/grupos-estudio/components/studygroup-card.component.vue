<script>
import Calendar from "primevue/calendar";
import Card from "primevue/card";
import {StudyGroupApiService} from "../services/studygroup-api.service.js";

export default {
  name: "studygroup-card",
  components:{
    Card, Calendar
  },
  props: {
    studygroup: {
      type: Object,
      required: true
    },
    userId:{
      type:String,
      required: true
    }
  },
  methods:{
    async joinGroup(){
      const studyGroupService = new StudyGroupApiService();

      const newMember = {
        usuario_id: this.userId, // Reemplaza esto con el ID del usuario actual
        fecha_union: new Date().toISOString()
      };

      console.log(newMember);

      try {
        await studyGroupService.updateStudyGroup(this.studygroup._id, newMember);
        alert("Te has unido al grupo de estudio!");
      } catch (error) {
        console.error("Hubo un error al unirse al grupo de estudio: ", error);
      }
    }
  }
}
</script>

<template>
  <Card class="card">
    <template #header>
      <h2>{{ studygroup.nombre_grupo }}</h2>
      <p>{{ studygroup.descripcion }}</p>
    </template>
    <template #content>
      <p>Fecha de creación: {{ new Date(studygroup.fecha_creacion).toLocaleDateString() }}</p>
      <p>Cantidad de miembros: {{ studygroup.miembros.length }}</p>
    </template>
    <template #footer>
      <h3>Publicaciones:</h3>
      <div v-for="(publicacion, index) in studygroup.publicaciones" :key="publicacion._id">
        <p>{{ publicacion.contenido }}</p>
        <p>Fecha de publicación: {{ new Date(publicacion.fecha_publicacion).toLocaleDateString() }}</p>
        <h4>Comentarios:</h4>
        <ul>
          <li v-for="(comentario, index) in publicacion.comentarios" :key="comentario._id">
            {{ comentario.contenido }}
          </li>
        </ul>
      </div>
      <button @click="joinGroup">Unirse al grupo de estudio</button>
    </template>
  </Card>


</template>



<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 1em;
  margin: 1em;
  background-color:var(--richblack)
}
</style>