const Joi = require('joi');

const joiSchema = Joi.object({
  title: Joi.string().required(),
  category: Joi.string().required(),
  area: Joi.string(),
  instructios: Joi.string().required(),
  description: Joi.string().required(),
  thumb: Joi.string().pattern(/^(http|https):\/\/[^ "]+$/),
  preview: Joi.string().pattern(/^(http|https):\/\/[^ "]+$/),
  time: Joi.number().required(),
  youtube: Joi.string().pattern(/^(http|https):\/\/[^ "]+$/),
  tags: Joi.array(),
  ingredients: Joi.array().required(),
  owner: Joi.string().required(),
});

module.exports = joiSchema;
