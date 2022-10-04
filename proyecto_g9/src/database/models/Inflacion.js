module.exports = (sequelize, dataTypes)=>{
    let alias = "Inflacion";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        inflation:{
            type: dataTypes.FLOAT
        },
        
    };
    let config = {
        tableName: "inflation",
        timestamps: false
    }
    const Inflacion= sequelize.define(alias, cols, config);

    Inflacion.associate= function(models){
        Inflacion.hasMany(models.Productos, {
            as:"products",
            foreignKey:"inflation_id"
        }) 

    }

    return Inflacion;
}