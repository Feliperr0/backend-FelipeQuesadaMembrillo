import { Router } from "express";
import usersRouter from './users.js'
import tiendasRouter from './tiendas.js'
import empleadosRouter from './empleados.js'
import productosRouter from './productos.js'
const router = Router ()

router.use('/users', usersRouter)
router.use('/tiendas', tiendasRouter)
router.use('/empleados', empleadosRouter)
router.use('/productos', productosRouter)

export default router