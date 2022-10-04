module.exports = (sequelize, dataTypes)=>{
    let alias = "Exchangerate";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tc:{
            type: dataTypes.FLOAT
        },
        
    };
    let config = {
        tableName: "exchangerate",
        timestamps: false
    }
    const Exchangerate= sequelize.define(alias, cols, config);

    Exchangerate.associate= function(models){
        Exchangerate.hasMany(models.Productos, {
            as:"products",
            foreignKey:"exchange_id"
        }) 

    }

    return Exchangerate;
}