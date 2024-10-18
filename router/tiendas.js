import { Router } from "express";
import { todasLasTiendas, TiendaPorRegion, TiendaPorPais } from "../controllers/tiendas/read.js";
import { crearTienda, crearTiendas } from "../controllers/tiendas/create.js";
import validar_campos from "../middlewares/validar_campos.js";


const router = Router()


router.get('/all', todasLasTiendas);
router.get('/region/:region', TiendaPorRegion);
router.get('/pais/:pais', TiendaPorPais);
router.post('/crearTienda', validar_campos(['nombre', 'direccion', 'region', 'pais', 'codigoPostal', 'telefono']), crearTienda)
router.post('/crearTiendas', validar_campos(['nombre', 'direccion', 'region', 'pais', 'codigoPostal', 'telefono']), crearTiendas)

export default router

