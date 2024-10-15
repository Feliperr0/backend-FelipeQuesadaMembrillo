import { Router } from "express";
import {todasLasTiendas, TiendaPorRegion, TiendaPorPais} from "../controllers/tiendas/read.js";


const router = Router()


// Obtener todas las tiendas
router.get('/all', todasLasTiendas);

// Obtener tiendas por región
router.get('/region/:region', TiendaPorRegion);

// Obtener tiendas por país
router.get('/pais/:pais', TiendaPorPais);

export default router