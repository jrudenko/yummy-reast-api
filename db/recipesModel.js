// const { any } = require('joi');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      enum: [
        'Pork',
        'Vegetarian',
        'Beef',
        'Breakfast',
        'Chicken',
        'Dessert',
        'Goat',
        'Lamb',
        'Miscellaneous',
        'Pasta',
        'Seafood',
        'Side',
        'Starter',
        'Vegan',
      ],
      // required: true,
      unique: true,
    },
    area: {
      type: String,
    },
    instructios: {
      type: String,
      // required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumb: {
      type: String,
      match: /^(http|https):\/\/[^ "]+$/, // валидация URL-адреса
    },
    preview: {
      type: String,
      required: true,
      match: /^(http|https):\/\/[^ "]+$/, // валидация URL-адреса
    },
    time: {
      type: Number,
      required: true,
    },
    youtube: {
      type: String,
      match: /^(http|https):\/\/[^ "]+$/, // валидация URL-адреса
    },
    tags: {
      type: Array,
    },
    ingredients: {
      type: Array,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      // required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Recipes = mongoose.model('Recipe', recipesSchema);

module.exports = {
  Recipes,
};
