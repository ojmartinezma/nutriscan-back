import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const Usuario = sequelize.define('Usuario',{
    id : {
        type: DataTypes.STRING,
        primaryKey: true
    },
    nombre : {
        type: DataTypes.STRING,
    },
    fechaSuscripcion : {
        type: DataTypes.DATE
    },
    fechaDeNacimiento : {
        type: DataTypes.DATEONLY
    },
    altura : {
        type : DataTypes.INTEGER
    },
    peso : {
        type: DataTypes.INTEGER
    },
    telefono : {
        type: DataTypes.STRING
    },
    correo : {
        type: DataTypes.STRING
    }
});