import Author from '../schema/author.schema.js';
import Book from "../schema/book.schema.js"
import { Controller } from "./base.controller.js"
import { asyncCatch } from '../middleware/asyncCatch.js';
import { ApiError } from '../utils/ApiError.js';
import { successRes } from '../utils/succes-response.js';

class AuthorController extends Controller {
    create = asyncCatch(async ( req, res ) => {
        const existAuthor = this

        const data = await this.schema.create(req.body);
        return successRes(res, data, 201);
    })
};

export default new AuthorController(Author, 'books');