const Joi = require('joi');
const { recipeSearchByTitle } = require('./joiTemplates');

const searchRecipeSchema = Joi.object().keys({
  keyWord: recipeSearchByTitle.required(),
});

const searchRecipeValidate = (req, res, next) => {
  const { error, value } = searchRecipeSchema.validate(req.params);
  if (error) {
    return res.status(400).json({ error: error.message });
  }

  next();
};

module.exports = {
  searchRecipeValidate,
};
