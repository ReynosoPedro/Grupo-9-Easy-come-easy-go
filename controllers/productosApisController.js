const db = require('../database/models');
const sequelize= db.sequelize;


const pruductosApis ={
    list: (req, res) =>  {
        db.Productos.findAll()
            .then(function(vehiculos) {
                return res.status(200).json({
                    // conteo de los productos
                    total: vehiculos.length,
                    // resultado de find 
                    data : vehiculos,
                    // resultado de estado
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
    create: (req, res) =>  {
        db.Productos.create(req.body) 
        .then(vehiculo=> {
            return res.status(200).json({
                data:vehiculo,
                status:200,
                check:"ok",
            })
        })
    },
    delete:  (req, res) =>  {
        db.Productos.destroy(req.body) ({
            where : {
                id: req.params.id
            }
        })
        .then(response=> {
            return res.json(response)
        })

    },
    listModels : (req, res) =>  {
        db.Modelos.findAll()
        .then(function(modelos) {
            return res.status(200).json({
                data:modelos,
                status:200,
                check:"ok",
            });
        })

    }
    /* Find
    search : (req, res) =>{ 
        db.Productos.findAll({
            where :{
                model: { [Op.like]: '%' + req.query.keyword + '%'}
            }
        })
        .then(function(vehiculos) {
            return res.status(200).json({

            });
        })
    }
        */

}

module.exports = pruductosApis;