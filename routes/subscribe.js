const express = require('express');
const { subscribe: ctrl } = require('../controllers');
const { auth, subscribeUserValidate } = require('../middlewares');

const router = express.Router();

router.post('/', auth, subscribeUserValidate, ctrl.subscribeUserController);

module.exports = router;
