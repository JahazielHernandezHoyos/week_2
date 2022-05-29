"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        return currentYear - this.age;
    };
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    return Person;
}());
exports.Person = Person;
var person = new Person("Juan", 32, "Calle falsa 123");
console.log(person.name);
console.log(person.age);
console.log(person.yearOfBirth(2019));
console.log(person.getAddress());
person.setAddress("Calle verdadera 123");
console.log(person.getAddress());
