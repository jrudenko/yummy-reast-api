require('dotenv').config();

const { recipes } = require('../../services');
const { catchAsyncWrapper } = require('../../utils');

const getMainPageController = catchAsyncWrapper(async (req, res) => {
  const result = await recipes.getMainPage();

  res.json({
    status: 'success',
    code: 200,
    result,
  });
});

module.exports = getMainPageController;
