const express = require('express');
const { subscribeUserController } = require('../controllers');
const { auth } = require('../middlewares');

const router = express.Router();

router.post('/', auth, subscribeUserController);

module.exports = router;
