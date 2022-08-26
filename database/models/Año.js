module.exports = (sequelize, dataTypes)=>{
    let alias = "Antiguedad";
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

    Año.associate= function(models){
        Año.hasMany(models.Productos, {
            as:"products",
            foreignKey:"year_id"
        }) 

    }
    return Año;
}