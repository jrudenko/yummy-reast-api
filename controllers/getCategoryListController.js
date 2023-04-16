const { catchAsyncWrapper } = require("../utils");

const getCategoryListController = catchAsyncWrapper (async (req, res) => {
 await console.log(' getCategoryListController.js [4]:',);
  res.json({
    message: 'test response',
  });
});

module.exports = {
  getCategoryListController,
};
