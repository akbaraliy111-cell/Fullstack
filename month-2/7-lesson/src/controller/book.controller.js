import Book from '../schema/book.schema.js';
import Author from '../schema/author.schema.js'
import { ApiError } from '../utils/ApiError.js';

class BookController {
    async create(req, res) {
        try {
            const author = await Author.findById(req.body.authorId);
            if (!author){
                throw new ApiError('Author not found', 404);
            }
            const book = await Book.create({author, ...req.body});
            return res.status(201).json(book);
        } catch (error) {
            const err = {
                statusCode: error.status ? error.status : 500,
                message: error.message ? error.message : 'Internal server error'
            };
            return res.status(err.statusCode).json({
                message: err.message
            });
        }
    }

    async findAll(req, res) {
        try {
            const books = await Book.find().populate('author');
            return res.status(200).json(books);
        } catch (error) {
            const err = {
                statusCode: error.status ? error.status : 500,
                message: error.message ? error.message : 'Internal server error'
            };
            return res.status(err.statusCode).json({
                message: err.message
            });
        }
    }

    async findBy(req, res) {
        try {
            const book = await Book.findById(req.params.id).populate('author');
            if (!book) {
                throw new ApiError('book not found', 404);
            }
            return res.status(200).json(book);
        } catch (error) {
            const err = {
                statusCode: error.status ? error.status : 500,
                message: error.message ? error.message : 'Internal server error'
            };
            return res.status(err.statusCode).json({
                message: err.message
            });
        }
    }

    async update(req, res) {
        try {
            const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!book) {
                throw new ApiError('Book not found', 404);
            }
            return res.status(200).json(book);
        } catch (error) {
            const err = {
                statusCode: error.status ? error.status : 500,
                message: error.message ? error.message : 'Internal server error'
            };
            return res.status(err.statusCode).json({
                message: err.message
            });
        }
    }

    async delete(req, res) {
        try {
            const book = await Book.findByIdAndDelete(req.params.id);
            if (!book) {
                throw new ApiError('Book not found', 404);
            }
            return res.status(200).json({ message: 'Book deleted successfully' });
        } catch (error) {
            const err = {
                statusCode: error.status ? error.status : 500,
                message: error.message ? error.message : 'Internal server error'
            };
            return res.status(err.statusCode).json({
                message: err.message
            });
        }
    }
}

export default new BookController();
