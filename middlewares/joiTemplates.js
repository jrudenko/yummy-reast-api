const Joi = require('joi');

const name = Joi.string().pattern(/^[a-zA-Zа-яА-Я0-9іІїЇєЄґҐ']{3,20}$/);
const email = Joi.string().email({
  minDomainSegments: 2,
  tlds: { allow: ['com', 'net', 'ua', 'org', 'net'] },
});
const password = Joi.string().pattern(/^[a-zA-Z0-9.;,/.;'`)(*&^%$#@!~]{7,32}$/);
const verificationToken = Joi.string().guid({ version: 'uuidv4' });
const queryString = Joi.string().min(2).max(20);

module.exports = {
  name,
  email,
  password,
  verificationToken,
  queryString,
};
