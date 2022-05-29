"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.setAddress = function (address) {
        this.address = address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    Library.prototype.toString = function () {
        var _this = this;
        var result = "";
        this.books.forEach(function (book) {
            result += "Book".concat(_this.books.indexOf(book) + 1, ":\nTitle - ").concat(book.getTitle(), "\nNumer of Pages - ").concat(book.getnPages(), "\nISBN - ").concat(book.getIsbn(), "\nAuthor - ").concat(book.getAuthor(), "\nEditorial - ").concat(book.getEditorial(), "\n");
        });
        return result;
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var result = [];
        this.books.forEach(function (book) {
            if (book.getAuthor() === author) {
                result.push(book);
            }
        });
        return result;
    };
    return Library;
}());
exports.Library = Library;
