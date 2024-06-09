import { Request, Response } from "express";
import { Historial } from "../models/historial"
import { Producto } from "../models/producto";


export const getHistorials = async (_req:Request, res: Response) => {
    try {
        const listaHistorials= await Historial.findAll();
        console.log("lista de historials");
        res.json(listaHistorials);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}

export const getHistorial = async (req:Request, res: Response) => {
    try {         
        const { id } = req.params;
        const historial = await Historial.findByPk(id);
        console.log("historial");
        res.json(historial);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}

export const getHistorialTienda = async (req:Request, res: Response) => {
    try {         
        const { id } = req.params;
        const historial = await Historial.findAll({
            include: [{
                model: Producto,
                where: {
                    ID_tienda: id,
                },
                required: true, // Ensure it joins only when there's a matching product
            }],
            order: [['createdAt', 'ASC']]
        });
        console.log("historial");
        res.json(historial);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}

export const getHistorialUsuario = async (req:Request, res: Response) => {
    try {         
        const { id } = req.params;
        const historial = await Historial.findAll({
            where:{
                'uid':id
            },
            include: [
                {model: Producto, as:'producto'}
            ],
            order: [['createdAt', 'DESC']]
        });
        console.log("historial");
        res.json(historial);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}

export const createHistorial = async (req:Request, res: Response) => {
    try {
        //const { ID_dia, uid, ID_producto, fecha, comido, calorias } = req.body;
        const newHistorial = await Historial.create(req.body);
        console.log("crear historial");
        res.json(newHistorial);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
}

export const updateHistorial = async (req:Request, res: Response) => {
    try {
        const { id } = req.params;
        const historial = await Historial.findByPk( id );
        console.log(req.body);
        historial?.set(req.body);
        await historial?.save();
        console.log("historial actualizado");
        res.json(historial);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}

export const deleteHistorial = async (req:Request, res: Response) => {
    try {
        const { id } = req.params;
        await Historial.destroy({
            where: {
                id,
            }
        });
        console.log("historial borrado");
        res.sendStatus(204);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}