import { Router } from "express";
import { getAll } from "../controllers/medicine";


const medicineRouter = Router({ mergeParams: true, caseSensitive:true })

medicineRouter.get('/', getAll)

export default medicineRouter
