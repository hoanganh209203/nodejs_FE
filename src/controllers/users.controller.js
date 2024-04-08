import usersModel from "../models/users.model.js"
import bcrypt from 'bcrypt'
import { signInValidator, userValid } from "../validators/auth.valid.js"
import jwt from 'jsonwebtoken'
import 'dotenv/config'
export const signUp = async (req, res) => {
    try {
        const {error} = userValid.validate(req.body,{
            abortEarly:false
        })
        if(error) {
            const errors = error.details.map(err => err.message)
            return res.status(400).json({
                message: errors
            })
        }

        const datas = req.body
        console.log(datas);
        const userExit = await usersModel.findOne({ email: req.body.email })
        if (userExit) {
            return res.status(400).json({
                message: "Email tồn tại"
            })
        }
        const passwordHashed = await bcrypt.hash(datas.password,10)
        datas.password = passwordHashed
        const user = await usersModel.create({ ...req.body })
        user.password = undefined
        user.confirmPassword = undefined
        return res.status(200).json({
            message: "Dang ki thanh cong",
            users: user

        })
    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message

        })
    }
}

export const signIn = async (req, res) => {
    try {
        const {error} = signInValidator.validate(req.body,{
            abortEarly:false
        })
        if(error) {
            const errors = error.details.map(err => err.message)   
            return res.status(400).json({
                message: errors
            })
        }

        const user = await usersModel.findOne({ email: req.body.email })
        console.log(user.password);
        if (!user) {
            return res.status(404).json({
                message: "Email chua duoc dang ky ban co muon dang ky khong"
            })
        };
                
        const isMath = await bcrypt.compare(req.body.password,user.password)
        if (!isMath) {
            return res.status(404).json({
                message: "Password error"
            })
        }
        const token =  jwt.sign({ name: user.name, username: user.email }, process.env.KEY_SECRET, { expiresIn: "1h" })
        user.password = undefined
        user.confirmPassword = undefined
        return res.status(200).json({
            message: "Dang nhap thanh cong",
            user:user._doc,
            token
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
