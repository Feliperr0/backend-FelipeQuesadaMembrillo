import { Router } from "express";
import {empleadosSalarioAlto,
    empleadosSalarioBajo,
    empleadoPorCargo,
    todosLosEmpleados,

} from "../controllers/empleados/read.js";

import { crearEmpleado, crearEmpleados } from "../controllers/empleados/create.js";

import validar_campos from "../middlewares/validar_campos.js";

const router = Router();


router.get('/all', todosLosEmpleados);


router.get('/cargo/:cargo', empleadoPorCargo);


router.get('/salario/bajo', empleadosSalarioBajo);

router.get('/salario/alto', empleadosSalarioAlto);

router.post('/crearempleado', validar_campos(['nombre', 'cargo', 'salario']),crearEmpleado)

router.post('/crearempleados', validar_campos(['nombre', 'cargo', 'salario']), crearEmpleados)


export default router;