const { Shopping } = require('../../db/shoppingModel');
const { Ingredients } = require('../../db/ingredientsModel');

const addShopping = async (owner, shoppingItem) => {
  const { iid, number } = shoppingItem;

  const isIdInIngredients = await Ingredients.findById(iid);

  if (!isIdInIngredients) {
    return null;
  }
  const { ttl, thb } = isIdInIngredients;
  const addToShopping = {
    iid,
    ttl,
    thb,
    number,
    owner,
  };

  const addRequestResult = await Shopping.create(addToShopping);

  return addRequestResult;
};

module.exports = { addShopping };
