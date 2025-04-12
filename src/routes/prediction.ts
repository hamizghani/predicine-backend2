import { Router } from "express";
import { getRecommended } from "../controllers/prediction";


const PredictionRouter = Router({ mergeParams: true, caseSensitive:true })

PredictionRouter.get('/recommended', getRecommended)

export default PredictionRouter
