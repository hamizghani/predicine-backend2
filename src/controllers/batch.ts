import prismaClient from "../services/db";
import { Request, Response } from "../types";
import { EditStockBatchParams } from "../zodSchema/product";


export const edit = async (req: Request, res: Response) => {
    if (!req?.user) {res.sendStatus(403);return;}

    try {
        const {id, amount, expirationDate}: EditStockBatchParams = req.body

        const batch = await prismaClient.stockBatch.findUniqueOrThrow({
            where: {
                id,
                userStock: {
                    userId: req.user.id
                }
            }
        })

        if (amount<0)
            throw new Error("Exceeds available stock amount!");

        const editedStock = await prismaClient.userStock.update({
            where: {
                id: batch.userStockId
            },
            data: {
                total: {
                    decrement: batch.amount-amount
                }
            }
        })
        if (amount==0) {
            const deletedBatch = await prismaClient.stockBatch.delete({
                where: {
                    id
                }
            })
            res.json({'stockBatch': deletedBatch})
        } else {
            const editedBatch = await prismaClient.stockBatch.update({
                where: {
                    id
                },
                data: {
                    amount,
                    expirationDate
                }
            })
            res.json({'stockBatch': editedBatch})
        }
    } catch (e) {
        console.log(e)
        res.json({status: "Failed", error: e}).status(500)
    }
}