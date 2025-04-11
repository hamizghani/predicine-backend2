import { Router } from "express";
import { getAll } from "../controllers/medicine";
import verifyToken from "../middlewares/verifyToken";
import zodSchemaValidator from "../lib/zodSchemaValidator";
import { addProductSchema } from "../zodSchema/product";


const medicineRouter = Router({ mergeParams: true, caseSensitive:true })

medicineRouter.get('/', getAll)
// medicineRouter.post('/add', zodSchemaValidator(addProductSchema), addProduct)
// medicineRouter.post('/login', login)
// medicineRouter.patch('/changePassword', verifyToken, changePassword)
// medicineRouter.patch('/update', verifyToken, update)
// medicineRouter.post('/logout', verifyToken, logout)
// medicineRouter.delete('/delete', verifyToken, deleteOne)

export default medicineRouter
