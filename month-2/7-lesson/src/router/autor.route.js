import { Router } from 'express';

import controller from '../controller/author.controller.js';
import { validator } from '../middleware/validator.js';
import { AuthorValidation } from '../validation/author.validation.js'

const router = Router();

router
    .post('/', validator(AuthorValidation.create), controller.create)
    .get('/', controller.findAll)
    .get('/:id', controller.findBy)
    .patch('/:id', validator(AuthorValidation.update), controller.update)
    .delete('/:id', controller.delete);

export default router;
