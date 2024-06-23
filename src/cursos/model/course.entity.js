export class Course {
    constructor(_id = '', titulo = '', descripcion = '', precio = 0, categoria = '', fecha_creacion = '', ultima_actualizacion = '', nivel = '', lecciones = [], comentarios_valoracion = []) {
        this._id = _id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.categoria = categoria;
        this.fecha_creacion = fecha_creacion;
        this.ultima_actualizacion = ultima_actualizacion;
        this.nivel = nivel;
        this.lecciones = lecciones;
        this.comentarios_valoracion = comentarios_valoracion;
    }
}

export class Lesson {
    constructor(titulo = '', url = '', tipo = '', recursos = []) {
        this.titulo = titulo;
        this.url = url;
        this.tipo = tipo;
        this.recursos = recursos;
    }
}

export class CommentRating {
    constructor(comentario = '', estrella = 0) {
        this.comentario = comentario;
        this.estrella = estrella;
    }
}