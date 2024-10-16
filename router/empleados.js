import { Router } from "express";
import {empleadosSalarioAlto,
    empleadosSalarioBajo,
    empleadoPorCargo,
    todosLosEmpleados,

} from "../controllers/empleados/read.js";

import { createEmpleado } from "../controllers/empleados/create.js";

const router = Router();


router.get('/all', todosLosEmpleados);


router.get('/cargo/:cargo', empleadoPorCargo);


router.get('/salario/bajo', empleadosSalarioBajo);


router.get('/salario/alto', empleadosSalarioAlto);

router.post('/createEmpleado',createEmpleado)



export default router;