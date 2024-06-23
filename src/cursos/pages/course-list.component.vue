<script>
import CourseCardComponent from "../components/course-card.component.vue";
import {CourseApiService} from "../services/course-api.service.js";

export default {
  name: "course-list",
  components: {CourseCardComponent},
  data() {
    return {
      courses: [],
      courseService: null,
      excludedCourses: ["6667a0312893ed11f1965aa4", "666f06dc82c467ef926d4ebf", "666f06dc82c467ef926d4ec1"]
    }
  },
  created() {
    this.courseService = new CourseApiService();

    this.courseService.getAllCourses()
        .then(response => {
          this.courses = response.data.filter(course => !this.excludedCourses.includes(course._id.$oid));
        })
        .catch(e => {
          console.log(e);
        });
  },
};
</script>

<template>
  <div>
    <div class="container">
      <div class="column">
        <h2 class="title">Cursos</h2>
        <div class="courses-container">
          <div class="headers">
            <h2 class="Titulo">Titulo</h2>
            <h2 class="Descripcion">Descripcion</h2>
            <h2 class="Precio">Precio</h2>
            <h2 class="Categoria">Categoria</h2>
            <h2 class="Fecha">Fecha</h2>
            <h2 class="Nivel">Nivel</h2>
          </div>
          <div class="courses">
            <CourseCardComponent
                class="course-card"
                v-for="(course, index) in courses"
                :key="course._id.$oid"
                :course="course"
            ></CourseCardComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 20px auto;
}

.title {
  color: #ffffff !important;
  font-size: 32px !important;
  font-weight: bold !important;
  margin-top: 20px !important;
  margin-bottom: 20px !important;
}

.Nivel {
  position: relative;
  left: 50px;
}

.headers {
  display: flex;
  flex-direction: row; /* Cambia esto de column a row */
  justify-content: space-between; /* Alinea los elementos horizontalmente */
  align-items: center;
}

.headers h2{
  font-size: 20px;
  margin: 26px;
}



.column {
  margin-top: 20px;
  flex: 1;
  padding: 0 10px;
}
.column h2 {
  text-align: center;
  margin-bottom: 10px;
}
.column .title{
  color: rgba(26, 26, 26, 0.749);
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
}
.courses-container {
  display: flex;
  flex-direction: row; /* Cambia esto de column a row */
  justify-content: space-between; /* Alinea los elementos horizontalmente */
  align-items: flex-start; /* Alinea los elementos al inicio */
  flex-wrap: wrap;
  background-color: #BD3F57;
  border-radius: 30px;
  padding: 10px;
  margin-bottom: 5px;
}

.course-card{
  margin-bottom: 5px;
}
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  .column {
    width: 100%;
  }
}
</style>