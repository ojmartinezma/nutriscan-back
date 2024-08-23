import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";
import { Producto } from "./producto";

export const Historicoaccproducto = sequelize.define('historicoaccproducto',{
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cantidad : {
        type: DataTypes.INTEGER,
        allowNull: true,
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
        type: DataTypes.DATE,
        allowNull: false,
    }
});

Historicoaccproducto.belongsTo(Producto, {foreignKey:'ID_producto', as:'producto', constraints:false})
