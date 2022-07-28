const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const controller = require ('../controllers/deleteController')

router.get('/:id', controller.seleccion)
router.delete ('/:id', controller.delete)

module.exports = router;
