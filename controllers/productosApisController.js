const db = require('../database/models');
const sequelize= db.sequelize;


const pruductosApis ={
    list: (req, res) =>  {
        db.Productos.findAll()
            .then(function(vehiculos) {
                return res.status(200).json({
                    total: vehiculos.length,
                    data: vehiculos,
                    status:200
                });
            })

    },
    show: (req, res) =>  {
        db.Productos.findByPk(req.params.id)
        .then(function(vehiculo) {
            return res.status(200).json({
                data: vehiculo,
                status:200
            });
        })

    },

}

module.exports = pruductosApis;