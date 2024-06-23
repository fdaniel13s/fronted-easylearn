import http from "../../public/services/http-common.js";

export class PublicationApiService {
    getAllPublications() {
        return http.get('/publicaciones');
    }
    
    getPublicationById(id) {
        return http.get(`/publicaciones/${id}`);
    }

    createPublication(publicationResource) {
        return http.post('/publicaciones', publicationResource);
    }

    createComment(id, comment) {
        return http.post(`/publicaciones/${id}/comentarios`, comment);
    }

    updatePublication(id, publicationResource) {
        return http.put(`/publicaciones/${id}`, publicationResource);
    }

    deletePublication(id) {
        return http.delete(`/publicaciones/${id}`);
    }

    findByContent(content) {
        return http.get(`/publicaciones?content=${content}`);
    }
}