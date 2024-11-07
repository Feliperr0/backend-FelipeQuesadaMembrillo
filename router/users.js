import { Router } from "express";
import { allUser, userById, userByRole } from "../controllers/users/read.js";
import { create, createUsers } from "../controllers/users/create.js"
import validator from "../middlewares/validator.js";
import schemaUsersCreated from "../schemas/user/create.js";
import accountExist from "../middlewares/accountExist.js";


const router = Router()

router.get('/all', allUser);

router.get('/role/:x', userByRole);

router.get('/id/:id', userById)



router.post('/register', validator(schemaUsersCreated), accountExist, create)

router.post('/createusers', createUsers)


export default router