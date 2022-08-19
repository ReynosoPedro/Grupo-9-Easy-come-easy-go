module.exports = (sequelize, dataTypes)=>{
    let alias = "Km_intervalos";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        interval:{
            type: dataTypes.DECIMAL
        },
        
    };
    let config = {
        tableName: "km_intervals",
        timestamps: false
    }
    const Km_intervalo= sequelize.define(alias, cols, config);
    return Km_intervalo;
}