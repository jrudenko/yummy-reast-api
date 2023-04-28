const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const { User } = require('../../db/usersModel');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const takeGravatar = async (email) => {
  try {
    return await gravatar.url(email, { protocol: 'http', s: '103' });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err.message);
    return '';
  }
};

const registerUserService = async ({ name, email, password }) => {
  const encryptedPassword = await bcrypt.hash(password, 10);

  const avatar = await takeGravatar(email);

  const createdUser = await User.create({
    name,
    email,
    password: encryptedPassword,
    avatar,
  });

  const payload = {
    id: createdUser._id,
  };

  const token = jwt.sign(payload, JWT_SECRET);
  const id = createdUser._id;

  const updatedUser = await User.findByIdAndUpdate(
    id,
    { token },
    {
      new: true,
    }
  );

  return updatedUser;
};

const verifyUserService = async (verificationToken) => {
  try {
    const searchTokenResult = await User.findOne({
      verificationToken,
    });

    if (searchTokenResult) {
      const email = await searchTokenResult.email;
      await User.findOneAndUpdate(
        { email },
        { verificationToken: null, verify: true }
      );

      return {
        statusCode: 200,
      };
    }

    return {
      statusCode: 404,
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err.message);
  }
};

module.exports = {
  registerUserService,
  verifyUserService,
};
