import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const Producto = sequelize.define('producto',{
    ID_producto : {
        type: DataTypes.INTEGER,
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