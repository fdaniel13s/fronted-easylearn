<script>
import {PublicationApiService} from "../services/publication-api.service.js";
import CourseListComponent from "../../cursos/pages/course-list.component.vue";
import PublicationCardComponent from "../components/publication-card.component.vue";

export default {
  name: "PublicationList",
  components: {PublicationCardComponent, CourseListComponent},
  data() {
    return {
      publications: [],
      newPublication: {
        contenido: '',
      }
    }
  },
  methods: {
    deletePublication(publicationId) {
      this.publications = this.publications.filter(
          publication => publication._id !== publicationId);
    },
    async createPublication() {
      const apiService = new PublicationApiService();
      try {
        this.newPublication.fecha_publicacion = new Date().toISOString();
        console.log(this.newPublication);
        const response = await apiService.createPublication(this.newPublication);
        this.publications.unshift(response.data);
        this.newPublication = {
          contenido: '',
        };
      } catch (error) {
        console.error(error);
      }
    }
  },
  created() {
    const apiService = new PublicationApiService();
    apiService.getAllPublications()
        .then(response => {
          this.publications = response.data;
          console.log(this.publications)
        })
        .catch(e => {
          console.log(e);
        });
  },
};
</script>

<template>
  <h2>Publicaciones</h2>
  <form @submit.prevent="createPublication">
    <label for="contenido">Contenido:</label>
    <input id="contenido" v-model="newPublication.contenido" type="text" required>
    <button type="submit">Crear publicación</button>
  </form>
  <div class="publication-list">
    <PublicationCardComponent
        v-for="(publication, index) in publications"
        :key="publication._id"
        :publication="publication"
        @publication-deleted="deletePublication"
    ></PublicationCardComponent>
  </div>
</template>

<style scoped>
.publication-list {
  /* Agrega aquí los estilos para la lista de publicaciones */
}
</style>