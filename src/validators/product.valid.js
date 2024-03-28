import Joi from "joi";

export const productValid = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required().min(1),
    description: Joi.string().required().min(10),
    discountPercentage:Joi.number(),
    rating:Joi.number(),
    stock:Joi.number(),
    brand:Joi.string(),
    category:Joi.string(),
    thumbnail: Joi.string().required(),
    images: Joi.array().required()
})