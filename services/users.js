const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');
const { User } = require('../db/usersModel');

// const { JWT_SECRET } = process.env;

const registerUserService = async ({ name, email, password }) => {
  const encryptedPassword = await bcrypt.hash(password, 10);
  // const verificationToken = uuidv4();

  const createdUser = User.create({
    name,
    email,
    password: encryptedPassword,
  });

  return createdUser;
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
