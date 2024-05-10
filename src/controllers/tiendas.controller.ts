import { Request, Response } from "express";
import { Tienda } from "../models/tienda"


export const getTiendas = async (_req:Request, res: Response) => {
    try {
        const listaTiendas= await Tienda.findAll();
        console.log("lista de tiendas");
        res.json(listaTiendas);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}

export const getTienda = async (req:Request, res: Response) => {
    try {         
        const { id } = req.params;
        const tienda = await Tienda.findByPk(id);
        console.log("tienda");
        res.json(tienda);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}

export const createTienda = async (req:Request, res: Response) => {
    try {
        //const { ID_tienda, uid, nombre, fechaSuscripcion, direccion, enlace } = req.body;
        const newTienda = await Tienda.create(req.body);
        console.log("crear tienda");
        res.json(newTienda);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
}

export const updateTienda = async (req:Request, res: Response) => {
    try {
        const { id } = req.params;
        const tienda = await Tienda.findByPk( id );
        console.log(req.body);
        tienda?.set(req.body);
        await tienda?.save();
        console.log("tienda actualizado");
        res.json(tienda);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}

export const deleteTienda = async (req:Request, res: Response) => {
    try {
        const { id } = req.params;
        await Tienda.destroy({
            where: {
                id,
            }
        });
        console.log("tienda borrado");
        res.sendStatus(204);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}