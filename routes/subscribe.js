const express = require('express');
const { subscribeUserController } = require('../controllers/subscribe');
const { auth, subscribeUserValidate } = require('../middlewares');

const router = express.Router();

router.post('/', auth, subscribeUserValidate, subscribeUserController);

module.exports = router;
