import { Router } from "express";
import {
    empleadosSalarioAlto,
    empleadosSalarioBajo,
    empleadoPorCargo,
    todosLosEmpleados,

} from "../controllers/empleados/read.js";

const router = Router();


router.get('/all', todosLosEmpleados);


router.get('/cargo/:cargo', empleadoPorCargo);

router.get('/salario/bajo', empleadosSalarioBajo);


router.get('/salario/alto', empleadosSalarioAlto);



export default router;