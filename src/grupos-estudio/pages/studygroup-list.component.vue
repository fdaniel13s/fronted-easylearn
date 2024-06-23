<script>

import StudygroupCard from "../components/studygroup-card.component.vue";
import {StudyGroupApiService} from "../services/studygroup-api.service.js";
import Button from "primevue/button";
import Card from "primevue/card";

export default {
  name: "studygroup-list.component.vue",

  components: {StudygroupCard,  Card, Button},
  data(){
    return {
      studygroups:[],
      newStudyGroup : {
        nombre_grupo: "",
        descripcion: "",
        fecha_creacion: new Date().toISOString(),
        miembros: [],
        publicaciones: []
      }
    };
  },
  computed:{
    userId(){
      return this.$route.params.id;
    }
  },
  methods:{
    async createGroup(){
      console.log("Crear grupo");
      const studygroupService = new StudyGroupApiService();
      try {
        await studygroupService.createStudyGroup(this.newStudyGroup);
        alert("Grupo creado exitosamente");
      } catch (error) {
        console.error("Hubo un error al crear el grupo de estudio: ", error);
      }
    }
  },
  async created() {
    const groupStudyService = new StudyGroupApiService();
    const response = await groupStudyService.getAllStudyGroups();
    this.studygroups = response.data;
    console.log(this.studygroups);
  }
}
</script>

<template>
  <h2>Bienvenido a los grupos de estudio, potencia tus estudios con más alumnos</h2>

  <studygroup-card v-for="(studygroup, index) in studygroups"
                   :key="studygroup._id"
                   :studygroup="studygroup"
                    :user-id="userId">

  </studygroup-card>

  <Card>
    <template #header>
      <h2>Crear un grupo de estudio</h2>
    </template>
    <template #content>
      <input type="text" v-model="newStudyGroup.nombre_grupo" placeholder="Nombre del grupo">
      <input type="text" v-model="newStudyGroup.descripcion" placeholder="Descripción del grupo">
    </template>
    <template #footer>
      <Button @click="createGroup">Crear grupo</Button>
    </template>
  </Card>

</template>

<style scoped>

</style>