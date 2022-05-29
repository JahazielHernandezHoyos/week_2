// Crear la Clase Library con la siguiente estructura:
// • Atributos Privados:
// - books: array of Book
// - address: string
// - manager: string
// • Constructor para todos los atributos.
// • Metodos Públicos:
// - getters y setters para los atributos address y manager.
// - toString (): string.
// Devuelve un string con TODA la información de todos los libros de la biblioteca con la
// siguiente estructura :
// “Book1:
// Title – Introducción a Javascript
// Numer of Pages- 233
// IBN – 2344433-BC23333
// Author – Joseph Smith
// Editorial – Now Editions…….”
// getNumberOfBooks ():number.
// Devuelve el numero de libros de la biblioteca.
// - findByAuthor (author:string):Book[].
// Devuelve los libros cuyo autor coincida con el nombre que se pasa como parámetro
// del método.
import { Book } from "./Book";

export class Library {
    private books: Book[];
    private address: string;
    private manager: string;

    constructor(books: Book[], address: string, manager: string) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }

    public getAddress(): string {
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public getManager(): string {
        return this.manager;
    }

    public setManager(manager: string): void {
        this.manager = manager;
    }

    public toString(): string {
        let result = "";
        this.books.forEach(book => {
            result += `Book${this.books.indexOf(book) + 1}:
Title - ${book.getTitle()}
Numer of Pages - ${book.getnPages()}
ISBN - ${book.getIsbn()}
Author - ${book.getAuthor()}
Editorial - ${book.getEditorial()}
`
        });
        return result;
    }

    public getNumberOfBooks(): number {
        return this.books.length;
    }

    public findByAuthor(author: string): Book[] {
        let result: Book[] = [];
        this.books.forEach(book => {
            if (book.getAuthor() === author) {
                result.push(book);
            }
        });
        return result;
    }
}




