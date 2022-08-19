module.exports = (sequelize, dataTypes)=>{
    let alias = "Productos";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING
        },
        brand_id:{
            type: dataTypes.INTEGER
        },
        color_id:{
            type:dataTypes.INTEGER
        },
        model_id:{
            type:dataTypes.INTEGER
        },
        year_id:{
            type:dataTypes.INTEGER
        },
        km_id:{
            type:dataTypes.INTEGER
        },
        prices:{
            type:dataTypes.DECIMAL
        },
        categories_id:{
            type:dataTypes.INTEGER
        },
        image_filename:{
            type:dataTypes.STRING
        },
        transmission:{
            type:dataTypes.STRING
        },
        condition:{
            type:dataTypes.STRING
        },
        stock:{
            type:dataTypes.STRING
        },
        
    };
    let config = {
        tableName: "products",
        timestamps: false
    }
    const Producto= sequelize.define(alias, cols, config);
    return Producto;
}