const express = require('express');
const router = express.Router();

const controller = require('../controllers/loginController')
const guestMiddleware = require('../middlewares/guestMiddleware');
const autenticadoMiddleware = require('../middlewares/autenticadoMiddleware');

router.get('/', guestMiddleware, controller.login);

router.post('/', controller.loginProcess);

router.get('/profile', autenticadoMiddleware, controller.profile);

router.get('/logout', autenticadoMiddleware, controller.logout);



module.exports = router