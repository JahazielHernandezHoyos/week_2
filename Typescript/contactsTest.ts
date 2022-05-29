import { Contacts } from "./Contacts";
import { Person } from "./Person";

let contacts = new Contacts();

contacts.people.push(new Person("Juan", 32, "Calle falsa 123"));
contacts.people.push(new Person("Pedro", 25, "Calle verdadera 123"));
contacts.people.push(new Person("Ana", 20, "Calle falsa 123"));


// Print the calendar
contacts.printCalendar();

