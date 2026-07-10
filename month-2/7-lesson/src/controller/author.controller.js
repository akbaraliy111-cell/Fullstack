import Author from '../schema/author.schema.js';
import Book from "../schema/book.schema.js"
import { ApiError } from '../utils/ApiError.js';

class AuthorController {
    async create(req, res) {
        try {
            const existsNick = await Author.findOne({ nick: req.body.nick });
            if (existsNick) {
                throw new ApiError('Nick already exists', 409);
            }
            const author = await Author.create(req.body);
            return res.status(201).json(author);
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
            const authors = await Author.find().populate('books');
            return res.status(200).json(authors);
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
            const author = await Author.findById(req.params.id).populate('books');
            if (!author) {
                throw new ApiError('Author not found', 404);
            }
            return res.status(200).json(author);
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
            const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!author) {
                throw new ApiError('Author not found', 404);
            }
            return res.status(200).json(author);
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
            const author = await Author.findByIdAndDelete(req.params.id);
            if (!author) {
                throw new ApiError('Author not found', 404);
            }
            await Book.deleteMany({ author: author._id });
            return res.status(200).json({ message: 'Author deleted successfully' });
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

export default new AuthorController();
