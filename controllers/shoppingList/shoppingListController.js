const {
  addShopping,
  getShopping,
  deleteFromShopping,
} = require('../../services/shopping');
const { catchAsyncWrapper } = require('../../utils');

const addToShoppingListController = catchAsyncWrapper(async (req, res) => {
  const { _id: owner } = req.user;
  const { iid, ttl, thb, number } = req.body;
  const shoppingItem = { iid, ttl, thb, number };

  const shoppingList = await addShopping(owner, shoppingItem);

  res.status(201).json({
    shoppingList,
  });
});

const getShoppingListController = catchAsyncWrapper(async (req, res) => {
  const { _id: owner } = req.user;

  const { shopping } = req.user;

  const shoppingList = await getShopping(owner);

  res.json({
    shoppingList,
  });
});

const deleteFromShoppingListController = catchAsyncWrapper(async (req, res) => {
  const { iid, number } = req.body;
  const { _id: owner } = req.user;

  const result = await deleteFromShopping(owner, iid, number);

  if (!result) {
    return res.status(404).json({
      message: 'nothing to delete',
    });
  }

  return res.status(204).json();
});

module.exports = {
  addToShoppingListController,
  getShoppingListController,
  deleteFromShoppingListController,
};
