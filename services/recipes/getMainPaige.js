const { Recipes } = require('../../db/recipesModel');

const getMainPage = async () => {
  const categories = await Recipes.distinct('category');
  const selectedCategories = categories.slice(0, 4);
  const tasks = selectedCategories.map(category => async () => {
    const result = await Recipes.find({ category }).limit(4);
    return result;
  });
  const result = await Promise.all(tasks.map(task => task()));

  const flattenedResult = result.reduce((acc, curr) => acc.concat(curr), []);
  return flattenedResult;
};

module.exports = { getMainPage };
