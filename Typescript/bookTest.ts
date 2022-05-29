import { Book } from "./Book";

let book = new Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");

console.log(book.getTitle());
console.log(book.getnPages());
console.log(book.getIsbn());
console.log(book.getAuthor());
console.log(book.getEditorial());

book.setTitle("Introducción a Javascript");
book.setnPages(233);
book.setIsbn("2344433-BC23333");
book.setAuthor("Joseph Smith");
book.setEditorial("Now Editions");
