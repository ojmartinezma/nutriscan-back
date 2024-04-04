import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const Tienda = sequelize.define('tienda',{
    ID_tienda : {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    uid : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombre : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fechaSuscripcion : {
        type: DataTypes.DATE,
        allowNull: false,
    },
    direccion : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    enlace: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});