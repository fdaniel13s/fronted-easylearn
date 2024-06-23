import http from "../../public/services/http-common.js";

export class CourseApiService {
    getAllCourses() {
        return http.get('/cursos');
    }

    deleteCourse(id) {
        return http.delete(`/cursos/${id}`);
    }

}