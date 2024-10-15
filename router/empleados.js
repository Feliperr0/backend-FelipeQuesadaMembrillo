import { Router } from "express";
import {
    empleadosSalarioAlto,
    empleadosSalarioBajo,
    empleadoPorCargo,
    todosLosEmpleados,

} from "../controllers/empleados/read.js";

const router = Router();

// Obtener todos los empleados
router.get('/all', todosLosEmpleados);

// Obtener empleados por cargo
router.get('/cargo/:cargo', empleadoPorCargo);

// Obtener empleados con salario entre 0 y 30000
router.get('/salario/bajo', empleadosSalarioBajo);

// Obtener empleados con salario entre 30000 y 50000
router.get('/salario/alto', empleadosSalarioAlto);



export default router;