import { Router } from "express";
import { refreshToken } from "../controllers/refreshToken";
import { create, login, changePassword, update, logout, deleteOne } from "../controllers/user";
import verifyToken from "../middlewares/verifyToken";


const userRouter = Router({ mergeParams: true, caseSensitive:true })

userRouter.post('/create', create)
userRouter.post('/login', login)
userRouter.patch('/changePassword', verifyToken, changePassword)
userRouter.patch('/update', verifyToken, update)
userRouter.post('/logout', verifyToken, logout)
userRouter.delete('/delete', verifyToken, deleteOne)

userRouter.get('/refreshToken', refreshToken)

export default userRouter
