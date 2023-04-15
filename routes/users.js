const express = require('express');
const { createUserController } = require('../controllers');
const { createUserValidate } = require('../middlewares');
const { auth } = require('../middlewares');
const { login } = require('../services');
const { getCurrent } = require('../services');

const router = express.Router();

router.post('/register', createUserValidate, createUserController);

router.post('/login', login);

router.get('/current', auth, createUserValidate, getCurrent);

module.exports = router;
