const express = require('express');
const router = express.Router();
const path = require('path');
const controller = require('../controllers/registerController');
//multer
const multer= require ('multer');
const { body } = require('express-validator');

const validations = [  
    body('nombreCompleto').isLength({
        min: 1
        }).withMessage('Ingrese su Nombre completo'),
    body('usuario').isLength({min: 1
        }).withMessage('Ingrese un Usuario'),
    body('password').notEmpty().withMessage('Ingrese una contraseña'),
    body('email')
        .notEmpty().withMessage('Agregar un email').bail()
        .isEmail().withMessage('Ingresar un formato de correo electrónico'),
    body('celular').isLength({min: 10}).withMessage('Ingrese un minimo de 10 caracteres'),
    body('categoria').notEmpty().withMessage('Elija una opcion'),
    body('avatar').custom((value, {req})=>{
        let file= req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if(!file){
            throw new Error('Seleccione una imagen');
        }else{
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Extensiones permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }
        
        return true;
    })
      //Aquí obligo a que el usuario seleccione su avatar
    
    ]


const storage= multer.diskStorage(
    {
        destination: (req,file,cb)=> {
            cb (null , './public/images/usuarios');
        },
        filename: function (req,file, cb){
            let fileName= `${Date.now()}_img${path.extname(file.originalname)}`;
            cb( null, fileName);
        }
    }
)
const uploadFile =multer ( { storage});
// formulario de creación
router.get('/', controller.register);
// procesamiento del formulario de creación
router.post('/', uploadFile.single("avatar"), validations,controller.newUser);



module.exports = router
