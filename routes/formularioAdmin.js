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
        const newFilename=file.originalname +Math.floor( Date.now()/1000)+path.extname(file.originalname);
        
        cb(null, newFilename);
        }
    })

const fileFilter = (req, file, cb) => {
    if ((file.mimetype).includes("jpeg") || (file.mimetype).includes("png") || (file.mimetype).includes("jpg")) {

        cb(null, true);
    }
    else {

        cb(null, false)
        req.fileError = "File format not valid";
    }
}

const upload = multer({storage}, {fileFilter}) 
const multipleUpload = upload.fields(
[
    {name: 'imagen', maxCount: 1}, 
    {name: 'imagen2', maxCount: 1}, 
    {name: 'imagen3', maxCount: 1},
    {name: 'imagen4', maxCount: 1},
    {name: 'imagen5', maxCount: 1}
]) 


//panel
router.get('/administrar',autenticadoMiddleware, controller.panel)
//agregar
router.get('/agregar',  permisosMiddleware, controller.formCrear);
router.post('/agregar', multipleUpload, controller.crear);
//edit
router.get('/editar/:id', permisosMiddleware, controller.formEdit);
router.put('/editar/:id', multipleUpload,controller.edit);
//delete
router.get('/delete/:id', permisosMiddleware, controller.formDelete)
router.delete ('/delete/:id', controller.delete)


module.exports = router