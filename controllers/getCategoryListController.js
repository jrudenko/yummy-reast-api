const categoryList = require('../db/categoryList');

const getCategoryListController = (req, res) => {

  res.status(200).json({
    categoryList: categoryList.sort(),
  });
};

module.exports = {
  getCategoryListController,
};
