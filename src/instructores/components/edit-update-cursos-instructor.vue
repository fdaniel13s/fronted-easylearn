<script>
import { CursosApiService } from "../../alumnos/services/cursos-api.js";

export default {
  name: "edit-update-cursos-instructor",
  props: ['id'],
  data() {
    return {
      cursos: [],
      nuevoCurso: {
        titulo: "",
        descripcion: "",
        instructor: this.id,
        precio: 0,
        categoria: "",
        nivel: "",
        ultima_actualizacion: new Date()

      },
      cursoEditado: null
    };
  },
  methods: {
    async editarCurso(){
      if (this.cursoEditado && this.cursoEditado._id) {
        const cursosService = new CursosApiService();
        await cursosService.updateCurso(this.cursoEditado._id, this.cursoEditado);
        alert("Curso actualizado exitosamente!");
        this.getCursos(); // Actualiza la lista de cursos
      } else {
        console.error('cursoEditado o cursoEditado.id es undefined');
      }
    },

    async getCursos() {
      const cursosService = new CursosApiService();
      this.cursos = await cursosService.getCursosByInstructorId(this.id).then(
        response => {
          return response.data;
        }
      )
      console.log("Cursos del instructor: ", this.cursos);
    },
    async crearCurso() {
      const cursosService = new CursosApiService();
      await cursosService.createCurso(this.nuevoCurso);
      alert("Curso creado exitosamente!");
      await this.getCursos(); // Actualiza la lista de cursos
    }
  },
  created() {
    this.getCursos();
  }
}
</script>

<template>
  <div>
    <h2>Mis Cursos</h2>
    <pv-card v-if="cursos.length === 0"  >
      <template #header>
        <h3>No tienes cursos creados</h3>
      </template>
    </pv-card>
    <div v-else>
      <pv-card v-for="curso in cursos" :key="curso.id" class="cursos" >
        <template #header>
          <h3>{{ curso.titulo }}</h3>
        </template>

        <template #content>
          <p>Descripcion: {{ curso.descripcion }}</p>
          <p>Precio: {{curso.precio}} </p>
          <p>Nivel: {{curso.nivel}} </p>
          <p>Ultima actualización: {{ new Date(curso.ultima_actualizacion).toLocaleDateString() }}</p>
          <button @click="cursoEditado = JSON.parse(JSON.stringify(curso))">Editar</button>
        </template>
        <template #footer>
          <form v-if="cursoEditado" @submit.prevent="editarCurso">
            <input type="text" v-model="cursoEditado.titulo" placeholder="Nombre del curso" required/>
            <input type="text" v-model="cursoEditado.descripcion" placeholder="Descripción del curso"/>
            <button type="submit">Actualizar Curso</button>
          </form>
        </template>

      </pv-card>

    </div>


    <h2>Crear Curso</h2>
    <form @submit.prevent="crearCurso">
      <input type="text" v-model="nuevoCurso.titulo" placeholder="Nombre del curso" required/>
      <input type="text" v-model="nuevoCurso.descripcion" placeholder="Descripción del curso"/>
      <input type="text" v-model="nuevoCurso.categoria" placeholder="Categoria del curso"/>
      <input type="number" v-model="nuevoCurso.precio" placeholder="Precio del curso"/>
      <input type="text" v-model="nuevoCurso.nivel" placeholder="Nivel del curso"/>
      <button type="submit">Crear Curso</button>
    </form>
  </div>
</template>

<style scoped>
.cursos{
  margin-bottom: 10px;
  background-color: var(--jade);
  border-radius: 10px;
  padding: 5px;
}
input {
  margin-bottom: 5px;
  width: 60%;
}
button{
  margin-top:10px;
}
</style>