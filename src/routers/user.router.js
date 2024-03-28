import express from "express"
import { signIn, signUp } from "../controllers/users.controller.js"
import checkAuth from "../middleware/auth.js"

const userRouter  = express.Router()

userRouter.post("/signup",signUp)
userRouter.post("/signin",signIn)
export default userRouter