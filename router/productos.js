import { Router } from "express";
import { todosLosProductos, productoPorTipo, productoPorMarca, productosOrdenMayorAMenor, productosOrdenMenorAMayor
} from "../controllers/productos/read.js";

const router = Router();

// Obtener todos los productos
router.get('/all', todosLosProductos);

// Obtener productos por tipo
router.get('/tipo/:tipo', productoPorTipo);

// Obtener productos por marca
router.get('/marca/:marca', productoPorMarca);

// Ordenar productos por precio (de mayor a menor)
router.get('/orden/mayor', productosOrdenMayorAMenor);

// Ordenar productos por precio (de menor a mayor)
router.get('/orden/menor', productosOrdenMenorAMayor);

export default router;