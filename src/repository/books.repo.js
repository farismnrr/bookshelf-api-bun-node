const Books = require("../models/books.model");

class BookRepo {
    addBook(book) {
        Books.push(book);
        return book;
    }

    getBooks() {
        return Books;
    }

    getBookById(id) {
        return Books.find((book) => book.id === id);
    }

    updateBook(id, updatedBook) {
        const index = Books.findIndex((book) => book.id === id);
        if (index === -1) {
            return false;
        }
        Books[index] = { ...Books[index], ...updatedBook };
        return true;
    }

    deleteBook(id) {
        const index = Books.findIndex((book) => book.id === id);
        if (index === -1) {
            return false;
        }
        Books.splice(index, 1);
        return true;
    }
}

module.exports = BookRepo;
