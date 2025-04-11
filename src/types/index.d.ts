import {Request as ExpressRequest, Response as ExpressResponse, NextFunction as ExpressNextFunction} from 'express'

export type User = {id: number, username: string, recentlyLoggedIn?: boolean} // Without sensitive data.
export type Request = ExpressRequest & {user?:User}
export type Response = ExpressResponse
export type NextFunction = ExpressNextFunction
