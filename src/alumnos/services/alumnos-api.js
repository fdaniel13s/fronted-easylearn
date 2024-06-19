import http from "../../public/services/http-common.js";

export class AlumnosApiService {
    getAllAlumnos(){
        return http.get('/alumnos')
    }

    getAlumnoById(id){
        return http.get(`/alumnos/${id}`)
    }


}