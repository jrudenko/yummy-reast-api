require('dotenv').config();

// const { getFromMainPage } = require('../../services');
const { Recipes } = require('../../db/recipesModel');

const { catchAsyncWrapper } = require('../../utils');

const getMainPageController = catchAsyncWrapper(async (req, res) => {
  const pipeline = [
    {
      $group: {
        _id: '$category',
        items: { $push: '$$ROOT' },
      },
    },
    {
      $project: {
        _id: 0,
        category: '$_id',
        items: { $slice: ['$items', 4] },
      },
    },
    {
      $unwind: '$items',
    },
    {
      $replaceRoot: { newRoot: '$items' },
    },
  ];
  const result = await Recipes.aggregate(pipeline);
  res.json({
    status: 'success',
    code: 200,
    result,
  });
});

module.exports = getMainPageController;
