<<<<<<< HEAD
const validateBook = require("../validators/books.validator");
const BookService = require("../service/books.service");
const BookRepo = require("../repository/books.repo");
const { getServerHandler, BookHandler } = require("../handler/books.handler");

const bookRepo = new BookRepo();
const bookService = new BookService(bookRepo);
const bookHandler = new BookHandler(bookService);

const routes = [
    {
        method: "GET",
        path: "/",
        handler: getServerHandler
    },
    {
        method: "POST",
        path: "/books",
        options: {
            validate: {
                payload: validateBook
            },
            handler: bookHandler.addBookHandler.bind(bookHandler)
        }
    },
    {
        method: "GET",
        path: "/books",
        handler: bookHandler.getAllBooksHandler.bind(bookHandler)
    },
    {
        method: "GET",
        path: "/books/{id}",
        handler: bookHandler.getBookByIdHandler.bind(bookHandler)
    },
    {
        method: "PUT",
        path: "/books/{id}",
        options: {
            validate: {
                payload: validateBook
            },
            handler: bookHandler.updateBookHandler.bind(bookHandler)
        }
    },
    {
        method: "DELETE",
        path: "/books/{id}",
        handler: bookHandler.deleteBookHandler.bind(bookHandler)
    }
];

module.exports = routes;
=======
const validateBook = require("../validators/books.validator");
const BookService = require("../service/books.service");
const BookRepo = require("../repository/books.repo");
const { getServerHandler, BookHandler } = require("../handler/books.handler");

const bookRepo = new BookRepo();
const bookService = new BookService(bookRepo);
const bookHandler = new BookHandler(bookService);

const routes = [
    {
        method: "GET",
        path: "/",
        handler: getServerHandler
    },
    {
        method: "POST",
        path: "/books",
        options: {
            validate: {
                payload: validateBook
            },
            handler: bookHandler.addBookHandler.bind(bookHandler)
        }
    },
    {
        method: "GET",
        path: "/books",
        handler: bookHandler.getAllBooksHandler.bind(bookHandler)
    },
    {
        method: "GET",
        path: "/books/{id}",
        handler: bookHandler.getBookByIdHandler.bind(bookHandler)
    },
    {
        method: "PUT",
        path: "/books/{id}",
        options: {
            validate: {
                payload: validateBook
            },
            handler: bookHandler.updateBookHandler.bind(bookHandler)
        }
    },
    {
        method: "DELETE",
        path: "/books/{id}",
        handler: bookHandler.deleteBookHandler.bind(bookHandler)
    }
];

module.exports = routes;
>>>>>>> f23ce36610417deba3b6ce798299ca0ef3001a18
