const bcrypt = require('bcrypt');
require('dotenv').config();
const gravatar = require('gravatar');
const { User } = require('../../db/usersModel');
// const jwt = require('jsonwebtoken');
// const { v4: uuidv4 } = require('uuid');
// const { JWT_SECRET } = process.env;

// TODO: error catch wrapper?

const takeGravatar = async (email) => {
  try {
    return await gravatar.url(email, { protocol: 'http', s: '100' });
  } catch (err) {
    console.log(err.message);
    return '';
  }
};

const registerUserService = async ({ name, email, password }) => {
  const encryptedPassword = await bcrypt.hash(password, 10);

  const avatar = await takeGravatar(email)

  const createdUser = User.create({
    name,
    email,
    password: encryptedPassword,
    avatar,
  });

  return createdUser;
};

const verifyUserService = async verificationToken => {
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
