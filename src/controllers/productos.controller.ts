import { Request, Response } from "express";
import { Producto } from "../models/producto"
import { Op, Sequelize } from "sequelize";
import { Tienda } from "../models/tienda";


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

export const getProductosSinCodigo = async (req: Request, res: Response) => {
    try {
        console.log(req);
        const listaProductos= await Producto.findAll(
            {
                where: {
                    'referencia':{
                        [Op.startsWith]: "20009"
                    },
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
                'ID_producto': id,
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

export const getProductosAleatorios = async (_req: Request, res: Response) => {
    try {
        const { limit } = _req.params;  // Suponiendo que el límite se pasa como parámetro en la URL
        const limiteNumero = parseInt(limit, 10);  // Convertir a número

        if (isNaN(limiteNumero)) {
            res.status(400).json({ message: 'El parámetro limit debe ser un número' });
        }

        const productosAleatorios = await Producto.findAll({
            order: [
                Sequelize.literal('RANDOM()')  // Ordenar aleatoriamente
            ],
            limit: limiteNumero  // Limitar el número de resultados
        });

        console.log("Lista de productos aleatorios");
        console.log(productosAleatorios);
        res.json(productosAleatorios);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
};

export const getProductosNombre = async (_req:Request, res: Response) => {
    try {
        const { nombre } = _req.params;
        const listaProductos= await Producto.findAll(
            {
                where: {
                    'nombre':{
                        [Op.iLike]: '%'+nombre+'%'
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

export const getProductosEnlacesByReferencia = async (req: Request, res: Response) => {
    try {
        const { referencia } = req.params;
        const productos = await Producto.findAll({
            where: { referencia },
            include: [{
                model: Tienda,
                attributes: ['enlace'],
            }],
        });

        console.log("lista de productos por referencia");
        console.log(productos);

        // const enlaces = productos.map(producto => producto.Tienda?.enlace).filter(Boolean);

        res.json({ productos });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ "message": error.message });
        }
    }
};