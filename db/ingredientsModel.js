const mongoose = require('mongoose');

const { Schema } = mongoose;

const ingredientsSchema = new Schema(
  {
    ttl: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    t: {
      type: String,
      required: false,
      default: '',
    },
    thb: {
      type: String,
      required: true,
      default: '',
    },
  },
  { versionKey: false, timestamps: true }
);

const Ingredients = mongoose.model('Ingredient', ingredientsSchema);

module.exports = {
  Ingredients,
};
