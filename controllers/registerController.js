const path = require('path');
const fs = require('fs');
const usuariosJSON =  JSON.parse(fs.readFileSync(path.resolve(__dirname,'../database/users.json')));
const register = {
    register: (req, res) => {
        res.render('register');
    },
    newUser: (req, res) => {
       let user = {
        nombre: req.body.nombreCompleto,
        usuario: req.body.usuario,
        password: req.body.contraseña,
        confirmPassword: req.body.confirmarContraseña,
        fechaDeNacimiento: req.body.fechaDeNacimiento,
        email: req.body.email,
        celular: req.body.celular,
        terminos: req.body.terminos,
        newsletter: req.body.newsletter
       }
       const nuevosUsuarios = usuariosJSON.push(user)
       JSON.stringify(nuevosUsuarios)
        fs.writeFileSync(path.resolve(__dirname,'..','database','users.json'), nuevosUsuarios);
        res.redirect('/login')
    }   
};

module.exports = register