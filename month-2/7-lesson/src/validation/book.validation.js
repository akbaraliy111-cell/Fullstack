import Joi from 'joi';

export class BookValidation {
    static create(data) {
        const book = Joi.object({
            title: Joi.string().required(),
            genre: Joi.string().required(),
            authorId: Joi.string()
        });
        return book.validate(data);
    };
    static update(data){
        const book = Joi.object({
            title: Joi.string().optional(),
            genre: Joi.string().optional(),
            authorId: Joi.string()
        });
        return book.validate(data);
    };
};