<<<<<<< HEAD
const { nanoid } = require("nanoid");

class BookService {
    constructor(bookRepo) {
        this.bookRepo = bookRepo;
    }

    addBook(bookData) {
        const {
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading
        } = bookData;
        const id = nanoid(16);
        const finished = readPage === pageCount;
        const insertedAt = new Date().toISOString();
        const updatedAt = insertedAt;

        const newBook = {
            id,
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
            finished,
            insertedAt,
            updatedAt
        };

        return this.bookRepo.addBook(newBook);
    }

    getAllBooks(filters = {}) {
        let books = this.bookRepo.getBooks();

        if (filters.name) {
            books = books.filter(book => book.name.toLowerCase().includes(filters.name.toLowerCase()));
        }

        if (filters.reading !== undefined) {
            books = books.filter(book => book.reading === (filters.reading === '1'));
        }

        if (filters.finished !== undefined) {
            books = books.filter(book => book.finished === (filters.finished === '1'));
        }

        return books.map(book => ({
            id: book.id,
            name: book.name,
            publisher: book.publisher
        }));
    }

    getBookById(id) {
        return this.bookRepo.getBookById(id);
    }

    updateBook(id, bookData) {
        const {
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading
        } = bookData;

        const updatedAt = new Date().toISOString();
        const finished = pageCount === readPage;

        const updatedBook = {
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
            finished,
            updatedAt
        };

        const result = this.bookRepo.updateBook(id, updatedBook);

        return result ? this.bookRepo.getBookById(id) : false;
    }

    deleteBook(id) {
        return this.bookRepo.deleteBook(id);
    }
}

=======
const { nanoid } = require("nanoid");

class BookService {
    constructor(bookRepo) {
        this.bookRepo = bookRepo;
    }

    addBook(bookData) {
        const {
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading
        } = bookData;
        const id = nanoid(16);
        const finished = readPage === pageCount;
        const insertedAt = new Date().toISOString();
        const updatedAt = insertedAt;

        const newBook = {
            id,
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
            finished,
            insertedAt,
            updatedAt
        };

        return this.bookRepo.addBook(newBook);
    }

    getAllBooks(filters = {}) {
        let books = this.bookRepo.getBooks();

        if (filters.name) {
            books = books.filter(book => book.name.toLowerCase().includes(filters.name.toLowerCase()));
        }

        if (filters.reading !== undefined) {
            books = books.filter(book => book.reading === (filters.reading === '1'));
        }

        if (filters.finished !== undefined) {
            books = books.filter(book => book.finished === (filters.finished === '1'));
        }

        return books.map(book => ({
            id: book.id,
            name: book.name,
            publisher: book.publisher
        }));
    }

    getBookById(id) {
        return this.bookRepo.getBookById(id);
    }

    updateBook(id, bookData) {
        const {
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading
        } = bookData;

        const updatedAt = new Date().toISOString();
        const finished = pageCount === readPage;

        const updatedBook = {
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
            finished,
            updatedAt
        };

        const result = this.bookRepo.updateBook(id, updatedBook);

        return result ? this.bookRepo.getBookById(id) : false;
    }

    deleteBook(id) {
        return this.bookRepo.deleteBook(id);
    }
}

>>>>>>> f23ce36610417deba3b6ce798299ca0ef3001a18
module.exports = BookService;