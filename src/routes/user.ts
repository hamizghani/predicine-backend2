import { Router } from "express";
import { refreshToken } from "../controllers/refreshToken";
import { create, login, changePassword, update, logout, deleteOne, updatePrice, getSelf } from "../controllers/user";
import verifyToken from "../middlewares/verifyToken";
import zodSchemaValidator from "../lib/zodSchemaValidator";
import { updateProductPriceSchema } from "../zodSchema/product";


const userRouter = Router({ mergeParams: true, caseSensitive:true })

userRouter.get('/self', verifyToken, getSelf)
userRouter.post('/create', create)
userRouter.post('/login', login)
userRouter.patch('/changePassword', verifyToken, changePassword)
userRouter.patch('/updatePrice', zodSchemaValidator(updateProductPriceSchema), updatePrice)
userRouter.patch('/update', verifyToken, update)
userRouter.post('/logout', verifyToken, logout)
userRouter.delete('/delete', verifyToken, deleteOne)

userRouter.get('/refreshToken', refreshToken)

export default userRouter
