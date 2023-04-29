const Joi = require('joi');
const { name, email, password } = require('./joiTemplates');

const userCreateSchema = Joi.object().keys({
  name: name.required(),
  email: email.required(),
  password: password.required(),
});

const userLoginSchema = Joi.object().keys({
  email: email.required(),
  password: password.required(),
});

const userSubscribeSchema = Joi.object().keys({
  emailToSubscribe: email.required(),
});

const createUserValidate = (req, res, next) => {
  const { error, value } = userCreateSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }

  next();
};

const loginUserValidate = (req, res, next) => {
  const { error, value } = userLoginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }

  next();
};

const subscribeUserValidate = (req, res, next) => {
  const { error, value } = userSubscribeSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }

  next();
};

module.exports = {
  createUserValidate,
  loginUserValidate,
  subscribeUserValidate,
};
