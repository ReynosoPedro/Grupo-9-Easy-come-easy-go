const path = require('path');
const fs = require('fs');
const bcryptjs = require('bcryptjs');
const User = require('../models/User');
const db = require('../database/models');
const sequelize= db.sequelize;



const {validationResult}=require('express-validator');

const usuariosJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/users.json')));
const users = {
    register: (req, res) => {
        res.render('users/register');
    },
    newUser: (req, res) => {
        const resultValidation = validationResult (req);
        if (resultValidation.errors.length > 0){
            return res.render('users/register',{
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        let userInDB = User.findByField('email', req.body.email);
        if (userInDB){
            return res.render('users/register',{
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
            avatar:req.file.filename
        }
        let userCreate=User.create(userToCreate);
        res.redirect('/login');  
    },
    shopCar: (req, res) => {
        res.render('users/shop-car');
    },
    login: (req, res) => {
        res.render('users/login')
    },
    loginProcess:(req, res)=>{

        let userToLogin = User.findByField('email', req.body.email);

        if (userToLogin){
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(isOkThePassword){
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                return res.redirect('/login');
            }
            return res.render('users/login',{
                errors:{
                    usuario:{
                        msg: 'Contraseñas invalidas'
                    }
                }
            });
        }
        return res.render('users/login',{
            errors:{
                usuario:{
                    msg: 'Usuario no registrado'
                }
            }
        });
    },
    profile: (req, res)=>{

        return res.render('users/perfil', {
            user: req.session.userLogged
        });
    },
    logout: (req, res) =>{
        req.session.destroy();
        return res.redirect('/');
    }

};

module.exports = users