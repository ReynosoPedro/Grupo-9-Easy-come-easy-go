const path = require('path');
const bcryptjs = require('bcryptjs');
const User = require('../models/User');
const login = {
    login: (req, res) => {
        res.render('login')
    },
    loginProcess:(req, res)=>{

        let userToLogin = User.findByField('usuario', req.body.usuario);
        
        if (userToLogin){
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(isOkThePassword){
                return res.redirect('/');
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
    }
}

module.exports = login;
