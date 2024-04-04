import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const Tag = sequelize.define('tag',{
    ID_tag: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    descripcion: {
        type: DataTypes.STRING,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    tipo: {
        type: DataTypes.STRING,
    },
});