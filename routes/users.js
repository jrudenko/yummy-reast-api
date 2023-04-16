const express = require('express');
const {
  createUserController,
  loginController,
  updateByIdControllers,
} = require('../controllers');
const { createUserValidate, loginUserValidate } = require('../middlewares');
const { auth } = require('../middlewares');
const { getCurrent } = require('../services');

const router = express.Router();

router.post('/register', createUserValidate, createUserController);

router.post('/login', loginUserValidate, loginController);

router.get('/current', auth, getCurrent);

router.put('/:userId', auth, updateByIdControllers);

module.exports = router;
