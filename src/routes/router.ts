import express from "express";
import { Request, Response } from "express";
import { getUsuarios, createUsuario, deleteUsuario, getUsuario, updateUsuario } from "../controllers/usuarios.controller"
import { getProductos, createProducto, updateProducto, deleteProducto, getProducto } from "../controllers/productos.controller";
const router = express.Router();

router.get('/', (_req:Request, res:Response) => {
    // console.log(__dirname)
    console.log("servicios");
    res.send('api response');
})

router.get('/servicios', (_req:Request, res: Response) => {
    console.log( "servicios" );
    res.send( 'servicios' );
})

router.get( '/usuarios', getUsuarios );
router.post( '/usuarios', createUsuario );
router.put( '/usuarios/:uid', updateUsuario );
router.delete( '/usuarios/:uid', deleteUsuario );
router.get( '/usuarios/:uid', getUsuario );

router.get( '/productos', getProductos );
router.post( '/productos', createProducto );
router.put( '/productos/:id', updateProducto );
router.delete( '/productos/:id', deleteProducto );
router.get( '/productos/:id', getProducto );

module.exports = router;