const Joi = require('joi');
const { recipeSearchByTitle } = require('./joiTemplates');

const searchKeyWordSchema = Joi.object().keys({
  keyWord: recipeSearchByTitle.required(),
});

const searchKeyWordValidate = (req, res, next) => {
  const { error, value } = searchKeyWordSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }

  next();
};

module.exports = {
  searchKeyWordValidate,
};
