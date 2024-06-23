import http from "../../public/services/http-common.js";
import axios from "axios";

export class AlumnosApiService {

    getAlumnoById(id){
        return http.get(`/alumnos/${id}`)
    }

    createAlumno(data){
        return http.post('/alumnos', data)
    }

    login(data){
        return http.get(`/alumnos/login?correo=${encodeURIComponent(data.correo)}&password=${encodeURIComponent(data.password)}`)
    }

    updateAlumno(studentId, newCourse) {
        // Primero, obtén el alumno actual
        return this.getAlumnoById(studentId)
            .then(alumno => {
                // Si 'cursos' no existe, inicialízalo como un array vacío
                if (!alumno.cursos) {
                    alumno.cursos = [];
                }

                // Luego, agrega el nuevo curso al array de cursos del alumno
                alumno.cursos.push(newCourse);

                console.log(alumno.data);
                return http.put(`/alumnos/${studentId}`, newCourse);
                // Finalmente, realiza la petición PUT para actualizar el alumno con el nuevo array de cursos
            });
    }

    update(studentId, data){
        return http.put(`/alumnos/update/${studentId}`, data)
    }

    deleteAlumno(id){
        return http.delete(`/alumnos/${id}`)
    }


}