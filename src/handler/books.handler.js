const {
    getSuccessResponse,
    getSuccessResponseData,
    getSuccessResponseNoMessage,
    getErrorResponse
} = require("../helper/responses.helper");

const getServerHandler = (request, h) => {
    return getSuccessResponse(h, "Server is running", 200);
};

class BookHandler {
    constructor(bookService) {
        this.bookService = bookService;
    }

    addBookHandler(request, h) {
        try {
            const book = request.payload;

            if (!book.name) {
                return getErrorResponse(
                    h,
                    "Gagal menambahkan buku. Mohon isi nama buku",
                    400
                );
            }

            if (book.readPage > book.pageCount) {
                return getErrorResponse(
                    h,
                    "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount",
                    400
                );
            }

            const newBook = this.bookService.addBook(book);

            return getSuccessResponseData(
                h,
                "Buku berhasil ditambahkan",
                { bookId: newBook.id },
                201
            );
        } catch (error) {
            console.error("Gagal menambahkan buku:", error);
            return getErrorResponse(
                h,
                "Gagal menambahkan buku. Terjadi kesalahan internal.",
                500
            );
        }
    }

    getAllBooksHandler(request, h) {
        try {
            const filters = request.query;
            const books = this.bookService.getAllBooks(filters);

            return getSuccessResponseNoMessage(h, { books }, 200);
        } catch (error) {
            console.error("Gagal mendapatkan buku:", error);
            return getErrorResponse(
                h,
                "Gagal mendapatkan buku. Terjadi kesalahan internal.",
                500
            );
        }
    }

    getBookByIdHandler(request, h) {
        try {
            const { id } = request.params;
            const book = this.bookService.getBookById(id);

            if (!book) {
                return getErrorResponse(h, "Buku tidak ditemukan", 404);
            }

            return getSuccessResponseNoMessage(h, { book }, 200);
        } catch (error) {
            console.error("Gagal mendapatkan buku:", error);
            return getErrorResponse(
                h,
                "Gagal mendapatkan buku. Terjadi kesalahan internal.",
                500
            );
        }
    }

    updateBookHandler(request, h) {
        try {
            const { id } = request.params;
            const book = request.payload;

            if (!book.name) {
                return getErrorResponse(
                    h,
                    "Gagal memperbarui buku. Mohon isi nama buku",
                    400
                );
            }

            if (book.readPage > book.pageCount) {
                return getErrorResponse(
                    h,
                    "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount",
                    400
                );
            }

            const updatedBook = this.bookService.updateBook(id, book);

            if (!updatedBook) {
                return getErrorResponse(
                    h,
                    "Gagal memperbarui buku. Id tidak ditemukan",
                    404
                );
            }

            return getSuccessResponseData(
                h,
                "Buku berhasil diperbarui",
                { book: updatedBook },
                200
            );
        } catch (error) {
            console.error("Gagal memperbarui buku:", error);
            return getErrorResponse(
                h,
                "Gagal memperbarui buku. Terjadi kesalahan internal.",
                500
            );
        }
    }

    deleteBookHandler(request, h) {
        try {
            const { id } = request.params;
            const deletedBook = this.bookService.deleteBook(id);

            if (!deletedBook) {
                return getErrorResponse(
                    h,
                    "Buku gagal dihapus. Id tidak ditemukan",
                    404
                );
            }

            return getSuccessResponse(h, "Buku berhasil dihapus", 200);
        } catch (error) {
            console.error("Gagal menghapus buku:", error);
            return getErrorResponse(
                h,
                "Gagal menghapus buku. Terjadi kesalahan internal.",
                500
            );
        }
    }
}

module.exports = { getServerHandler, BookHandler };
