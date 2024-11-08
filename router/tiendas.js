import { Router } from "express";
import { todasLasTiendas, TiendaPorRegion, TiendaPorPais } from "../controllers/tiendas/read.js";
import { crearTienda, crearTiendas } from "../controllers/tiendas/create.js";


const router = Router()


router.get('/all', todasLasTiendas);

router.get('/region/:region', TiendaPorRegion);

router.get('/pais/:pais', TiendaPorPais);

router.post('/crearTienda',  crearTienda)

router.post('/crearTiendas',  crearTiendas)


export default router

