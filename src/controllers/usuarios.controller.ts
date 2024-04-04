import { Request, Response } from "express";
import { Usuario } from "../models/usuario"


export const getUsuarios = async (_req:Request, res: Response) => {
    try {
        const listaUsuarios= await Usuario.findAll();
        console.log("lista de usuarios");
        res.json(listaUsuarios);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}

export const getUsuario = async (req:Request, res: Response) => {
    try {         
        const { uid } = req.params;
        const usuario = await Usuario.findByPk(uid);
        console.log("usuario");
        res.json(usuario);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}

export const createUsuario = async (req:Request, res: Response) => {
    try {
        const { uid,nombre,fechaSuscripcion,fechaDeNacimiento,altura,peso,telefono,correo } = req.body;
        const newUsuario = await Usuario.create({
            uid,
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
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
}

export const updateUsuario = async (req:Request, res: Response) => {
    try {
        const { uid } = req.params;
        const usuario = await Usuario.findByPk( uid );
        console.log(req.body);
        usuario?.set(req.body);
        await usuario?.save();
        console.log("usuario actualizado");
        res.json(usuario);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}

export const deleteUsuario = async (req:Request, res: Response) => {
    try {
        const { uid } = req.params;
        await Usuario.destroy({
            where: {
                uid,
            }
        });
        console.log("usuario borrado");
        res.sendStatus(204);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}