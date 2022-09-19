const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuarioApisController');

router.get('/users', controller.list);
router.get('/users/:id', controller.user);

module.exports = router