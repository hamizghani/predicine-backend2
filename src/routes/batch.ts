import { Router } from "express";
import { getAll } from "../controllers/medicine";
import verifyToken from "../middlewares/verifyToken";
import zodSchemaValidator from "../lib/zodSchemaValidator";
import { addProductSchema, editStockBatchSchema } from "../zodSchema/product";
import { edit } from "../controllers/batch";


const StockBatchRouter = Router({ mergeParams: true, caseSensitive:true })

// StockBatchRouter.get('/', getAll)
StockBatchRouter.patch('/edit', verifyToken, zodSchemaValidator(editStockBatchSchema), edit)
// StockBatchRouter.post('/add', zodSchemaValidator(addProductSchema), addProduct)
// StockBatchRouter.post('/login', login)
// StockBatchRouter.patch('/changePassword', verifyToken, changePassword)
// StockBatchRouter.patch('/update', verifyToken, update)
// StockBatchRouter.post('/logout', verifyToken, logout)
// StockBatchRouter.delete('/delete', verifyToken, deleteOne)

export default StockBatchRouter
