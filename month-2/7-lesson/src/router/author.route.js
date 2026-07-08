import authorController from "../controller/author.controller.js";
import { Router } from "express";

const router = Router();

router
    .post('/', authorController.create)
    .get('/', authorController.findAll)
    .get('/:id', authorController.findBy)
    .delete('/:id', authorController.delete)
    .patch('/:id', authorController.update)



export default router;