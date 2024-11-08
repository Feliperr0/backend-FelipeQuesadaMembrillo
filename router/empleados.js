import { Router } from "express";
import {empleadosSalarioAlto,
    empleadosSalarioBajo,
    empleadoPorCargo,
    todosLosEmpleados,

} from "../controllers/empleados/read.js";

import { crearEmpleado, crearEmpleados } from "../controllers/empleados/create.js";



const router = Router();


router.get('/all', todosLosEmpleados);


router.get('/cargo/:cargo', empleadoPorCargo);


router.get('/salario/bajo', empleadosSalarioBajo);

router.get('/salario/alto', empleadosSalarioAlto);

router.post('/crearempleado', crearEmpleado)

router.post('/crearempleados', crearEmpleados)


export default router;