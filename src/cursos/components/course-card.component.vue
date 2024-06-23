<script>
import {CourseApiService} from "../services/course-api.service.js";
import {AlumnosApiService} from "../../alumnos/services/alumnos-api.js";

export default {
  name: "course-card.component",
  props: {
    course: Object,
    index: Number,
    studentId: String
  },
  data() {
    return {
      courseService: null,
      alumnoService: null
    }
  },
  created() {
    this.courseService = new CourseApiService();
    this.alumnoService = new AlumnosApiService();
    console.log(this.course._id);
    console.log(this.studentId)
  },
  methods: {
    async addCourse() {
      try {
        console.log(this.course);
        await this.alumnoService.updateAlumno(this.studentId, this.course ) // Accede al ID del curso a través de la prop `course`
      } catch (error) {
        console.error(error);
      }
    },
    async deleteCourse() {
      try {
        await this.courseService.deleteCourse(this.course._id); // Accede al ID del curso a través de la prop `course`
        // Actualizar la lista de cursos después de eliminar
      } catch (error) {
        console.error(error);
      }
    },
    updateCourse() {
      // Navegar a la página de actualización de curso con el ID del curso
      this.$router.push(`/update-course/${this.course._id.$oid}`); // Accede al ID del curso a través de la prop `course`
    },
    createCourse() {
      // Navegar a la página de creación de curso
      this.$router.push('/create-course');
    }
  }
}
</script>
<template>
  <pv-card class="custom-card" style="">
    <template #content>
      <div class="container">
        <div class="column">
          <div class="left-container">
            <p>{{ course.titulo }}</p>
            <p>{{ course.descripcion }}</p>
            <p>{{ course.precio }}</p>
            <p>{{ course.categoria }}</p>
            <p>{{ course.nivel }}</p>
          </div>
          <div class="right-container">
            <button @click="addCourse">Inscribirme</button>
          </div>
        </div>
      </div>
    </template>

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