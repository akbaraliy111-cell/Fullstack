import { Router } from 'express';

import controller from '../controller/book.controller.js';

const router = Router();

router
    .post('/', controller.create)
    .get('/', controller.findAll)
    .get('/:id', controller.findBy)
    .patch('/:id', controller.update)
    .delete('/:id', controller.delete);

export default router;
