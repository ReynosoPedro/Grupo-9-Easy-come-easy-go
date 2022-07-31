const express = require('express');
const router = express.Router();

const controller = require('../controllers/loginController')

router.get('/', controller.login);

router.post('/', controller.loginProcess);

module.exports = router