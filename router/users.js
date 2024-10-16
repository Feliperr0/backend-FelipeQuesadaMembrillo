import { Router } from "express";
import {allUser, userById, userByRole} from "../controllers/users/read.js";
import {create} from "../controllers/users/create.js"



const router = Router()

router.get('/all', allUser);
router.get('/role/:x', userByRole);
router.get('/id/:id', userById)
router.post('/create', create)

export default router