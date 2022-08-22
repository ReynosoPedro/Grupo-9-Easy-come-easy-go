const express = require('express');
const path = require('path');
const router = express.Router();
const controller = require('../controllers/adminController')
const autenticadoMiddleware = require('../middlewares/autenticadoMiddleware');
const permisosMiddleware = require('../middlewares/permisosMiddleware');
const multer = require('multer');

const storage=multer.diskStorage(
    {
        destination:function(req,file,cb){
            let folder=path.join(__dirname,'../public/images/autos');
            cb(null,folder);
    },
        filename: function (req,file, cb){
        const newFilename=Math.floor( Date.now()/1000)+path.extname(file.originalname);
        cb(null, newFilename);
        }
    })

const UploadFile= multer({storage});

//panel
router.get('/administrar', controller.panel)
//agregar
router.get('/agregar',  permisosMiddleware, controller.formCrear);
router.post('/agregar', UploadFile.single("imagen-auto"), controller.crear);
//edit
router.get('/editar/:id', permisosMiddleware, controller.formEdit);
router.put('/editar/:id', UploadFile.single("imagen-auto"),controller.edit);
//delete
router.get('/delete/:id', permisosMiddleware, controller.formDelete)
router.delete ('/delete/:id', controller.delete)


module.exports = router