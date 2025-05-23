import { env } from 'process';
import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Request, User } from '../types';

const { ACCESS_TOKEN_SECRET } = env;


async function verifyToken(req: Request, res: Response, next: NextFunction) {
    const tokenHeader = req.headers.authorization
    if (!tokenHeader) {res.status(403).json({ message: "E102: Please login first." }); return;}

    const token = tokenHeader.split(' ')[1]

    jwt.verify(token, ACCESS_TOKEN_SECRET as string, (err, decoded) => {
        if (err) {res.status(403).json({ message: "E101: Please login again." }); return;}
        req.user = (decoded as User)
        req.user.recentlyLoggedIn ||= false;
        next()
    })
};

export default verifyToken;
