import process from "process";
import prismaClient from "../services/db";
import { Request, Response } from "../types";
import axios from "axios";


const {ML_BACKEND_URL} = process.env;


export const getRecommended = async (req: Request, res: Response) => {
    // if (!req.user) {res.sendStatus(403);return}

    // try {
    //     const userDatas = await prismaClient.$transaction([
    //         prismaClient.user.findMany(),
    //         prismaClient.transactionHistory.findMany(),
    //         prismaClient.userStock.findMany()
    //     ])
    //     const resp = await axios({
    //         url: `${ML_BACKEND_URL}/v1/recommended`,
    //         method: 'GET',
    //         data: {
    //             users: userDatas[0],
    //             history: userDatas[1],
    //             userStocks: userDatas[2]
    //         }
    //     })
    //     console.log(resp.data)
    //     res.json(resp.data)
    // } catch (e) {
    //     console.log(e)
    //     res.json({status: "Failed", error: e}).status(500)
    // }
    
    res.json({data:[{id: 1, amount: 5}, {id: 3, amount: 53}]})
}