import express from "express";
import multer from "multer";
import { Request, Response } from "express";
import { getUsuarios, createUsuario, deleteUsuario, getUsuario, updateUsuario, cambiaSuscripcion } from "../controllers/usuarios.controller"
import { getProductos, createProducto, updateProducto, deleteProducto, getProducto, getProductosTienda, getProductosNombre, getProductosReferencia, getProductosSinCodigo, getProductosAleatorios, getProductosEnlacesByReferencia, getIDProductoByIDtiendaAndReferencia } from "../controllers/productos.controller";
import { createHistorial, deleteHistorial, getHistorial, getHistorialTienda, getHistorialUsuario, getHistorials, updateHistorial, } from "../controllers/historials.controller";
import { createTienda, deleteTienda, getTienda, getTiendas, updateTienda,getTiendaUsuario } from "../controllers/tiendas.controller";
import { uploadOffImage } from "../controllers/OffProxy.controller";
const router = express.Router();
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })


router.post('/uploadoffimg', upload.single('offimg'), uploadOffImage)

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
router.get( '/productossincodigo', getProductosSinCodigo );
router.get( '/productos/:id', getProducto );
router.get( '/productostienda/:idtienda', getProductosTienda );
router.get( '/productosnombre/:nombre', getProductosNombre );
router.get( '/productosreferencia/:referencia', getProductosReferencia );
router.get( '/productosaleatorios/:limit', getProductosAleatorios );
router.get( '/productosReferencias/:referencia', getProductosEnlacesByReferencia );
router.get( '/productosReferenciaTienda/:referencia/:ID_tienda', getIDProductoByIDtiendaAndReferencia );

router.get( '/historiales', getHistorials );
router.post( '/historiales', createHistorial );
router.put( '/historiales/:id', updateHistorial );
router.delete( '/historiales/:id', deleteHistorial );
router.get( '/historiales/:id', getHistorial );
router.get( '/historialusuario/:id', getHistorialUsuario );

router.get( '/tiendas', getTiendas );
router.post( '/tiendas', createTienda );
router.put( '/tiendas/:id', updateTienda );
router.delete( '/tiendas/:id', deleteTienda );
router.get( '/tiendas/:id', getTienda );
router.get( '/tiendasusuario/:uid', getTiendaUsuario );

router.get( '/historialaccproducto', getHistorials );
router.post( '/historialaccproducto', createHistorial );
router.put( '/historialaccproducto/:id', updateHistorial );
router.delete( '/historialaccproducto/:id', deleteHistorial );
router.get( '/historialaccproducto/:id', getHistorial );
router.get( '/historialaccproductoporusuario/:id', getHistorialUsuario );

router.get( '/historialacctienda', getHistorials );
router.post( '/historialacctienda', createHistorial );
router.put( '/historialacctienda/:id', updateHistorial );
router.delete( '/historialacctienda/:id', deleteHistorial );
router.get( '/historialacctienda/:id', getHistorialTienda );
router.get( '/historialacctiendaporusuario/:id', getHistorialUsuario );

module.exports = router;