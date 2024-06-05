import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";
import { Tienda } from "./tienda";

export const Historicoacctienda = sequelize.define('historicoacctienda',{
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    uid : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ID_tienda : {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fecha : {
        type: DataTypes.DATE,
        allowNull: false,
    }
});

Historicoacctienda.belongsTo(Tienda, {foreignKey:'ID_tienda', as:'tienda', constraints:false})
