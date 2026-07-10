import { Router } from 'express';

import validateAuthor from '../utils/middleWare.js'
import controller from '../controller/author.controller.js';

const router = Router();

router
    .post('/', validateAuthor, controller.create)
    .get('/', controller.findAll)
    .get('/:id', controller.findBy)
    .patch('/:id', validateAuthor, controller.update)
    .delete('/:id', controller.delete);

export default router;
