const {
  addShopping,
  getShopping,
  deleteFromShopping,
} = require('../../services/shopping');
const { catchAsyncWrapper } = require('../../utils');

const addToShoppingListController = catchAsyncWrapper(async (req, res) => {
  const { _id: userId } = req.user;
  const { iid, ttl, thb, number } = req.body;
  const shoppingItem = { iid, ttl, thb, number };

  const response = await addShopping(userId, shoppingItem);
  const shoppingList = response.shopping;

  res.status(201).json({
    shoppingList,
  });
});

const getShoppingListController = catchAsyncWrapper(async (req, res) => {
  const { _id: userId } = req.user;

  const { shopping } = req.user;

  const response = await getShopping(userId);
  const shoppingList = response.shopping;

  res.json({
    shoppingList,
  });
});

const deleteFromShoppingListController = catchAsyncWrapper(async (req, res) => {
  const { id: idToDelete } = req.params;
  const { _id: userId } = req.user;

  const result = await deleteFromShopping(userId, idToDelete);
  if (result.modifiedCount > 0) {
    return res.status(204).json();
  }

  res.status(404).json({
    message: 'nothing to delete',
  });
});

module.exports = {
  addToShoppingListController,
  getShoppingListController,
  deleteFromShoppingListController,
};
