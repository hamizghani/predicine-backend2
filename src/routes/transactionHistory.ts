import { Router } from "express";
import verifyToken from "../middlewares/verifyToken";
import { getMine, importHistory } from "../controllers/transactionHistory";
import zodSchemaValidator from "../lib/zodSchemaValidator";
import { importHistorySchema } from "../zodSchema/history";


const TransactionHistoryRouter = Router({ mergeParams: true, caseSensitive:true })

TransactionHistoryRouter.get('/mine', verifyToken, getMine)
TransactionHistoryRouter.post('/import', verifyToken, zodSchemaValidator(importHistorySchema), importHistory)

export default TransactionHistoryRouter
