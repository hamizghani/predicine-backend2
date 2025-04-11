

// add product

import { Request, Response } from "../types";
import { AddProductParams, SellProductParams } from "../../zodSchema/product";
import prismaClient from "../services/db";

export const addProduct = async (req: Request, res: Response) => {
    if (!req.user) { res.sendStatus(403); return; }
    try {

        const data: AddProductParams = req.body
        console.log(data)

        const userStockData = await prismaClient.userStock.upsert({
            where: {
                userId_medicineId: {
                    userId: req.user.id,
                    medicineId: data.medicineId
                }
            },
            create: {
                userId: req.user.id,
                medicineId: data.medicineId,
                total: data.amount
            },
            update: {
                total: {
                    increment: data.amount
                }
            }
        })

        const batchData = await prismaClient.stockBatch.upsert({
            where: {
                userStockId_expirationDate: {
                    expirationDate: data.expirationDate,
                    userStockId: userStockData.id
                }
            },
            create: {
                amount: data.amount,
                userStockId: userStockData.id,
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
                userId: req.user.id
            }
        })
        res.json({ status: "Success", data: finalUserStockState })
    } catch (e) {
        console.log(e)
        res.json({ status: "Failed", error: e }).sendStatus(400)
    }
}


export const getAllMine = async (req: Request, res: Response) => {
    if (!req.user) { res.sendStatus(403); return; }
    try {
        const myStocks = await prismaClient.userStock.findMany({
            where: {
                userId: req.user.id
            },
            include: {
                medicine: true
            }
        })
        res.json({ 'stocks': myStocks })
    } catch (e) {
        console.log(e)
        res.json({ status: "Failed", error: e }).sendStatus(400)
    }
}

export const sellStock = async (req: Request, res: Response) => {
    if (!req.user) { res.sendStatus(403); return; }

    try {
        const { id, amount }: SellProductParams = req.body;

        const availableStock = await prismaClient.userStock.findUniqueOrThrow({
            where: { id },
            include: {
                batches: {
                    select: {
                        id: true,
                        amount: true,
                        expirationDate: true
                    },
                    orderBy: {
                        expirationDate: 'asc'
                    }
                }
            }
        });

        const {price: currentUserPrices = []} = await prismaClient.user.findUniqueOrThrow({
            where: {
                id: req.user.id
            },
            select: {
                price: true
            }
        })

        if (!availableStock) {
            throw new Error('Stock not found');
        }

        let remaining = amount;
        const batchUpdates = [];

        for (const batch of availableStock.batches) {
            if (remaining <= 0) break;

            const deduct = Math.min(batch.amount, remaining);
            remaining -= deduct;

            batchUpdates.push({
                id: batch.id,
                newAmount: batch.amount - deduct
            });
        }

        if (remaining > 0) {
            throw new Error('Not enough stock to fulfill the request');
        }

        const result = await prismaClient.$transaction([
            ...batchUpdates.map(({ id, newAmount }) =>
                prismaClient.stockBatch.update({
                    where: { id },
                    data: { amount: newAmount }
                })
            ),
            prismaClient.userStock.update({
                where: { id },
                data: {
                    sold: { increment: amount },
                    total: { decrement: amount }
                }
            }),
            prismaClient.user.update({
                where: {
                    id: req.user.id
                },
                data: {
                    sales: {
                        increment: currentUserPrices[id]*amount
                    },
                    quantitySold: {
                        increment: amount
                    }
                }
            }),
            prismaClient.transactionHistory.create({
                data: {
                    amount,
                    medicineId: id,
                    price: currentUserPrices[id],
                    userId: req.user.id
                }
            })
        ])
        res.json({ status: "Success"})
    } catch (e) {
        console.log(e)
        res.json({ status: "Failed", error: e }).sendStatus(400)
    }
}