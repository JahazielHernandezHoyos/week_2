import { Person } from "./person";

export class Contacts {
    public people: Person[];

    constructor() {
        this.people = [];
    }

    public printCalendar() {
        this.people.forEach(person => {
            console.log(person.name);
            console.log(person.age);
            console.log(person.yearOfBirth(2019));
            console.log(person.getAddress());
        });
    }
}

