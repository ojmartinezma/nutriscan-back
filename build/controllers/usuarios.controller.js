"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.updateUsuario = exports.createUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = require("../models/usuario");
const getUsuarios = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listaUsuarios = yield usuario_1.Usuario.findAll();
        console.log("lista de usuarios");
        res.json(listaUsuarios);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ "message": error.message });
        }
    }
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const usuario = yield usuario_1.Usuario.findByPk(id);
        console.log("usuario");
        res.json(usuario);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ "message": error.message });
        }
    }
});
exports.getUsuario = getUsuario;
const createUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, nombre, fechaSuscripcion, fechaDeNacimiento, altura, peso, telefono, correo } = req.body;
        const newUsuario = yield usuario_1.Usuario.create({
            id,
            nombre,
            fechaSuscripcion,
            fechaDeNacimiento,
            altura,
            peso,
            telefono,
            correo
        });
        console.log("crear usuario");
        res.json(newUsuario);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ "message": error.message });
        }
    }
});
exports.createUsuario = createUsuario;
const updateUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const usuario = yield usuario_1.Usuario.findByPk(id);
        console.log(req.body);
        usuario === null || usuario === void 0 ? void 0 : usuario.set(req.body);
        yield (usuario === null || usuario === void 0 ? void 0 : usuario.save());
        console.log("usuario actualizado");
        res.json(usuario);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ "message": error.message });
        }
    }
});
exports.updateUsuario = updateUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield usuario_1.Usuario.destroy({
            where: {
                id,
            }
        });
        console.log("usuario borrado");
        res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ "message": error.message });
        }
    }
});
exports.deleteUsuario = deleteUsuario;
