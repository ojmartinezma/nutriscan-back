import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const Vista = sequelize.define('vista',{
    ID_metricas : {
        type: DataTypes.INTEGER,
    },
    ID_tienda: {
        type: DataTypes.INTEGER,
    },
    ID_producto: {
        type: DataTypes.INTEGER,
    },
    fecha: {
        type: DataTypes.DATE,
    },
});