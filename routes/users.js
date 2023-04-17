const express = require('express');
const { users: ctrl } = require('../controllers');

const { createUserValidate, loginUserValidate } = require('../middlewares');
const { auth } = require('../middlewares');

const router = express.Router();

router.post('/register', createUserValidate, ctrl.createUserController);

router.post('/login', loginUserValidate, ctrl.loginController);

router.get('/current', auth, ctrl.getCurrent);

router.put('/:userId', auth, ctrl.updateByIdControllers);

router.get('/logout', auth, ctrl.logout);

module.exports = router;
