<script>
import PublicationCardComponent from "../components/publication-card.component.vue";
import {PublicationApiService} from "../services/publication-api.service.js";
import CourseListComponent from "../../cursos/pages/course-list.component.vue";


export default {
  name: "PublicationList",
  components: {PublicationCardComponent, CourseListComponent},
  data() {
    return {
      publications: [],
    }
  },
  created() {
    const apiService = new PublicationApiService();
    apiService.getAllPublications()
        .then(response => {
          this.publications = response.data;
        })
        .catch(e => {
          console.log(e);
        });
  },
};
</script>

<template>
  <div class="publication-list">
    <PublicationCardComponent
        v-for="(publication, index) in publications"
        :key="publication._id.$oid"
        :publication="publication"
    ></PublicationCardComponent>
  </div>
</template>

<style scoped>
.publication-list {
  /* Agrega aquí los estilos para la lista de publicaciones */
}
</style>