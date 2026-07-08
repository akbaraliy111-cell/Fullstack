import Author from '../schema/author.schema.js';
import { ApiError } from '../utils/ApiError.js';

class AuthorController {
    async create(req, res) {
        try {
            const existNick = await Author.findOne({ nick: req.body.nick });
            if (existNick) {
                throw new ApiError('Nick already exists', 409);
            }
            const author = await Author.create(req.body);
            return res.status(201).json(author);
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
            const authors = await Author.find();
            return res.status(201).json(authors);
        } catch (err) {
            return res.status(err.statusCode).json({
                message: err.message
            });
        };
    }

    async findBy(req, res) {
        try {
            const author = await Author.findById(req.params.id);
            if (!author) {
                throw new ApiError('Author not found', 404);
            }
            return res.status(200).json(author)
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
            const author = await Author.findByIdAndDelete(req.params.id);
            return res.status(200).json({ message: `Author ${author.fullName} deleted` })
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
            const author = await Author.findByIdAndUpdate(req.params.id, req.body, {new: true});
            return res.status(200).json( author )
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


export default new AuthorController();