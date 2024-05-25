<<<<<<< HEAD
const Joi = require("joi");

const bookSchema = Joi.object({
    name: Joi.string().required(),
    year: Joi.number().required(),
    author: Joi.string().required(),
    summary: Joi.string().required(),
    publisher: Joi.string().required(),
    pageCount: Joi.number().required(),
    readPage: Joi.number().required(),
    reading: Joi.boolean().required(),
});

const validateBook = (request, h) => {
    const { error } = bookSchema.validate(request.payload);
    if (error) {
        const response = h.response({
            status: "fail",
            message: error.details[0].message
        });
        response.code(400);
        return response;
    }
    return h.continue;
};

module.exports = validateBook;
=======
const Joi = require("joi");

const bookSchema = Joi.object({
    name: Joi.string().required(),
    year: Joi.number().required(),
    author: Joi.string().required(),
    summary: Joi.string().required(),
    publisher: Joi.string().required(),
    pageCount: Joi.number().required(),
    readPage: Joi.number().required(),
    reading: Joi.boolean().required(),
});

const validateBook = (request, h) => {
    const { error } = bookSchema.validate(request.payload);
    if (error) {
        const response = h.response({
            status: "fail",
            message: error.details[0].message
        });
        response.code(400);
        return response;
    }
    return h.continue;
};

module.exports = validateBook;
>>>>>>> f23ce36610417deba3b6ce798299ca0ef3001a18
