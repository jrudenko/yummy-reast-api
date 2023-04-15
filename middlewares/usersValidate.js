const Joi = require('joi');
const { CustomError } = require('../utils');
const { name, email, password } = require('./joiTemplates');
const { User } = require('../db/usersModel');

const userSchema = Joi.object().keys({
  name: name.required(),
  email: email.required(),
  password: password.required(),
});

const createUserValidate = (req, res, next) => {
  const { error, value } = userSchema.validate(req.body);
  if (error) {
    // return new CustomError(400, error.message );
    return res.status(400).json({ error: error.message });
  }
  /*   const { email: emailToCheck } = value; // TODO: чи треба?
  const userExists = await User.exists({ email: emailToCheck }); // повертає айді, якщо такий юзер вже є
  // console.log('CL: ~ file: usersValidationMwr.js:28 ~ userExists:', userExists);

  if (userExists) return next(new CustomError(409, 'email is already used')); */

  next();
};

module.exports = {
  createUserValidate,
};
