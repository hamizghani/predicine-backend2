import { Router } from "express";
import { addProduct } from "../controllers/product";
import verifyToken from "../middlewares/verifyToken";
import zodSchemaValidator from "../../lib/zodSchemaValidator";
import { addProductSchema } from "../../zodSchema/product";


const productRouter = Router({ mergeParams: true, caseSensitive:true })

productRouter.post('/add', zodSchemaValidator(addProductSchema), addProduct)
// productRouter.post('/login', login)
// productRouter.patch('/changePassword', verifyToken, changePassword)
// productRouter.patch('/update', verifyToken, update)
// productRouter.post('/logout', verifyToken, logout)
// productRouter.delete('/delete', verifyToken, deleteOne)

export default productRouter
