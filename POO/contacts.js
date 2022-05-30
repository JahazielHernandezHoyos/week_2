import { Person } from "./person.js";

class Contacts {
  constructor() {
    this.person = [
      new Person(60, 1.76, 1995, ["leer", "comer", "dormir"]),
      new Person(50, 1.72, 2000, ["futbol", "guitarra", "correr"]),
      new Person(80, 1.8, 1990, ["ajedrez", "beisbol", "caminar"]),
    ];
  }
  printPersons() {
    this.person.forEach((element) => {
      element.printAll();
      element.printHobbies();
    });

  }
}

export { Contacts };
