"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database/database");
exports.Usuario = database_1.sequelize.define('Usuario', {
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
    },
    fechaSuscripcion: {
        type: sequelize_1.DataTypes.DATE
    },
    fechaDeNacimiento: {
        type: sequelize_1.DataTypes.DATEONLY
    },
    altura: {
        type: sequelize_1.DataTypes.INTEGER
    },
    peso: {
        type: sequelize_1.DataTypes.INTEGER
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING
    },
    correo: {
        type: sequelize_1.DataTypes.STRING
    }
});
