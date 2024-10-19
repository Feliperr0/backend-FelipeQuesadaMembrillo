import { Router } from "express";
import {
    todosLosProductos, productoPorTipo, productoPorMarca, productosOrdenMayorAMenor, productosOrdenMenorAMayor
} from "../controllers/productos/read.js";

import { crearProducto, crearProductos } from "../controllers/productos/create.js";


const router = Router();


router.get('/all', todosLosProductos);


router.get('/tipo/:tipo', productoPorTipo);

router.get('/marca/:marca', productoPorMarca);

router.get('/orden/mayor', productosOrdenMayorAMenor);

router.get('/orden/menor', productosOrdenMenorAMayor);

router.post('/nuevoproducto', crearProducto);

router.post('/nuevosproductos', crearProductos);
export default router;

