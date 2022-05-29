import { Person } from "./person";

let person = new Person("Juan", 32, "Calle falsa 123");
console.log(person.name);
console.log(person.age);
console.log(person.yearOfBirth(2019));
console.log(person.getAddress());
person.setAddress("Calle verdadera 123");
console.log(person.getAddress());