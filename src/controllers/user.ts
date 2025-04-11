import { env } from "process";
import { Request, Response } from "../types";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import prismaClient from "../services/db";
import { Prisma } from "@prisma/client";
import { TokenEnv } from "../types/user";
import { UpdateProductPriceParams } from "../zodSchema/product";

const {
    REFRESH_TOKEN_SECRET,
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_LIFETIME,
    ACCESS_TOKEN_LIFETIME,
    ACCESS_TOKEN_LIFETIME_AFTER_LOGIN
} = env as unknown as TokenEnv;


export const getSelf = async (req: Request, res: Response) => {
    if (!req?.user?.id) { res.sendStatus(403); return; }

    const selfData = await prismaClient.user.findUnique({
        where: {
            id: req.user.id
        }
    })

    const maxSold = await prismaClient.userStock.aggregate({
        where: {
            userId: req.user.id,
        },
        _max: {
            sold: true,
        },
    });

    const mostSoldProduct = await prismaClient.userStock.findFirst({
        where: {
            userId: req.user.id,
            sold: maxSold._max.sold ?? 0,
        },
        select: {
            medicine: {
                select: {
                    name: true
                }
            }
        }
    });

    res.json({ 'user': {...selfData, 'bestselling': mostSoldProduct?.medicine.name} })
}


// Post
// accounts are created by a super user.
export const create = async (req: Request, res: Response) => {
    const { username, password, name, region, sales = 0, quantitySold = 0 } = req.body
    if (!username || !password || (password as string).length < 8) { res.sendStatus(400); return; }

    try {
        const duplicateUser = await prismaClient.user.findUnique({
            where: { username: username }
        })
        if (duplicateUser) { res.sendStatus(400); return; }

        const passwordHash = await bcrypt.hash(password, 10)

        const user = await prismaClient.user.create({
            data: {
                username: username,
                passwordHash: passwordHash,
                name,
                region,
                sales,
                quantitySold,
                price: Array(51).fill(20000)
            },
            select: {
                id: true,
                username: true,
                name: true,
                region: true
            }
        })
        { res.json({ user }); return; }
    } catch (e) {
        console.log(e)
    }
}


// Post
export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body
    if (req.user) { res.sendStatus(403); return; }
    if (!username || !password) { res.sendStatus(400); return; }

    try {
        const { id, passwordHash } = await prismaClient.user.findUniqueOrThrow({
            where: { username: username },
            select: {
                id: true,
                passwordHash: true
            }
        })
        const isMatch = await bcrypt.compare(password, passwordHash);
        if (!isMatch) { res.sendStatus(401);; return; }
        const refreshToken = jwt.sign({ id, username }, REFRESH_TOKEN_SECRET as string, {
            expiresIn: REFRESH_TOKEN_LIFETIME
        })
        const accessToken = jwt.sign({ id, username, recentlyLoggedIn: true }, ACCESS_TOKEN_SECRET as string, {
            expiresIn: ACCESS_TOKEN_LIFETIME_AFTER_LOGIN
        })

        const _ = await prismaClient.user.update({
            where: { id: id },
            data: {
                tokens: {
                    upsert: {
                        where: { userId: id },
                        update: {
                            access: accessToken,
                            refresh: refreshToken
                        },
                        create: {
                            access: accessToken,
                            refresh: refreshToken
                        }
                    }
                }
            }
        })

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            sameSite: false,
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        })
        res.json({ accessToken })
    } catch (e) {
        res.sendStatus(404)
    }
}


