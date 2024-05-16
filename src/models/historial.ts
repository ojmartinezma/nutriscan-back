import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";
import { Producto } from "./producto";

export const Historial = sequelize.define('historial',{
    ID_dia : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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

Historial.belongsTo(Producto, {foreignKey:'ID_producto', as:'producto', constraints:false})
