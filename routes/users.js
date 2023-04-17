const express = require('express');
const {
  createUserController,
  loginController,
  updateByIdControllers,
} = require('../controllers');
const { createUserValidate, loginUserValidate } = require('../middlewares');
const { auth } = require('../middlewares');
const { getCurrent, logout } = require('../services');

const router = express.Router();

router.post('/register', createUserValidate, createUserController);

router.post('/login', loginUserValidate, loginController);

router.get('/current', auth, getCurrent);

router.put('/:userId', auth, updateByIdControllers);

router.get('/logout', auth, logout);

module.exports = router;
