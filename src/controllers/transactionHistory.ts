import prismaClient from "../services/db";
import { Request, Response } from "../types";


export const getMine = async (req: Request, res: Response) => {
    if (!req.user) {res.sendStatus(403);return;}

    try {
        const {since = '2000-01-01'}: {since?: string} = req.params;
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

        res.json({transactionHistory: history})
    } catch (e) {
        console.log(e)
        res.json({status: "Failed", error: e}).status(500)
    }
}
