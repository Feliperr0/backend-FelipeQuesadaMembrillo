import { Router } from "express";
import { todasLasTiendas, TiendaPorRegion, TiendaPorPais } from "../controllers/tiendas/read.js";
import { createTienda, createTiendas } from "../controllers/tiendas/create.js";


const router = Router()


router.get('/all', todasLasTiendas);
router.get('/region/:region', TiendaPorRegion);
router.get('/pais/:pais', TiendaPorPais);
router.post('/createTienda', createTienda)
router.post('/crearTiendas', createTiendas)

export default router