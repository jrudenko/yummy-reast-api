const { v4: uuid } = require('uuid');
const { Shopping } = require('../../db/shoppingModel');
const {Ingredients} = require('../../db/ingredientsModel')

const addShopping = async (owner, shoppingItem) => {
  const id = uuid();

  const { iid, ttl, thb, number } = shoppingItem;

  const isIdInIngredients = await Ingredients.findById(iid)

  if (!isIdInIngredients) {
    return null
  }

  const addRequestResult = await Shopping.create({
    id,
    iid,
    ttl,
    thb,
    number,
    owner,
  });

  return addRequestResult;
};

module.exports = { addShopping };
