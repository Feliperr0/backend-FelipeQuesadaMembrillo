import { Router } from "express";
import { todosLosProcesadores } from "../controllers/processors/read.js";
import { crearProcesador, crearProcesadores } from "../controllers/processors/create.js";

const router = Router();


router.get('/all', todosLosProcesadores);

router.post('/crearProcesador',  crearProcesador)

router.post('/crearProcesadores', crearProcesadores)




export default router