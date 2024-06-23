export class Publication {
    constructor(id = '', user_id = '', content = '', publication_date = '', course_id = '', type = '', comments = [], reactions = []) {
        this.id = id;
        this.user_id = user_id;
        this.content = content;
        this.publication_date = publication_date;
        this.course_id = course_id;
        this.type = type;
        this.comments = comments;
        this.reactions = reactions;
    }
}