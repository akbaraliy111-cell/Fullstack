import { Router } from 'express';

import controller from '../controller/book.controller.js';
import { validator } from '../middleware/validator.js';
import { BookValidation } from '../validation/book.validation.js';

const router = Router();

router
    .post('/', validator(BookValidation.create), controller.create)
    .get('/', controller.findAll)
    .get('/:id', controller.findBy)
    .patch('/:id', validator(BookValidation.update), controller.update)
    .delete('/:id', controller.delete);

export default router;
