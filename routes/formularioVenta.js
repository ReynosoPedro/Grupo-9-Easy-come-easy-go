const express = require('express');
const router = express.Router();
const path = require('path');
const controller = require('../controllers/ventaController')
//multer
const multer= require ('multer');
const storage= multer.diskStorage(
    {
        destination: function (req,file,cb) {
            let folder= path.join(__dirname, '../public/images/autos');
            cb (null , folder);
        },
        filename: function (req,file, cb){
            const newFilename=Math.floor( Date.now()/1000)+path.extname(file.originalname);
            cb( null, newFilename);
        }
    }
)
const UploadFile =multer ( { storage});
// formulario de creación
router.get('/', controller.seleccion);
// procesamiento del formulario de creación
router.post('/', UploadFile.single("imagen-auto"), controller.crear);



module.exports = router