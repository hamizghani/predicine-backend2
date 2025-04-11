import { env } from "process";
import { Request, Response } from "../types";
import jwt from "jsonwebtoken";
import prismaClient from "../services/db";
import { Prisma } from "../generated/prisma";
import { TokenEnv } from "../types/user";

const {
    REFRESH_TOKEN_SECRET,
    ACCESS_TOKEN_SECRET,
    ACCESS_TOKEN_LIFETIME
} = env as unknown as TokenEnv;

export const refreshToken = async (req: Request, res: Response) => {
    try {
        const { refreshToken } = req.cookies;
        if (!refreshToken) {res.sendStatus(401);return;}

        jwt.verify(refreshToken as string, REFRESH_TOKEN_SECRET as string, async (err, decoded) => {
            try {
                if (err) {res.sendStatus(401);return;}

                const { user } = await prismaClient.tokens.findUniqueOrThrow({
                    where: { refresh: refreshToken },
                    include: { user: true }
                });

                if (user === null) {res.sendStatus(401);return;}

                const { id, username } = user;
                const accessToken = jwt.sign({ id, username }, ACCESS_TOKEN_SECRET as string, {
                    expiresIn: ACCESS_TOKEN_LIFETIME
                });

                res.json({ accessToken });
            } catch (error) {
                console.log(error)
                if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
                    {res.sendStatus(500);return;}
                }
            }
        });
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
