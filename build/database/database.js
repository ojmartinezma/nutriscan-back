"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('nutriscan_db', 'nutriscan_db_user', 'D85SsQNsI74qwGGrKNsk70UVstWa5c6I', {
    host: 'dpg-cnjrlgocmk4c739ik8v0-a.ohio-postgres.render.com',
    dialect: 'postgres'
});
exports.sequelize = sequelize;
