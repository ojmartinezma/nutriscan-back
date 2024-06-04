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
                is: /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/,
                notEmpty: true,
                len: [2,100], 
            }
    },
    fechaSuscripcion : {
        type: DataTypes.DATE,
        validate: {
            isDate: true, 
            isAfter: "2024-04-01",
        }
    },
    tipoSuscripcion:{
        type: DataTypes.ENUM('gratis','pago','tienda'),
        allowNull:false,
        defaultValue:'gratis',
    },
    fechaDeNacimiento : {
        type: DataTypes.DATEONLY,
        validate:{
            isBefore: "2006-04-27", 
        }
    },
    altura : {
        type : DataTypes.INTEGER,
        validate: {
            min: 50,
            max: 300,
            isInt: true,
        }
    },
    peso : {
        type: DataTypes.INTEGER,
        validate: {
            isInt: true,
            min: 15,
            max: 400,
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
    racha: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ultimoLogueo:{
        type: DataTypes.DATE,
        validate: {
            isDate: true, 
            isAfter: "2024-04-01",
        }
    },
    foto : {
        type: DataTypes.STRING
    }
});