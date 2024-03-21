import { Request, Response } from "express";
import { usuario } from "../models/usuario"


export const getUsuarios = async (_req:Request, res: Response) => {
    try {
        const listaUsuarios= await usuario.findAll();
        console.log("lista de usuarios");
        res.json(listaUsuarios);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}

export const createUsuario = async (req:Request, res: Response) => {
    try {
        const { id,nombre,fechaSuscripcion,fechaDeNacimiento,altura,peso,telefono,correo } = req.body;
        const newUsuario = await usuario.create({
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
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
}

// export const updateUsuario = async (req:Request, res: Response) => {
//     try {
//         const {id} = req.params;
//         const usuario = await usuario.findByPk(id);

//         console.log("usuaario actualizado");
//         res.sendStatus(204);
//     } catch(error: unknown){
//         if (error instanceof Error) {
//             res.status(500).json({"message":error.message})
//         }
//     }
    
// }

export const deleteUsuario = async (req:Request, res: Response) => {
    try {
        const { id } = req.params;
        await usuario.destroy({
            where: {
                id,
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