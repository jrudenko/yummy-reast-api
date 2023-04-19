const Joi = require('joi');

const joiSchema = Joi.object({
  title: Joi.string().required(),
  category: Joi.string().required(),
  area: Joi.string().required(),
  instructios: Joi.string().required(),
  description: Joi.string().required(),
  thumb: Joi.string()
    .pattern(/^(http|https):\/\/[^ "]+$/)
    .required(),
  preview: Joi.string()
    .pattern(/^(http|https):\/\/[^ "]+$/)
    .required(),
  time: Joi.number().required(),
  youtube: Joi.string()
    .pattern(/^(http|https):\/\/[^ "]+$/)
    .required(),
  tags: Joi.array().required(),
  ingredients: Joi.array().required(),
  owner: Joi.string().required(),
});

module.exports = joiSchema;
