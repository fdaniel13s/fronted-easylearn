import http from "../../public/services/http-common.js";

export class AlumnosApiService {
    getAllAlumnos(){
        return http.get('/alumnos')
    }

    getAlumnoById(id){
        return http.get(`/alumnos/${id}`)
    }

    createAlumno(data){
        return http.post('/alumnos', data)
    }

    login(data){
        return http.get(`/alumnos/login?correo=${encodeURIComponent(data.correo)}&password=${encodeURIComponent(data.password)}`)
    }

    updateAlumno(id, data){
        return http.put(`/alumnos/${id}`, data)
    }

    deleteAlumno(id){
        return http.delete(`/alumnos/${id}`)
    }
}