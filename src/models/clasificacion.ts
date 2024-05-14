import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const Clasificacion = sequelize.define('clasificacion',{
    ID_producto : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    ID_tag: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ID_tienda: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});