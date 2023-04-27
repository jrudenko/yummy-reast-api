const { v4: uuid } = require('uuid');
const { Shopping } = require('../../db/shoppingModel');

const addShopping = async (owner, shoppingItem) => {
  const id = uuid();

  const { iid, ttl, thb, number } = shoppingItem;

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
