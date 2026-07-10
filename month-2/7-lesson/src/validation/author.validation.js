import Joi from "joi";

export class AuthorValidation {
    static create(data) {
        const author = Joi.object({
            fullName: Joi.string().required(),
            birthDate: Joi.date().required(),
            nick: Joi.string().min(6).required()
        })
        return author.validate(data)
    }
    static update(data) {
        const author = Joi.object({
            fullName: Joi.string().optional(),
            birthDate: Joi.data().optional(),
            nick: Joi.string().min(6).optional()
        })
        return author.validate(data)
    }
}