// Patch
export const changePassword = async (req: Request, res: Response) => {
    const { password = "", newPassword } = req.body
    if (!req.user) { res.sendStatus(403); return; }
    if (!password || !newPassword || (newPassword as string).length < 8) {
        { res.sendStatus(400); return; }
    }

    try {
        const { id, username } = req.user;

        const { passwordHash } = await prismaClient.user.findUniqueOrThrow({
            where: { id: req.user.id },
            select: { passwordHash: true }
        })

        const isMatch = await bcrypt.compare(password, passwordHash);
        if (!isMatch) { res.sendStatus(400);; return; }

        const newPasswordHash = await bcrypt.hash(newPassword, 10);

        const refreshToken = jwt.sign({ id, username }, REFRESH_TOKEN_SECRET as string, {
            expiresIn: REFRESH_TOKEN_LIFETIME
        })
        const accessToken = jwt.sign({ id, username }, ACCESS_TOKEN_SECRET as string, {
            expiresIn: ACCESS_TOKEN_LIFETIME
        })

        const user = await prismaClient.user.update({
            where: {
                id: req.user.id
            },
            data: {
                passwordHash: newPasswordHash,
                tokens: {
                    upsert: {
                        where: {
                            userId: req.user.id
                        },
                        update: {
                            access: accessToken,
                            refresh: refreshToken
                        },
                        create: {
                            access: accessToken,
                            refresh: refreshToken
                        }
                    }
                }
            },
            select: {
                id: true,
                username: true,
                name: true,
                region: true,
            }
        })

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        })
        res.json({ accessToken })
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
}

export const updatePrice = async (req: Request, res: Response) => {
    if (!req.user?.id) { res.sendStatus(403); return; }
    const { id, price }: UpdateProductPriceParams = req.body
    if (id <= 0 || id > 50) { res.sendStatus(400); return; }

    try {
        const user = await prismaClient.user.findUnique({
            where: {
                id: req.user.id
            }
        })

        const newPriceArray = user?.price || Array(51).fill(20000)
        newPriceArray[id] = price

        const newUser = await prismaClient.user.update({
            where: {
                id: req.user.id
            },
            data: {
                price: newPriceArray
            }
        })
        res.json({ user: newUser })
    } catch (e) {
        console.log(e)
        res.sendStatus(500)
    }
}


// Patch
export const update = async (req: Request, res: Response) => {
    const { password = "", name, region } = req.body
    if (!req.user) { res.sendStatus(403); return; }
    if ((password && password.length < 8)) { res.sendStatus(400); return; }

    try {
        const originalUser = await prismaClient.user.findUniqueOrThrow({
            where: { id: req.user.id }
        })

        const newPasswordHash = (password) ? (await bcrypt.hash(password, 10)) : originalUser.passwordHash;

        const user = await prismaClient.user.update({
            where: { id: req.user.id },
            data: {
                passwordHash: newPasswordHash,
                name,
                region
            },
            select: {
                id: true,
                username: true,
                name: true,
                region: true
            }
        })

        const tokens = await prismaClient.tokens.findUnique({
            where: { userId: req.user.id }
        })

        if (tokens) {
            const _ = await prismaClient.tokens.delete({
                where: { userId: req.user.id }
            })
        }

        { res.json({ user }); return; }
    } catch (e) {
        console.log(e)
    }
}


// Post
export const logout = async (req: Request, res: Response) => {
    if (!req.user) { res.sendStatus(200); return; }

    try {
        const user = await prismaClient.user.findUnique({
            where: {
                id: req.user.id
            },
            select: {
                id: true,
                username: true,
            }
        })

        if (!user) { res.sendStatus(404); return; }

        const tokens = await prismaClient.tokens.findUnique({
            where: { userId: req.user.id }
        })

        if (tokens) {
            const _ = await prismaClient.tokens.delete({
                where: { userId: req.user.id }
            })
        }

        res.clearCookie('refreshToken')
        { res.sendStatus(200); return; }
    } catch (e) {
        console.log(e)
        { res.sendStatus(500); return; }
    }
}


// Delete
export const deleteOne = async (req: Request, res: Response) => {
    if (!req.user) { res.sendStatus(403); return; }

    try {
        const user = await prismaClient.user.findUniqueOrThrow({
            where: { id: req.user.id },
            select: {
                id: true,
                username: true
            }
        });

        const deletedUser = await prismaClient.user.delete({
            where: { id: req.user.id },
            select: {
                id: true,
                username: true
            }
        })

        { res.sendStatus(201); return; }
    } catch (e) {
        if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025') {
            { res.sendStatus(404); return; }
        } else {
            console.log(e)
        }
    }
}
