import { Router } from "express";
import verifyToken from "../middlewares/verifyToken";
import { getMine } from "../controllers/transactionHistory";


const TransactionHistoryRouter = Router({ mergeParams: true, caseSensitive:true })

TransactionHistoryRouter.get('/mine', verifyToken, getMine)

export default TransactionHistoryRouter
