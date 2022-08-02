const path = require('path');
const bcryptjs = require('bcryptjs');
const User = require('../models/User');
const login = {
    login: (req, res) => {
        res.render('login')
    },
    loginProcess:(req, res)=>{

        let userToLogin = User.findByField('email', req.body.email);

        if (userToLogin){
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(isOkThePassword){
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                return res.redirect('/profile');
            }
            return res.render('login',{
                errors:{
                    usuario:{
                        msg: 'Contraseñas invalidas'
                    }
                }
            });
        }
        return res.render('login',{
            errors:{
                usuario:{
                    msg: 'Usuario no registrado'
                }
            }
        });
    },
    profile: (req, res)=>{

        return res.render('perfil', {
            user: req.session.userLogged
        });
    },
    logout: (req, res) =>{
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = login;
