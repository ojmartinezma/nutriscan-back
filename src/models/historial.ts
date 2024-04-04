import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const Historial = sequelize.define('historial',{
    ID_dia : {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    uid : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ID_producto : {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha : {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    comido : {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    calorias : {
        type: DataTypes.INTEGER,
        allowNull: false,   
    }

});