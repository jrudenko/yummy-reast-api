require('dotenv').config();
const fs = require('fs');
const util = require('util');

const cloudinary = require('cloudinary').v2;
const { Recipes } = require('../../db/recipesModel');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const unlink = util.promisify(fs.unlink);

const addOwnRecipe = async (userData, file, _id) => {
  const filePath = `/tmp/${Date.now()}-${file.originalname}`;
  const writeFileAsync = util.promisify(fs.writeFile);
  const buffer = Buffer.from(file.buffer);
  await writeFileAsync(filePath, buffer);

  const uploadedImage = await cloudinary.uploader.upload(filePath, {
    folder: 'recipes',
  });

  await unlink(filePath);
  const newRecipe = await Recipes.create({
    ...userData,
    preview: uploadedImage.secure_url,
    owner: _id,
  });
  return newRecipe;
};

module.exports = addOwnRecipe;
