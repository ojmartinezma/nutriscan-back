import { Request, Response } from "express";
import { Historicoacctienda } from "../models/historicoacctienda"
import { Producto } from "../models/producto";


export const getHistoricoacctiendas = async (_req:Request, res: Response) => {
    try {
        const listaHistoricoacctiendas= await Historicoacctienda.findAll();
        console.log("lista de historials");
        res.json(listaHistoricoacctiendas);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}

export const getHistoricoacctienda = async (req:Request, res: Response) => {
    try {         
        const { id } = req.params;
        const historial = await Historicoacctienda.findByPk(id);
        console.log("historial");
        res.json(historial);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}

export const getHistoricoacctiendaUsuario = async (req:Request, res: Response) => {
    try {         
        const { id } = req.params;
        const historial = await Historicoacctienda.findAll({
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

export const createHistoricoacctienda = async (req:Request, res: Response) => {
    try {
        //const { ID_dia, uid, ID_producto, fecha, comido, calorias } = req.body;
        const newHistoricoacctienda = await Historicoacctienda.create(req.body);
        console.log("crear historial");
        res.json(newHistoricoacctienda);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
}

export const updateHistoricoacctienda = async (req:Request, res: Response) => {
    try {
        const { id } = req.params;
        const historial = await Historicoacctienda.findByPk( id );
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

export const deleteHistoricoacctienda = async (req:Request, res: Response) => {
    try {
        const { id } = req.params;
        await Historicoacctienda.destroy({
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