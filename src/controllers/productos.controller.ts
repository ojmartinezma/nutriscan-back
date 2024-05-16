import { Request, Response } from "express";
import { Producto } from "../models/producto"


export const getProductos = async (_req:Request, res: Response) => {
    try {
        const listaProductos= await Producto.findAll();
        console.log("lista de productos");
        console.log(listaProductos)
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
        //const { ID_producto, ID_tienda, nombre , referencia, descripcion, foto } = req.body;
        const newProducto = await Producto.create(req.body);
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

export const getProductosTienda = async (_req:Request, res: Response) => {
    try {
        const { idtienda } = _req.params;
        const listaProductos= await Producto.findAll(
            {
                where: {
                    'ID_tienda':idtienda,
                }
            }
        );
        console.log("lista de productos por tienda");
        console.log(listaProductos)
        res.json(listaProductos);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}

export const getProductosNombre = async (_req:Request, res: Response) => {
    try {
        const { nombre } = _req.params;
        const listaProductos= await Producto.findAll(
            {
                where: {
                    'nombre':{
                        $like: '%'+nombre+'%'
                    },
                }
            }
        );
        console.log("lista de productos por nombre");
        console.log(listaProductos)
        res.json(listaProductos);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}

export const getProductosReferencia = async (_req:Request, res: Response) => {
    try {
        const { referencia } = _req.params;
        const listaProductos= await Producto.findAll(
            {
                where: {
                    'referencia': referencia,
                }
            }
        );
        console.log("lista de productos por referencia");
        console.log(listaProductos)
        res.json(listaProductos);
    } catch(error: unknown){
        if (error instanceof Error) {
            res.status(500).json({"message":error.message})
        }
    }
    
}