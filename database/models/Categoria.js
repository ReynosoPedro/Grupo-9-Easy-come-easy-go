module.exports = (sequelize, dataTypes)=>{
    let alias = "Categorias";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type_auto:{
            type: dataTypes.DECIMAL
        },
        
    };
    let config = {
        tableName: "categories",
        timestamps: false
    }
    const Categoria= sequelize.define(alias, cols, config);
    return Categoria;
}