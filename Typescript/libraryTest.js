"use strict";
exports.__esModule = true;
var Library_1 = require("./Library");
var Book_1 = require("./Book");
var books = [
    new Book_1.Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions"),
    new Book_1.Book("Introducción a TypeScript", 234, "2344433-BC23334", "Joseph Smith", "Now Editions"),
    new Book_1.Book("Introducción a Angular", 235, "2344433-BC23335", "Joseph Smith", "Now Editions"),
    new Book_1.Book("Introducción a NodeJS", 236, "2344433-BC23336", "Joseph Smith", "Now Editions"),
    new Book_1.Book("Introducción a React", 237, "2344433-BC23337", "Joseph Smith", "Now Editions"),
    new Book_1.Book("Introducción a Angular", 238, "2344433-BC23338", "Joseph Smith", "Now Editions")
];
var library = new Library_1.Library(books, "Calle falsa 123", "Juan");
console.log(library.toString());
console.log(library.getAddress());
console.log(library.getManager());
library.setAddress("Calle verdadera 123");
console.log(library.getAddress());
library.setManager("Pedro");
console.log(library.getManager());
console.log(library.getNumberOfBooks());
console.log(library.findByAuthor("Joseph Smith"));
