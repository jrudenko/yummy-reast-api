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

const uploadAvatar = async (file, _id) => {
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
  const avatar = uploadedAvatar.secure_url;

  await fs.unlink(filePath);

  const updatedUser = await User.findByIdAndUpdate(
    _id,
    { avatar },
    {
      new: true,
    }
  );
  return updatedUser;
};

module.exports = { uploadAvatar };
