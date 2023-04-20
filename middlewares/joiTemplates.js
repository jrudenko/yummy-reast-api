const Joi = require('joi');

const name = Joi.string().pattern(/^[a-zA-Zа-яА-Я0-9іІїЇєЄґҐ']{1,16}$/);
const email = Joi.string().email();
const password = Joi.string().pattern(/^[a-zA-Z0-9.;,/.;'`)(*&^%$#@!~]{6,16}$/);
const verificationToken = Joi.string().guid({ version: 'uuidv4' });
const queryString = Joi.string().min(2).max(20);

module.exports = {
  name,
  email,
  password,
  verificationToken,
  queryString,
};
