require('dotenv').config();
const fs = require('fs');
const util = require('util');
const Jimp = require('jimp');
const path = require('path');

const cloudinary = require('cloudinary').v2;
const { User } = require('../../db/usersModel');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const updateById = async (userId, file, { name }) => {
  let result = null;

  const getAvatar = async () => {
    if (file) {
      const filePath = path.resolve(`./tmp/${Date.now()}-${file.originalname}`);
      const writeFileAsync = util.promisify(fs.writeFile);
      const buffer = Buffer.from(file.buffer);
      await writeFileAsync(filePath, buffer);

      const image = await Jimp.read(filePath);
      image.resize = await image.resize(103, 103, Jimp.AUTO);
      await image.writeAsync(filePath);

      const uploadedAvatar = await cloudinary.uploader.upload(filePath, {
        folder: 'avatars',
      });

      return uploadedAvatar.secure_url;
    }
    return null;
  };

  const avatar = await getAvatar();
  // console.log('CL: ~ file: updateById.js:40 ~ avatar:', avatar);

  if (name && avatar) {
    result = await User.findByIdAndUpdate(
      userId,
      { name, avatar },
      {
        new: true,
      }
    );
    return result;
  }

  if (name) {
    result = await User.findByIdAndUpdate(
      userId,
      { name },
      {
        new: true,
      }
    );
    return result;
  }

  if (avatar) {
    result = await User.findByIdAndUpdate(
      userId,
      { avatar },
      {
        new: true,
      }
    );
    return result;
  }

  if (!result) {
    const error = new Error('missing fields');
    error.status = 404;
    throw error;
  }

};

module.exports = { updateById };
