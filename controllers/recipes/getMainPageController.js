require('dotenv').config();

// const { getFromMainPage } = require('../../services');
const { Recipes } = require('../../db/recipesModel');

const { catchAsyncWrapper } = require('../../utils');

const getMainPageController = catchAsyncWrapper(async (req, res) => {
  //   const result = await Recipes.find({}).limit(4);
  const categories = await Recipes.distinct('category');
  const selectedCategories = categories.slice(0, 4);
  const tasks = selectedCategories.map(category => async () => {
    const result = await Recipes.find({ category }).limit(4);
    return result;
  });
  const result = await Promise.all(tasks.map(task => task()));

  const flattenedResult = result.reduce((acc, curr) => acc.concat(curr), []);

  res.json({
    status: 'success',
    code: 200,
    flattenedResult,
  });
});

module.exports = getMainPageController;
