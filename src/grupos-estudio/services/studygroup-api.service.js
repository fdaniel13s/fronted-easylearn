import http from "../../public/services/http-common.js";

export class StudyGroupApiService {
    getAllStudyGroups() {
        return http.get('/grupos-de-estudio');
    }

    getStudyGroupById(id) {
        return http.get(`/grupos-de-estudio/${id}`);
    }

    createStudyGroup(studyGroupResource) {
        return http.post('/grupos-de-estudio', studyGroupResource);
    }

    updateStudyGroup(id, studyGroupResource) {
        return http.put(`/grupos-de-estudio/${id}`, studyGroupResource);
    }

    deleteStudyGroup(id) {
        return http.delete(`/grupos-de-estudio/${id}`);
    }

    findByGroupName(group_name) {
        return http.get(`/grupos-de-estudio?group_name=${group_name}`);
    }
}