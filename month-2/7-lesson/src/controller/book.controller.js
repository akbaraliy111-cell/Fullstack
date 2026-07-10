import Book from '../schema/book.schema.js';
import Author from '../schema/author.schema.js'
import { ApiError } from '../utils/ApiError.js';
import { asyncCatch } from '../middleware/asyncCatch.js';
import { Controller } from './base.controller.js';

class BookController extends Controller{
   
}

export default new BookController(Book, "Author");