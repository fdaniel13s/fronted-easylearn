<script>
import {PublicationApiService} from "../services/publication-api.service.js";
import Card from 'primevue/card';

export default {
  name: "PublicationCard",
  props: {
    publication: Object,
  },
  data() {
    return {
      course: null,
      newComment: ''
    }
  },
  methods: {
    async deletePublication() {
      const apiService = new PublicationApiService();
      try {
        const response = await apiService.deletePublication(this.publication._id);
        console.log(response.data);
        this.$emit('publication-deleted', this.publication._id);
      } catch (error) {
        console.error(error);
      }
    },
    async createComment() {
      const apiService = new PublicationApiService();
      try {
        const comment = {
          contenido: this.newComment
        };
        console.log(comment);
        await apiService.createComment(this.publication._id, comment);
        this.publication.comentarios.push(comment);
        this.newComment = '';
      } catch (error) {
        console.error(error);
      }
    }
  },
  async created() {
    const apiService = new PublicationApiService();
    try {

    } catch (error) {
      console.error(error);
    }
  }
}
</script>

<template>
  <pv-card class="custom-card">
    <template #content>
      <div class="publication-card">
        <p>{{ publication.contenido }}</p>
        <div v-for="(comment, index) in publication.comentarios" :key="index">
          <p>Comentario {{ index + 1 }}: {{ comment.contenido }}</p>
        </div>
        <div class="botones" >
          <button @click="deletePublication">Eliminar<i class="button"></i></button>
          <input class="nuevo-comentario" v-model="newComment" type="text" placeholder="Escribe un nuevo comentario">
          <button @click="createComment">Enviar comentario</button>
        </div>
      </div>
    </template>

  </pv-card>
</template>

<style scoped>
publication-card {
  background: #26A96C !important;
}

.botones{
  margin-bottom: 30px;
}

.nuevo-comentario {
  margin-right: 20px !important;
}

button {
  background: #006D77;
  margin-right: 20px;
}

.publication-card{
  margin-bottom: 15% !important; /* Ajusta este valor según tus necesidades */
  margin-top: 15% !important; /* Ajusta este valor según tus necesidades */
  background: #26A96C;
}

pi-pencil, .pi-trash {
  /* Agrega aquí los estilos para los iconos de editar y eliminar */
}
</style>