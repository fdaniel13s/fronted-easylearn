<script>
import {CourseApiService} from "../services/course-api.service.js";

export default {
  name: "course-card.component",
  props: {
    courseId: Number,
    course: Object,
    index: Number
  },
  data() {
    return {
      courseId: 0,
      courseService: null,
    }
  },
  created() {
    this.courseId = this.$route.params.id;
    this.courseService = new CourseApiService();
    console.log(this.courseId);
  },
  methods: {
    async deleteCourse() {
      try {
        await this.courseService.deleteCourse(this.courseId);
        // Actualizar la lista de cursos después de eliminar
      } catch (error) {
        console.error(error);
      }
    },
    updateCourse() {
      // Navegar a la página de actualización de curso con el ID del curso
      this.$router.push(`/update-course/${this.courseId}`);
    },
    createCourse() {
      // Navegar a la página de creación de curso
      this.$router.push('/create-course');
    }
  }
}
</script>

<template>
  <pv-card class="custom-card" style="overflow: hidden">
      <div class="container">
        <div class="column">
          <div class="left-container">
            <p>{{index}}{{ course.titulo }}</p>
            <p>{{ course.descripcion }}</p>
            <p>{{ course.precio }}</p>
            <p>{{ course.categoria }}</p>
            <p>{{ course.fecha_creacion.$date }}</p>
            <p>{{ course.nivel }}</p>
          </div>
          <div class="right-container">
            <button @click="deleteCourse">Eliminar<i class="Eliminar"></i></button>
            <button @click="createCourse">Crear<i class="Crear"></i></button>
          </div>
        </div>
      </div>
  </pv-card>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5%;

}

.column {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.left-container {
  flex: 0.75;
  display: flex;
  flex-direction: row; /* Cambia esto de row a column */
  align-items: flex-start; /* Alinea los elementos a la izquierda */
  justify-content: space-between;
  margin-right: -130px;
}
.left-container p {
  margin: 26px;
  line-height: 1.5;
}
.right-container {
  flex: 0.25;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 130px;
}

.custom-card {
  width: 100%;
  height: auto;
  min-height: 50px;
  border-radius: 10px;
  margin-bottom: 50%;
}
button {
  background: #26A96C;
  color: inherit;
  border: none;
  padding: 0.5rem;
  font: inherit;
  cursor: pointer;
  margin-right: 50px;
  outline: inherit;
}
.pi-trash, .pi-pencil, .pi-plus {
  color: #000000;
  font-size: 20px;
  margin: 0 10px;
}
</style>