require('dotenv').config();

const cloudinary = require('cloudinary').v2;
const { Recipes } = require('../../db/recipesModel');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const addOwnRecipe = async (userData, file, _id) => {
  //   const { image, ...rest } = userData;
  const uploadedImage = await cloudinary.uploader.upload(file, {
    folder: 'recipes',
  });

  const newRecipe = await Recipes.create({
    ...userData,
    thumb: uploadedImage.secure_url,
    owner: _id,
  });
  return newRecipe;
};

module.exports = addOwnRecipe;
