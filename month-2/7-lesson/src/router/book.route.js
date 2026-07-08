import bookController from "../controller/book.controller.js";
import { Router } from "express";

const router = Router();

router
    .post('/', bookController.create)
    .get('/', bookController.findAll)
    .get('/:id', bookController.findBy)
    .delete('/:id', bookController.delete)
    .patch('/:id', bookController.update)

export default router;