const express = require('express');
const { createUserController } = require('../controllers');
const { createUserValidate, loginUserValidate } = require('../middlewares');
const { auth } = require('../middlewares');
const { loginController } = require('../controllers');
const { getCurrent } = require('../services');

const router = express.Router();

router.post('/register', createUserValidate, createUserController);

router.post('/login', loginUserValidate, loginController);

router.get('/current', auth, getCurrent);

module.exports = router;
