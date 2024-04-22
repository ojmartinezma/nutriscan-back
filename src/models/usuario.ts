import { DataTypes } from "sequelize";
import { sequelize } from "../database/database";

export const Usuario = sequelize.define('Usuario',{
    uid : {
        type: DataTypes.STRING,
        primaryKey: true
    },
    nombre : {
        type: DataTypes.STRING,
            validate:{
                isAlphanumeric: true,
            }
    },
    fechaSuscripcion : {
        type: DataTypes.DATE,
        validate: {
            isDate: true, 
            isAfter: "2023-04-01",
        }
    },
    fechaDeNacimiento : {
        type: DataTypes.DATEONLY
    },
    altura : {
        type : DataTypes.INTEGER,
        validate: {
            min: 50,
            isInt: true,
        }
    },
    peso : {
        type: DataTypes.INTEGER,
        validate: {
            isInt: true,
            min: 15
        }
    },
    telefono : {
        type: DataTypes.STRING,
        validate: {
            is: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i
        }
    },
    correo : {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true, 
        }
    },
    foto : {
        type: DataTypes.STRING
    }
});