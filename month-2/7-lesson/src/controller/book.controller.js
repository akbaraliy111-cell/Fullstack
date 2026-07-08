import Book from '../schema/book.schema.js';
import { ApiError } from '../utils/ApiError.js';

class BookController {
    async create(req, res) {
        try {
            const existName = await Book.findOne({ nick: req.body.name });
            if (existName) {
                throw new ApiError('Name already exists', 409);
            }
            const book = await Book.create(req.body);
            return res.status(201).json(book);
        } catch (error) {
            const err = {
                statusCode: error.status ? error.status : 500,
                message: error.message ? error.message : "Interval server error"
            }
            return res.status(err.statusCode).json({
                message: err.message
            });
        };
    };

    async findAll(req, res) {
        try {
            const book = await Book.find();
            return res.status(201).json(book);
        } catch (err) {
            return res.status(err.statusCode).json({
                message: err.message
            });
        };
    }

    async findBy(req, res) {
        try {
            const book = await Book.findById(req.params.id);
            if (!book) {
                throw new ApiError('Book not found', 404);
            }
            return res.status(200).json(book)
        } catch (error) {
            const err = {
                statusCode: error.status ? error.status : 500,
                message: error.message ? error.message : "Interval server error"
            }
            return res.status(err.statusCode).json({
                message: err.message
            });
        };
    };

    async delete(req, res) {
        try {
            const book = await Book.findByIdAndDelete(req.params.id);
            return res.status(200).json({ message: `Book ${book.name} deleted` })
        } catch (error) {
            const err = {
                statusCode: error.status ? error.status : 500,
                message: error.message ? error.message : "Interval server error"
            }
            return res.status(err.statusCode).json({
                message: err.message
            });
        };
    };
    async update(req, res) {
       try {
            const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true});
            return res.status(200).json( book )
        } catch (error) {
            const err = {
                statusCode: error.status ? error.status : 500,
                message: error.message ? error.message : "Interval server error"
            }
            return res.status(err.statusCode).json({
                message: err.message
            });
        }; 
    }
};


export default new BookController();