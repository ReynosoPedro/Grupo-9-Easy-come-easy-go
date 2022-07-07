const register = {
    register: (req, res) => {
        res.render('register');
    },
    newUser: (req, res) => {
       let user = {
        nombre: req.body.nombreCompleto,
        usuario: req.body.usuario,
        contraseña: req.body.contraseña,
        confirmarContraseña: req.body.confirmarContraseña,
        fechaDeNacimiento: req.body.fechaDeNacimiento,
        email: req.body.email,
        celular: req.body.celular,
        terminos: req.body.terminos,
        newsletter: req.body.newsletter
       }
        res.redirect('/login')
    }
};

module.exports = register