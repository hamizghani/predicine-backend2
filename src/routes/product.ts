import { Router } from "express";
import { addProduct, deleteStock, getAllMine, sellStock } from "../controllers/product";
import verifyToken from "../middlewares/verifyToken";
import zodSchemaValidator from "../lib/zodSchemaValidator";
import { addProductSchema } from "../zodSchema/product";


const productRouter = Router({ mergeParams: true, caseSensitive:true })

productRouter.post('/add', verifyToken, zodSchemaValidator(addProductSchema), addProduct)
productRouter.get('/mine', verifyToken, getAllMine)
productRouter.patch('/sell', verifyToken, sellStock)
productRouter.delete('/delete', verifyToken, deleteStock)

export default productRouter
