const { Shopping } = require('../../db/shoppingModel');

const deleteFromShopping = async (owner, iid, number) => {
  const deleteResult = await Shopping.findOneAndDelete({
    owner, iid, number
  });

  return deleteResult;
};

module.exports = { deleteFromShopping };
