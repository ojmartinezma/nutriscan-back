import { Request, Response } from "express";
import { Producto } from "../models/producto"


export const getProductos = async (_req:Request, res: Response) => {
    try {
        const listaProductos= await Producto.findAll();
        console.log("lista de productos");
        res.json(listaProductos);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}

export const getProducto = async (req:Request, res: Response) => {
    try {         
        const { id } = req.params;
        const producto = await Producto.findByPk(id);
        console.log("producto");
        res.json(producto);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}

export const createProducto = async (req:Request, res: Response) => {
    try {
        const { ID_producto, ID_tienda, referencia, descripcion, foto } = req.body;
        const newProducto = await Producto.create({
            ID_producto,
            ID_tienda,
            referencia,
            descripcion,
            foto,
        });
        console.log("crear producto");
        res.json(newProducto);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
}

export const updateProducto = async (req:Request, res: Response) => {
    try {
        const { id } = req.params;
        const producto = await Producto.findByPk( id );
        console.log(req.body);
        producto?.set(req.body);
        await producto?.save();
        console.log("producto actualizado");
        res.json(producto);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}

export const deleteProducto = async (req:Request, res: Response) => {
    try {
        const { id } = req.params;
        await Producto.destroy({
            where: {
                id,
            }
        });
        console.log("producto borrado");
        res.sendStatus(204);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}