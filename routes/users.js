const express = require('express');
const { createUserController } = require('../controllers');
const { createUserValidate } = require('../middlewares');

const router = express.Router();

router.post('/register', createUserValidate, createUserController);

module.exports = router;
