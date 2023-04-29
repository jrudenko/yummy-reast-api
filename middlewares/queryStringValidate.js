const Joi = require('joi');
const { queryString, typeString, number } = require('./joiTemplates');

const searchKeyWordSchema = Joi.object().keys({
  query: queryString.required(),
  type: typeString,
  search: typeString,
  page: number,
  perPage: number,
});

const queryStringValidate = (req, res, next) => {
  const { error, value } = searchKeyWordSchema.validate(req.query);
  if (error) {
    return res.status(400).json({ error: error.message });
  }

  next();
};

module.exports = {
  queryStringValidate,
};
