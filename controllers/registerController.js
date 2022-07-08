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
        // los agrego al JSON
        usuariosJSON.push(user);
        // no estoy seguro de si es necesario , 
        let nuevaLista=JSON.stringify( usuariosJSON);
        fs.writeFileSync(path.resolve(__dirname,'..','database','users.json'),nuevaLista);
        res.redirect("/")
    }   
};

module.exports = register