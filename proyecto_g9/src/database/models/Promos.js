module.exports = (sequelize, dataTypes)=>{
    let alias = "Promos";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        promotions:{
            type: dataTypes.FLOAT
        },
        
    };
    let config = {
        tableName: "promotions",
        timestamps: false
    }
    const Promos= sequelize.define(alias, cols, config);

    Promos.associate= function(models){
        Promos.hasMany(models.Productos, {
            as:"products",
            foreignKey:"promos_id"
        }) 

    }

    return Promos;
}