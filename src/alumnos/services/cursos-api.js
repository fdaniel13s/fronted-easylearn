import http from "../../public/services/http-common.js";


export class CursosApiService {
    getAllCursos(){
        return http.get('/cursos')
    }

    getCursoById(id){
        return http.get(`/cursos/${id}`)
    }

    createCurso(data){
        return http.post('/cursos', data)
    }

    updateCurso(id, data){
        return http.put(`/cursos/${id}`, data)
    }

    deleteCurso(id){
        return http.delete(`/cursos/${id}`)
    }

    getCursosByInstructorId(id){
        return http.get(`/cursos/instructor/${id}`)
    }
}