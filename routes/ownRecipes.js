const express = require('express');
const { ownRecipes: ctrl } = require('../controllers');
const { auth, upload } = require('../middlewares');

const router = express.Router();

router.delete('/:recipesId', auth, ctrl.removeController);

router.get('/', auth, ctrl.getOwnRecipes);

router.post('/', auth, upload.single('thumb'), ctrl.addController);

module.exports = router;
