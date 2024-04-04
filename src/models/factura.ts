import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const Factura = sequelize.define('factura',{
    ID_factura : {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    uid : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fechaPago: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    pago: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    moneda: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    referencia: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    estado: {
        type: DataTypes.INTEGER,
        allowNull: false,   
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});