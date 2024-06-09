import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";
import { Tienda } from "./tienda";

export const Producto = sequelize.define('producto',{
    ID_producto : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ID_tienda : {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    referencia: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    foto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Producto.belongsTo(Tienda, { foreignKey: 'ID_tienda', as: 'tienda' });