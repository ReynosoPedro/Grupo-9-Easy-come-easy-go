module.exports = (sequelize, dataTypes)=>{
    let alias = "Modelos";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        model:{
            type: dataTypes.STRING
        },
        
    };
    let config = {
        tableName: "models",
        timestamps: false
    }
    const Modelo= sequelize.define(alias, cols, config);
    return Modelo;
}