import express from "express";
import { Request, Response } from "express";
import { getUsuarios, createUsuario, deleteUsuario, getUsuario, updateUsuario, cambiaSuscripcion } from "../controllers/usuarios.controller"
import { getProductos, createProducto, updateProducto, deleteProducto, getProducto, getProductosTienda } from "../controllers/productos.controller";
import { createHistorial, deleteHistorial, getHistorial, getHistorials, updateHistorial, } from "../controllers/historials.controller";
import { createTienda, deleteTienda, getTienda, getTiendas, updateTienda,getTiendaUsuario } from "../controllers/tiendas.controller";
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
router.post( '/usuarios/cambiasuscripcion/:uid', cambiaSuscripcion );

router.get( '/productos', getProductos );
router.post( '/productos', createProducto );
router.put( '/productos/:id', updateProducto );
router.delete( '/productos/:id', deleteProducto );
router.get( '/productos/:id', getProducto );
router.get( '/productostienda/:idtienda', getProductosTienda );

router.get( '/historiales', getHistorials );
router.post( '/historiales', createHistorial );
router.put( '/historiales/:id', updateHistorial );
router.delete( '/historiales/:id', deleteHistorial );
router.get( '/historiales/:id', getHistorial );

router.get( '/tiendas', getTiendas );
router.post( '/tiendas', createTienda );
router.put( '/tiendas/:id', updateTienda );
router.delete( '/tiendas/:id', deleteTienda );
router.get( '/tiendas/:id', getTienda );
router.get( '/tiendasusuario/:uid', getTiendaUsuario );

module.exports = router;