
const express = require('express');
const controller = require('../controllers/productosApisController');
const router = express.Router();

router.get('/productosApi', controller.list)
router.get('/productoApi/:id', controller.show)


module.exports = router