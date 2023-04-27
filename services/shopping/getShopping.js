const { Shopping } = require('../../db/shoppingModel');

const getShopping = async (owner) => {
  const result = await Shopping.find({
    owner,
  });

  return result;
};

module.exports = { getShopping };
