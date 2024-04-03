import express from "express";
import { Request, Response } from "express";
import { getUsuarios,createUsuario,deleteUsuario, getUsuario, updateUsuario } from "../controllers/usuarios.controller"
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

module.exports = router;