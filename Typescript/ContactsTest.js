"use strict";
exports.__esModule = true;
var Contacts_1 = require("./Contacts");
var Person_1 = require("./Person");
var contacts = new Contacts_1.Contacts();
contacts.people.push(new Person_1.Person("Juan", 32, "Calle falsa 123"));
contacts.people.push(new Person_1.Person("Pedro", 25, "Calle verdadera 123"));
contacts.people.push(new Person_1.Person("Ana", 20, "Calle falsa 123"));
// Print the calendar
contacts.printCalendar();
