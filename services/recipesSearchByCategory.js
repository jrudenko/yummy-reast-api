require('dotenv').config();
const { Recipes } = require('../db/recipesModel');

const recipesSearchByCategory = (req, res, next) => {
  try {
    const { category } = req.params;
  } catch (error) {
    next();
  }
};

module.export = recipesSearchByCategory;
