module.exports = (sequelize, dataTypes)=>{
    let alias = "Años";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        year:{
            type: dataTypes.INTEGER
        },
        
    };
    let config = {
        tableName: "years",
        timestamps: false
    }
    const Año= sequelize.define(alias, cols, config);
    return Año;
}