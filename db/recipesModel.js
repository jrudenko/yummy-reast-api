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
      required: true,
      unique: true,
    },
    area: {
      type: String,
      required: true,
    },
    instructios: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumb: {
      type: String,
      required: true,
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
      required: true,
      match: /^(http|https):\/\/[^ "]+$/, // валидация URL-адреса
    },
    tags: {
      type: Array,
      required: true,
    },
    ingredients: {
      type: Array,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Recipes = mongoose.model('Recipe', recipesSchema);

module.exports = {
  Recipes,
};
