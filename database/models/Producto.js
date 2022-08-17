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
            type: dataTypes.
        },
        color_id:{
            type:
        },
        model_id:{
            type:
        },
        year_id:{
            type:
        },
        km_id:{
            type:
        },
        categories_id:{
            type:
        },
        image_filename:{
            type:
        },
        transmission:{
            type:
        },
        condition:{
            type:
        },
        stock:{
            type:
        },
        
    };
    let config = {
        tableName: "products",
        timestamps: false
    }
    const Producto= sequelize.define(alias, cols, config);
    return Producto;
}