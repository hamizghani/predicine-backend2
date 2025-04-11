

// add product

import { Request, Response } from "../types";
import { AddProductParams } from "../../zodSchema/product";
import prismaClient from "../services/db";

export const addProduct = async (req: Request, res: Response) => {
    if (!req.user) {res.sendStatus(403);return;}

    try {

        const data: AddProductParams = req.body
    
        const userStockData = await prismaClient.userStock.upsert({
            where: {
                userId_medicineId: {
                    userId: req.user.id,
                    medicineId: data.medicineId
                }
            },
            create: {
                userId: req.user.id,
                medicineId: data.medicineId
            },
            update: {}
        })
    
        const batchData = await prismaClient.stockBatch.upsert({
            where: {
                userStockId_expirationDate: {
                    expirationDate: data.expirationDate,
                    userStockId: userStockData.id
                }
            },
            create: {
                ...data,
                userStockId: userStockData.id,
                amount: data.amount,
                expirationDate: data.expirationDate,
            },
            update: {
                amount: {
                    increment: data.amount
                }
            }
        })

        const finalUserStockState = await prismaClient.userStock.findMany({
            where: {
                id: req.user.id
            }
        })
        res.json({status: "Success", data: finalUserStockState})
    } catch (e) {
        console.log(e)
        res.json({status: "Failed", error: e}).sendStatus(400)
    }
}