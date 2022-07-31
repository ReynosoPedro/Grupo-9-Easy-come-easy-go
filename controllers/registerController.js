const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const User = require('../models/User');
const {validationResult}=require('express-validator');
const usuariosJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/users.json')));
const register = {
    register: (req, res) => {
        res.render('register');
    },
    newUser: (req, res) => {
        const resultValidation = validationResult (req);
        if (resultValidation.errors.length > 0){
            return res.render('register',{
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        let userInDB = User.findByField('email', req.body.email);
        if (userInDB){
            return res.render('register',{
                errors: {
                    email:{
                        msg:'El email ya esta registrado'
                    }
                
                },
                oldData: req.body
            });
        }
        
        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar:req.file.filename
        }
        let userCreate=User.create(userToCreate);
        res.redirect('/login');
    }
};

module.exports = register