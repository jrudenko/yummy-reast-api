const express = require('express');
const { users: ctrl } = require('../controllers');

const { createUserValidate, loginUserValidate } = require('../middlewares');
const { auth, upload } = require('../middlewares');

const router = express.Router();

router.post('/register', createUserValidate, ctrl.createUserController);

router.post('/login', loginUserValidate, ctrl.loginController);

router.get('/current', auth, ctrl.getCurrent);

router.put('/', auth, upload.single('avatar'), ctrl.updateByIdControllers);

router.get('/logout', auth, ctrl.logout);

router.post(
  '/avatar',
  auth,
  upload.single('avatar'),
  ctrl.uploadAvatarController
);

module.exports = router;
