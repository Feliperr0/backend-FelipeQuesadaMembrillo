import { Router } from "express";
import usersRouter from './users.js'
import tiendasRouter from './tiendas.js'
import empleadosRouter from './empleados.js'
import productosRouter from './productos.js'
import pokemonsRouter from './pokemons.js'
import procesadoresRouter from './processors.js'
const router = Router ()

router.use('/users', usersRouter)
router.use('/tiendas', tiendasRouter)
router.use('/empleados', empleadosRouter)
router.use('/productos', productosRouter)
router.use('/pokemons', pokemonsRouter)
router.use('/procesadores', procesadoresRouter)

export default router