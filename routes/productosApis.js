
const express = require('express');
const controller = require('../controllers/productosApisController');
const router = express.Router();

router.get('/productosApi', controller.list)
router.get('/productoApi/:id', controller.show)
router.get('/modelosApi', controller.listModels)


module.exports = router