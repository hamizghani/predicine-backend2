import { Router } from "express";
import { getAll } from "../controllers/medicine";
import verifyToken from "../middlewares/verifyToken";
import zodSchemaValidator from "../lib/zodSchemaValidator";
import { addProductSchema } from "../zodSchema/product";


const medicineRouter = Router({ mergeParams: true, caseSensitive:true })

medicineRouter.get('/', getAll)

export default medicineRouter
