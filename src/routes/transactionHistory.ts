import { Router } from "express";
import { getAll } from "../controllers/medicine";
import verifyToken from "../middlewares/verifyToken";
import zodSchemaValidator from "../lib/zodSchemaValidator";
import { addProductSchema, editStockBatchSchema } from "../zodSchema/product";
import { edit } from "../controllers/batch";
import { getMine } from "../controllers/transactionHistory";


const TransactionHistoryRouter = Router({ mergeParams: true, caseSensitive:true })

// TransactionHistoryRouter.get('/', getAll)
TransactionHistoryRouter.get('/mine', verifyToken, getMine)
// TransactionHistoryRouter.post('/add', zodSchemaValidator(addProductSchema), addProduct)
// TransactionHistoryRouter.post('/login', login)
// TransactionHistoryRouter.patch('/changePassword', verifyToken, changePassword)
// TransactionHistoryRouter.patch('/update', verifyToken, update)
// TransactionHistoryRouter.post('/logout', verifyToken, logout)
// TransactionHistoryRouter.delete('/delete', verifyToken, deleteOne)

export default TransactionHistoryRouter
