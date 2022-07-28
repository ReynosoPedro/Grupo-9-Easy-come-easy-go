const express = require('express');
const router = express.Router();

const controller = require('../controllers/administrarController')

router.get('/', controller.admin)

module.exports = router