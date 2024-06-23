import http from "../../public/services/http-common.js";

export class CourseApiService {
    getAllCourses() {
        return http.get('/Cursos');
    }

    getCourseById(id) {
        return http.get(`/Cursos/${id}`);
    }

    createCourse(courseResource) {
        return http.post('/Cursos', courseResource);
    }

    updateCourse(id, courseResource) {
        return http.put(`/Cursos/${id}`, courseResource);
    }

    deleteCourse(id) {
        return http.delete(`/Cursos/${id}`);
    }

    findByTitle(title) {
        return http.get(`/Cursos?title=${title}`);
    }
}