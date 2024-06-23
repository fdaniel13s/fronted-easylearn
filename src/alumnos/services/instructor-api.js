import http from "../../public/services/http-common.js";

export class InstructorApiService {
    getAllInstructors(){
        return http.get('/instructores')
    }

    getInstructorById(id){
        return http.get(`/instructores/${id}`)
    }

    createInstructor(data){
        return http.post('/instructores', data)
    }

    login(data){
        return http.get(`/instructores/login?correo=${encodeURIComponent(data.correo)}&password=${encodeURIComponent(data.password)}`)
    }

    updateInstructor(id, data){
        return http.put(`/instructores/${id}`, data)
    }

    deleteInstructor(id){
        return http.delete(`/instructores/${id}`)
    }
}