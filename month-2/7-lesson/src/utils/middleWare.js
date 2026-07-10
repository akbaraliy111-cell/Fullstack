import Joi from "joi";

export default function validateAuthor(req, res, next) {
    const author = Joi.object({
        fullName: Joi.string().required().min(5).messages({
            "string.min": "Ism 5 ta belgidan kam bo'lmasligi kerak",
            "any.required": "Ism kiritish majburiy"
        }),
        birthDate: Joi.date().required(),
        nick: Joi.string().min(6).required()
    });
    const { error, value } = author.validate(req.body);
    if (error) {
        return res.status(422).json({
            message: error.details[0].message
        });
    }
    next();
};