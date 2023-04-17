require('dotenv').config();

// const { getFromMainPage } = require('../../services');
const { Recipes } = require('../../db/recipesModel');

const { catchAsyncWrapper } = require('../../utils');

const getMainPageController = catchAsyncWrapper(async (req, res) => {
  const result = await Recipes.find({}).limit(4);
  res.json({
    status: 'success',
    code: 200,
    result,
  });
});

module.exports = getMainPageController;
