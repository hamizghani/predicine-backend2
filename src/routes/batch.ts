import { Router } from "express";
import verifyToken from "../middlewares/verifyToken";
import zodSchemaValidator from "../lib/zodSchemaValidator";
import { editStockBatchSchema } from "../zodSchema/product";
import { edit } from "../controllers/batch";


const StockBatchRouter = Router({ mergeParams: true, caseSensitive:true })

StockBatchRouter.patch('/edit', verifyToken, zodSchemaValidator(editStockBatchSchema), edit)

export default StockBatchRouter
