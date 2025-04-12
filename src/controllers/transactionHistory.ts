import prismaClient from "../services/db";
import { Request, Response } from "../types";
import { ImportHistoryParams } from "../zodSchema/history";


export const getMine = async (req: Request, res: Response) => {
    if (!req.user) { res.sendStatus(403); return; }

    try {
        const { since = '2000-01-01' }: { since?: string } = req.params;
        const history = await prismaClient.transactionHistory.findMany({
            where: {
                userId: req.user.id,
                createdAt: {
                    gte: (new Date(since))
                }
            },
            include: {
                medicine: true
            }
        })

        res.json({ transactionHistory: history })
    } catch (e) {
        console.log(e)
        res.json({ status: "Failed", error: e }).status(500)
    }
}

export const importHistory = async (req: Request, res: Response) => {
    if (!req.user?.id) { res.sendStatus(403); return; }

    try {
        const real = req.body
        const { history }: ImportHistoryParams = req.body
        console.log(real, history)

        const medicines = await prismaClient.medicine.findMany()

        const converter: Record<string, number> = {};
        medicines.forEach((e) => { converter[e.name] = e.id })

        const imported = await prismaClient.transactionHistory.createMany({
            skipDuplicates: true,
            data: history.map((e) => ({ medicineId: converter[e.medicineName], userId: req.user?.id || 0, price: e.price, amount: e.amount, createdAt: e.transactionDate }))
        })
        res.json({imported})
    } catch (e) {
        console.log(e)
        res.json({ status: "Failed", error: e }).status(500)
    }
}
