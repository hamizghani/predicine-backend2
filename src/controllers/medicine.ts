import prismaClient from "../services/db";
import { Request, Response } from "../types";


export const getAll = async (req: Request, res: Response) => {
    const medicineList = await prismaClient.medicine.findMany()
    res.json({medicines: medicineList})
}