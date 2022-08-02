const express = require('express');
const router = express.Router();

const controller = require('../controllers/loginController')
const guestMiddleware = require('../middlewares/guestMiddleware');

router.get('/', guestMiddleware, controller.login);

router.post('/', controller.loginProcess);

router.get('/profile', controller.profile);

module.exports = router