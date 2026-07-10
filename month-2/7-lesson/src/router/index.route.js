import { Router } from "express";
import authorRouter from "./autor.route.js"
import bookRouter from "./book.route.js"

const router = Router();

router
    .use('/author', authorRouter)
    .use('/book', bookRouter)

export default router;