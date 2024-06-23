export class StudyGroup {
    constructor(id = '', group_name = '', description = '', creation_date = '', members = [], publications = []) {
        this.id = id;
        this.group_name = group_name;
        this.description = description;
        this.creation_date = creation_date;
        this.members = members;
        this.publications = publications;
    }
}