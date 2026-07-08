import { Router } from "express";
import { createUser, findAll, findById, remove, update } from "../controller/user.controller.js";

const router = Router();

router
    .get('/', findAll)
    .get('/:id', findById)
    .post('/', createUser)
    .patch('/:id', update)
    .delete("/:id", remove)

export default router;