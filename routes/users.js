const express = require('express');
const { createUserController } = require('../controllers');
const { createUserValidate } = require('../middlewares');
const { auth } = require('../middlewares');
const { login } = require('../services');
const { loginControl } = require('../controllers');
const { getCurrent } = require('../services');

const router = express.Router();

router.post('/register', createUserValidate, createUserController);

router.post('/login', loginControl);

router.get('/current', auth, getCurrent);

module.exports = router;
