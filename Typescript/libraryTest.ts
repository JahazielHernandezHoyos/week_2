import { Library } from "./Library";
import { Book } from "./Book";

let books: Book[] = [
    new Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions"),
    new Book("Introducción a TypeScript", 234, "2344433-BC23334", "Joseph Smith", "Now Editions"),
    new Book("Introducción a Angular", 235, "2344433-BC23335", "Joseph Smith", "Now Editions"),
    new Book("Introducción a NodeJS", 236, "2344433-BC23336", "Joseph Smith", "Now Editions"),
    new Book("Introducción a React", 237, "2344433-BC23337", "Joseph Smith", "Now Editions"),
    new Book("Introducción a Angular", 238, "2344433-BC23338", "Joseph Smith", "Now Editions")]


let library = new Library(books, "Calle falsa 123", "Juan");


console.log(library.toString());
console.log(library.getAddress());
console.log(library.getManager());
library.setAddress("Calle verdadera 123");
console.log(library.getAddress());
library.setManager("Pedro");
console.log(library.getManager());
console.log(library.getNumberOfBooks());
console.log(library.findByAuthor("Joseph Smith"));
