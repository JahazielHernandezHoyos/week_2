"use strict";
exports.__esModule = true;
exports.Contacts = void 0;
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.people = [];
    }
    Contacts.prototype.printCalendar = function () {
        this.people.forEach(function (person) {
            console.log(person.name);
            console.log(person.age);
            console.log(person.yearOfBirth(2019));
            console.log(person.getAddress());
        });
    };
    return Contacts;
}());
exports.Contacts = Contacts;
