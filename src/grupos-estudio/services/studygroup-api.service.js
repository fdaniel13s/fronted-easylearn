import http from "../../public/services/http-common.js";

export class StudyGroupApiService {
    getAllStudyGroups() {
        return http.get('/grupos_estudio');
    }

    getStudyGroupById(id) {
        return http.get(`/grupos_estudio/${id}`);
    }

    createStudyGroup(studyGroupResource) {
        return http.post('/grupos_estudio', studyGroupResource);
    }

    updateStudyGroup(id, studyGroupResource) {
        return http.put(`/grupos_estudio/${id}`, studyGroupResource);
    }

    deleteStudyGroup(id) {
        return http.delete(`/grupos_estudio/${id}`);
    }

    findByGroupName(group_name) {
        return http.get(`/grupos_estudio?group_name=${group_name}`);
    }
}