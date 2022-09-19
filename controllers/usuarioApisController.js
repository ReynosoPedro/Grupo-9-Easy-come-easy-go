const db = require('../database/models');
const sequelize= db.sequelize;

const controller ={
    list: (req, res) => {
        db.Usuarios.findAll({
            attributes: ['id', 'full_name', 'user', 'date_birth','email', 'phone','image']
    })
            .then(usuario => {
               let response = {
                info: {
                    status: 200,
                    count: usuario.length,
                    url: "/users"
                },
                data: usuario
               }
               res.json(response)
            })

    },
    user: (req, res) => {
        db.Usuarios.findByPk(req.params.id,{
            attributes: ['id', 'full_name', 'user', 'date_birth','email', 'phone','image']
    })
            .then(usuario => {
               let response = {
                info: {
                    status: 200,
                    url: "/users/" + req.params.id
                },
                data: usuario
               }
               res.json(response)
            })
    }


}
module.exports = controller;